import Link from "next/link";
import site from "../../site.config";
import { items, labels, path } from "../../data";
import { Card, Foot, img, wa } from "../../lib";
import Nav from "../../components/Nav";

export const generateStaticParams = () => items.map((i) => ({ slug: i.slug }));
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `${items.find((i) => i.slug === slug).title} | ${site.name}` };
}

export default async function Detail({ params }) {
  const { slug } = await params;
  const it = items.find((i) => i.slug === slug);
  return (
    <>
      <Nav />
      <main className="wrap inner detail">
        <Link href={`/${path}`} className="back">{labels.back}</Link>
        <div className="detail__grid">
          <img className="detail__img" src={img(it.slug)} alt={it.title} width="600" height="600" />
          <div>
            <h1>{it.title}</h1>
            <p className="detail__price">{it.old && <s>{it.old}</s>} {it.price}</p>
            <p>{it.desc}</p>
            {it.options.map(([k, vals]) => <div key={k} className="opt"><b>{k}</b><div className="opts">{vals.map((v) => <span key={v}>{v}</span>)}</div></div>)}
            <dl className="specs">{it.specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
            <ul className="points">{it.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <a className={labels.btn} href={wa(labels.ctaMsg + it.title + ".")}>{labels.cta}</a>
          </div>
        </div>
        <h2>{labels.more}</h2>
        <div className="cards">{items.filter((i) => i.slug !== slug).slice(0, 3).map((i) => <Card key={i.slug} it={i} />)}</div>
      </main>
      <Foot />
    </>
  );
}
