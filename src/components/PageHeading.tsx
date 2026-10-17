export function PageHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-serif text-4xl font-semibold text-sea-dark">{title}</h1>
        {intro ? <p className="mt-3 max-w-2xl text-lg text-ink/80">{intro}</p> : null}
      </div>
    </section>
  );
}
