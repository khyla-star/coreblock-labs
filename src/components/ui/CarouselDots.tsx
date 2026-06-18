type CarouselDotsProps = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
  idPrefix: string;
};

export default function CarouselDots({
  count,
  activeIndex,
  onSelect,
  className,
  idPrefix,
}: CarouselDotsProps) {
  return (
    <ul className={className} role="tablist">
      {Array.from({ length: count }, (_, index) => (
        <li
          key={index}
          className={index === activeIndex ? 'is-active' : ''}
          role="presentation"
        >
          <button
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`${idPrefix}-${index}`}
            aria-label={`${index + 1} of ${count}`}
            onClick={() => onSelect(index)}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
}
