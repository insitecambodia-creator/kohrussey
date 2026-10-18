/**
 * Frames a wide photo so it wipes in on scroll and drifts slightly as it passes through the
 * viewport. Pass a single `<Image className="h-full w-full object-cover" />` as the child.
 */
export function ParallaxFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div data-reveal="mask" className={`parallax relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
