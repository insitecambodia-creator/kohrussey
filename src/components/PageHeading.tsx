export function PageHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="mx-auto max-w-6xl border-b border-ink/15 px-4 pb-10 pt-16 md:pt-24">
      <h1 className="max-w-[20ch] text-4xl md:text-6xl">{title}</h1>
      {intro ? <p className="mt-5 max-w-[60ch] text-lg text-ink/80">{intro}</p> : null}
    </header>
  );
}
