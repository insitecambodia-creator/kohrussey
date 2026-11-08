// Structured data (schema.org JSON-LD) for the home pages: the resort as a lodging business, and the website.
// It follows the markup on the old kohrusseyresort.com, with the email corrected to the one the site uses.
// Leave out anything the pages do not show.
import { getImage } from "astro:assets";
import logo from "../assets/images/koh-russey-resort-logo.png";
import { images } from "./images";
import { site } from "./site";

/** Where the resort is (from the old markup; check it against the map pin). */
const geo = { "@type": "GeoCoordinates", latitude: 10.497129, longitude: 103.554081 };

const amenities = ["Private Pool", "Private Beach", "Spa", "Restaurant", "Free Wi-Fi", "Infinity Pool", "Water Sports"];

/** `description` is the page's own (so the French page says it in French); `lang` is its language code. */
export async function homeSchema(siteUrl: URL | undefined, description: string, lang: string): Promise<Record<string, unknown>[]> {
  const origin = (siteUrl ?? new URL("https://www.kohrusseyresort.com")).origin + "/";
  const logoFile = await getImage({ src: logo });
  const photo = await getImage({ src: images.poolMorning.src, width: 1200, height: 630, fit: "cover", format: "jpeg" });

  return [
    {
      "@context": "https://schema.org",
      "@type": "Resort",
      "@id": `${origin}#resort`,
      name: site.name,
      url: origin,
      description,
      image: [new URL(photo.src, origin).href],
      logo: new URL(logoFile.src, origin).href,
      telephone: site.contact.phone.replace(/\s/g, ""),
      email: site.contact.email,
      priceRange: "$$$",
      checkinTime: "14:00",
      checkoutTime: "12:00",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Koh Russey Resort, Bamboo Island, Ong Village",
        addressLocality: "Prey Nup District, Ream Commune",
        addressRegion: "Preah Sihanouk",
        postalCode: "18108",
        addressCountry: "KH",
      },
      geo,
      hasMap: site.contact.mapUrl,
      amenityFeature: amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
      sameAs: [...Object.values(site.social), "https://twitter.com/koh_russey"],
      inLanguage: lang,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${origin}#website`,
      url: origin,
      name: site.name,
      inLanguage: ["en", "fr-FR", "zh-CN"],
      publisher: { "@id": `${origin}#resort` },
    },
  ];
}
