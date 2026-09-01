/**
 * API client with automatic JWT token management and refresh.
 */

const TOKEN_KEY = "suvakta_access_token";

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setStoredToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearStoredToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

type FetchOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

async function refreshAccessToken(): Promise<string | null> {
  try {
    const res = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.accessToken) {
      setStoredToken(data.accessToken);
      return data.accessToken;
    }
    return null;
  } catch {
    return null;
  }
}

async function request<T = unknown>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { body, headers: customHeaders, ...rest } = options;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(customHeaders as Record<string, string>),
  };

  const token = getStoredToken();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  let res = await fetch(url, {
    ...rest,
    headers,
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  // If 401, try refreshing the token once
  if (res.status === 401 && token) {
    const newToken = await refreshAccessToken();
    if (newToken) {
      headers["Authorization"] = `Bearer ${newToken}`;
      res = await fetch(url, {
        ...rest,
        headers,
        credentials: "include",
        body: body ? JSON.stringify(body) : undefined,
      });
    }
  }

  let data: any;
  try {
    data = await res.json();
  } catch {
    // Fallback if the backend returns an HTML page (like a 413 Payload Too Large default response)
    const textData = await res.text().catch(() => "");
    data = { error: res.ok ? "Failed to parse response" : "Server returned an invalid response. The payload might be too large." };
  }

  if (!res.ok) {
    throw new ApiError(data.error || "Request failed", res.status, data);
  }

  return data as T;
}

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export const api = {
  get: <T = unknown>(url: string, options?: FetchOptions) =>
    request<T>(url, { ...options, method: "GET" }),

  post: <T = unknown>(url: string, body?: unknown, options?: FetchOptions) =>
    request<T>(url, { ...options, method: "POST", body }),

  put: <T = unknown>(url: string, body?: unknown, options?: FetchOptions) =>
    request<T>(url, { ...options, method: "PUT", body }),
};
