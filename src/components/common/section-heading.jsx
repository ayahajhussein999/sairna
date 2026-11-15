function SectionHeading({
  firstText,
  highlightText,
  description,
  descriptionCentered = false,
  twoLines = false,
  titleSize = "text-3xl",
  descriptionSize = "text-sm",
}) {
  return (
    <div className="w-fit">
      <h2
        className={`${titleSize} font-black leading-relaxed ${
          twoLines ? "flex flex-col" : "flex flex-row gap-2"
        }`}
      >
        <span className="text-text">{firstText}</span>
        <span className="text-primary">{highlightText}</span>
      </h2>

      {description && (
        <p
          className={`${descriptionSize} text-muted leading-7 mt-3 ${
            descriptionCentered ? "text-center" : "text-start"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;