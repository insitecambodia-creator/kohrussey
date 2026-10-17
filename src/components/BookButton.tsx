import Link from "next/link";
import { bookingUrl, isBookingExternal } from "@/lib/site";

type Props = {
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

const styles = {
  solid: "bg-coral text-white hover:bg-[#bf5530]",
  outline: "border border-white/80 text-white hover:bg-white/10",
};

/** Sends guests to the Exely booking engine (or the contact page until it is configured). */
export function BookButton({ children = "Book now", variant = "solid", className = "" }: Props) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${styles[variant]} ${className}`;
  const href = bookingUrl();

  if (isBookingExternal()) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
