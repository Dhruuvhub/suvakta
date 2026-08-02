export type LoveImageCardProps = {
  imageUrl: string;
  containerVariant: string;
};

export const LoveImageCard = (props: LoveImageCardProps) => {
  return (
    <div
      className={`relative w-full max-w-[min(100%,26.9rem)] overflow-hidden rounded-[46.1538px] border border-suvakta-900 bg-white shadow-[rgba(0,0,0,0.15)_0px_7.69231px_0px_0px] md:max-w-[540.444px] md:rounded-[42.6667px] md:shadow-[rgba(0,0,0,0.15)_0px_7.11111px_0px_0px] ${props.containerVariant}`}
    >
      <div className="pt-[59.25%]" />
      <img
        src={props.imageUrl}
        sizes="(max-width: 991px) 100vw, 912px"
        alt=""
        className="pointer-events-none absolute left-0 top-0 h-full w-full max-w-full object-cover"
      />
    </div>
  );
};
