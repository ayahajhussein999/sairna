import SectionHeading from "../common/section-heading";

export default function ProcessCard({
  number,
  icon,
  iconBg,
  iconColor,
  firstText,
  description,
}) {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)] p-[32px]">
      <span className="absolute top-[14px] left-[25px] text-[54px] leading-none text-border">
        {number}
      </span>

      <div
        className={`mb-[21px] grid h-[60px] w-[60px] place-items-center rounded-[18px] ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>

      <SectionHeading firstText={firstText} description={description} />
    </div>
  );
}
