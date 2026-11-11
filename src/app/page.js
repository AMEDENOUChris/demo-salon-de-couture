import Link from "next/link";
import site from "../site.config";
import { items } from "../data";
import { Card, Foot, Hours, wa } from "../lib";
import Nav from "../components/Nav";

const steps = ["Prise de mesures", "Choix du tissu", "Essayage", "Livraison"];

export default function Home() {
  return (
    <>
      <Nav />
      <section className="hero container">
        <div><p className="kicker">Couture sur mesure</p><h1>Des tenues <em>qui vous ressemblent</em></h1><p>{site.tagline}</p><Link className="link" href="/modeles">Voir les modèles →</Link></div>
        <div className="archwrap"><img src="/images/atelier.svg" alt="Atelier de couture avec mannequin et machine à coudre" width="600" height="800" /></div>
      </section>
      <section className="wrap"><h2>Nos modèles</h2><div className="cards">{items.slice(0, 3).map((i) => <Card key={i.slug} it={i} />)}</div><p><Link className="link" href="/modeles">Tous les modèles →</Link></p></section>
      <section className="wrap"><h2>Du tissu à la tenue</h2><div className="steps">{steps.map((s, i) => <div key={s} className="step reveal"><span>Étape {i + 1}</span><h3>{s}</h3></div>)}</div></section>
      <section className="visit"><div className="container"><h2>Venir à l'atelier</h2><Hours /><p>{site.address} — <a href={site.mapsUrl}>voir la carte</a></p><a className="link" href={wa()}>Écrire sur WhatsApp →</a></div></section>
      <Foot />
    </>
  );
}
