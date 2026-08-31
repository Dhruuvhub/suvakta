import { FaqItem } from "@/sections/FaqSection/components/FaqItem";

export const FaqList = () => {
  return (
    <div className="section-copy order-2 w-full min-w-0 md:order-none md:w-[min(540.444px,100%)]">
      <ul className="flex list-none flex-col gap-y-[15.3846px] pl-0 md:gap-y-[14.2222px]">
        <FaqItem
          question="What is Suvakta? How is it different from Samanjasya?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              <strong>Suvakta</strong> is Miranda House’s MUN Club, which organises MUN and Youth Parliament conferences. <strong>Samanjasya</strong> is Suvakta’s flagship MUN conference, open to everyone, <strong>irrespective</strong> of their association with the club. While participation in Samanjasya is open to all, contributing to the planning and volunteering for Suvakta’s events is an opportunity reserved for its members.
            </p>
          }
        />
        <FaqItem
          question="I don't have any experience in MUN. Am I still eligible to join ?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              <strong>Absolutely</strong>. No prior MUN experience is required to join Suvakta. Our training sessions take you from the basics to the actual conference environment, helping you understand the process, build confidence, and find your voice. All you need is the willingness to learn.
            </p>
          }
        />
        <FaqItem
          question="How many MUNs or conferences do I need to attend as a part of the club ?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              Members are expected to attend <strong>five MUNs</strong> in total - <strong>four official delegations and one unofficial MUN.</strong> Of the four official delegations, <strong>one</strong> may be a Suvakta-organised conference, either <em>Samanjasya</em> or <em>Miranda House Youth Summit (MHYS)</em>. This ensures that every member gets consistent exposure to both external conferences and the club's own MUN circuit. Members are expected to fulfill the 65 per cent attendance criteria to be eligible for the certificate.
            </p>
          }
        />
        <FaqItem
          question="I am a beginner, will I get some sort of training? Or how will I learn to do MUNs as a fresher ?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              <strong>Yes</strong>, you will be provided with training sessions.The training schedule will be conducted on a recurring basis, with offline training sessions every <strong>Saturday</strong>, followed by <strong>online training sessions every Sunday.</strong> Additionally, committee procedure mock simulations will be conducted every alternate <strong>Monday</strong> to facilitate ROP clearance.
            </p>
          }
        />
        <FaqItem
          question="What's the criteria to become a member, volunteer or head ?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              Volunteer and member selections will be conducted through <strong>forms</strong>, followed by <strong>shortlisting</strong> and an <strong>interview round</strong>. For Head positions, candidates must demonstrate consistent attendance, active participation, commitment, and involvement, followed by the <strong>application</strong> and <strong>interview process.</strong> Final selections will be based on the candidate’s responses, performance, and <strong>suitability</strong> for the respective role.
            </p>
          }
        />
      </ul>
    </div>
  );
};
