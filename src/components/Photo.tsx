import Image, { type StaticImageData } from "next/image";

type Props = {
  image: { src: StaticImageData; alt: string };
  sizes: string;
  /** Layout classes for the frame, for example `aspect-[4/5] md:col-span-6`. */
  className?: string;
  /** Hold the reveal back by 1 to 3 beats so it follows a heading. */
  delay?: 1 | 2 | 3;
  /** Keep the photo's own proportions instead of filling a fixed frame. */
  natural?: boolean;
};

/** A photo whose curtain lifts as it scrolls into view (see `data-reveal="mask"` in globals.css). */
export function Photo({ image, sizes, className = "", delay, natural = false }: Props) {
  return (
    <div data-reveal="mask" data-delay={delay} className={`relative overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        sizes={sizes}
        className={natural ? "h-auto w-full" : "h-full w-full object-cover"}
      />
    </div>
  );
}
