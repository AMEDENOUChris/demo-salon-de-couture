import Link from "next/link";
import site from "../site.config";

export default function Nav() {
  return (
    <header className="top"><Link className="logo" href="/">{site.name}</Link>
      <nav><Link href="/">Accueil</Link><Link href="/modeles">Modèles</Link><Link href="/contact">Contact</Link></nav></header>
  );
}
