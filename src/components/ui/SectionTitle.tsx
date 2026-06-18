type SectionTitleProps = {
  lines: string[];
  className?: string;
  ariaLabel?: string;
};

export default function SectionTitle({
  lines,
  className = 'title text-anim',
  ariaLabel,
}: SectionTitleProps) {
  return (
    <h2 className={className} aria-label={ariaLabel ?? lines.join(' ')}>
      {lines.map((line) => (
        <div key={line} className="line-mask" aria-hidden="true">
          <div className="line" aria-hidden="true">
            {line}
          </div>
        </div>
      ))}
    </h2>
  );
}
