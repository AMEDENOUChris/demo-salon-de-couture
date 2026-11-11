import site from "../../site.config";
import { Foot, Hours, wa } from "../../lib";
import { labels } from "../../data";
import Nav from "../../components/Nav";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="wrap inner">
        <header className="pagehead"><h1>Contact</h1><p>Le plus rapide : un message WhatsApp.</p></header>
        <div className="contact">
          <div className="box"><h2>WhatsApp</h2><p>{site.phone}</p><a className={labels.btn} href={wa()}>Nous écrire</a></div>
          <div className="box"><h2>Horaires</h2><Hours /></div>
          <div className="box"><h2>Adresse</h2><p>{site.address}</p><a href={site.mapsUrl}>Voir sur la carte</a></div>
        </div>
      </main>
      <Foot />
    </>
  );
}
