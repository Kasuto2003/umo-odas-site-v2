import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'

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

        {/* Script animations scroll — déclenche .visible sur .fade-up/.fade-left/.fade-right/.scale-in */}
        <Script id="scroll-animations" strategy="afterInteractive">{`
          (function() {
            const selectors = '.fade-up, .fade-left, .fade-right, .scale-in';
            function initObserver() {
              const els = document.querySelectorAll(selectors);
              if (!els.length) return;
              const obs = new IntersectionObserver((entries) => {
                entries.forEach((e, i) => {
                  if (e.isIntersecting) {
                    const delay = e.target.dataset.delay || 0;
                    setTimeout(() => e.target.classList.add('visible'), Number(delay));
                    obs.unobserve(e.target);
                  }
                });
              }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
              els.forEach(el => obs.observe(el));
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initObserver);
            } else {
              initObserver();
            }
            // Re-init après navigation Next.js
            const mo = new MutationObserver(() => initObserver());
            mo.observe(document.body, { childList: true, subtree: true });
          })();
        `}</Script>
      </body>
    </html>
  )
}
