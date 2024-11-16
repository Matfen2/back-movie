import "./globals.css";

export const metadata = {
  title: "Votre Application",
  description: "Description de l'application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Ajouter le lien vers Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+yeILBoVD591QIYirC65iaqukzvf/mwa5F0qhPav5w/91JmVM2hMDcnK1oNMGCdVk+i..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

