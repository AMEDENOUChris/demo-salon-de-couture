import fs from "fs";
import path from "path";
import Link from "next/link";
import site from "./site.config";

export const wa = (msg) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg || site.whatsappMessage)}`;
export const img = (slug) => (fs.existsSync(path.join(process.cwd(), "public/images", `${slug}.jpg`)) ? `/images/${slug}.jpg` : `/images/${slug}.svg`);
export const cid = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-");
export const Hours = () => site.hours.map((h) => <p key={h.days}><strong>{h.days}</strong> : {h.time}</p>);
export const Foot = () => (
  <>
    <footer className="foot">© {new Date().getFullYear()} {site.name} · Site de démonstration · <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></footer>
    <a className="wa" href={wa()}>WhatsApp</a>
  </>
);
export function Card({ it }) {
  return (
    <Link href={`/${it.slug}`} className="card reveal">
      <img src={img(it.slug)} alt={it.title} width="600" height="600" loading="lazy" />
      {it.badge && <span className="badge">{it.badge}</span>}
      <div className="card__body"><h3>{it.title}</h3><p>{it.desc.split(". ")[0]}.</p><span className="card__price">{it.old && <s>{it.old}</s>} {it.price}</span></div>
    </Link>
  );
}
