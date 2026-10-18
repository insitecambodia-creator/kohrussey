import Link from "next/link";
import { bookingUrl } from "@/lib/site";
import { button } from "@/lib/ui";

type Props = {
  children?: React.ReactNode;
  /** `light` sits on a light background, `dark` on a dark one. */
  on?: "light" | "dark";
  className?: string;
};

/** Sends guests to the booking page, which embeds the Exely booking engine. */
export function BookButton({ children = "Book now", on = "light", className = "" }: Props) {
  return (
    <Link href={bookingUrl()} className={`${on === "dark" ? button.accent : button.dark} ${className}`}>
      {children}
    </Link>
  );
}
