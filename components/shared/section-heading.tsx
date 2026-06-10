type Props = {
  subtitle?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl">
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {subtitle}
        </p>
      )}

      <h2 className="font-heading text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}