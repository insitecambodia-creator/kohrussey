/** Stand-in for a photo that has not been supplied yet. */
export function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-end border border-pool/25 bg-pool/10 p-4 text-sm text-pool ${className}`}
    >
      {label}
    </div>
  );
}
