import Link from "next/link";
import { bookingUrl } from "@/lib/site";

type Props = {
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

const styles = {
  solid: "bg-coral text-white hover:bg-[#bf5530]",
  outline: "border border-white/80 text-white hover:bg-white/10",
};

/** Sends guests to the booking page, which embeds the Exely booking engine. */
export function BookButton({ children = "Book now", variant = "solid", className = "" }: Props) {
  return (
    <Link
      href={bookingUrl()}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
