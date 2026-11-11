import { items, labels } from "../../data";
import { Card, Foot, cid } from "../../lib";
import Nav from "../../components/Nav";

export const metadata = { title: labels.listTitle };

export default function List() {
  const cats = [...new Set(items.map((i) => i.cat))];
  return (
    <>
      <Nav />
      <main className="wrap inner">
        <header className="pagehead"><h1>{labels.listTitle}</h1><p>{labels.listIntro}</p></header>
        <div className="chips">{cats.map((c) => <a key={c} href={`#${cid(c)}`} className="chip">{c}</a>)}</div>
        {cats.map((c) => <section key={c} id={cid(c)}><h2>{c}</h2><div className="cards">{items.filter((i) => i.cat === c).map((i) => <Card key={i.slug} it={i} />)}</div></section>)}
      </main>
      <Foot />
    </>
  );
}
