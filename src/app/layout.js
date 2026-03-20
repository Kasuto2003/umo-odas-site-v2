import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// ─── Métadonnées SEO du site ──────────────────────────────────────────────
export const metadata = {
  title: {
    default: 'Université Militante ODAS — Formation en ligne',
    template: '%s | UMO ODAS',
  },
  description: 'Programme de renforcement de capacités 100% en ligne pour les militant·es engagé·es pour l\'avortement sécurisé en Afrique.',
  keywords: ['ODAS', 'formation', 'militante', 'avortement sécurisé', 'Afrique', 'université en ligne'],
  authors: [{ name: 'Centre ODAS' }],
  openGraph: {
    title: 'Université Militante ODAS',
    description: 'Formation militante en ligne — Ensemble pour l\'avortement sécurisé',
    url: 'https://umo.centre-odas.org',
    siteName: 'UMO ODAS',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/* Navbar fixe en haut de toutes les pages */}
        <Navbar />

        {/* Contenu principal de chaque page */}
        <main>
          {children}
        </main>

        {/* Footer en bas de toutes les pages */}
        <Footer />
      </body>
    </html>
  )
}
