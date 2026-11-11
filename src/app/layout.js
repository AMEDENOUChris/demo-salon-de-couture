import "./globals.css";
import site from "../site.config";

export const metadata = { title: site.name, description: site.description };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
