/**
 * Stand-in for a real photo until the resort's images are added to /public.
 * Swap for next/image once the files exist.
 */
export function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`flex items-end bg-gradient-to-br from-sea via-[#3aa0a8] to-[#e9d8b4] p-4 text-xs text-white/90 ${className}`}
    >
      {label}
    </div>
  );
}
