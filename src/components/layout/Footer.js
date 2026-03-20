import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Programme: [
    { label: 'Présentation', href: '/programme' },
    { label: 'Cohortes',     href: '/cohortes' },
    { label: 'Modules',      href: '/programme#modules' },
    { label: 'Webinaires',   href: '/webinaires' },
  ],
  Espace: [
    { label: 'Se connecter', href: '/plateforme' },
    { label: 'Candidater',   href: '/candidature' },
    { label: 'Ressources',   href: '/ressources' },
    { label: 'FAQ',          href: '/faq' },
  ],
  ODAS: [
    { label: 'Notre équipe', href: '/equipe' },
    { label: 'Contact',      href: '/contact' },
    { label: 'Centre ODAS',  href: 'https://centre-odas.org' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-umo-dark text-white">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo + description */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-umo.png"
              alt="Logo UMO ODAS"
              width={140}
              height={48}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xs">
              Un programme de renforcement de capacités 100% en ligne.
              Apprendre, échanger et agir ensemble pour l&apos;avortement sécurisé en Afrique.
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-umo-yellow">✉</span>
                <span>contact@centre-odas.org</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-umo-yellow">📍</span>
                <span>Abidjan, Côte d&apos;Ivoire</span>
              </div>
            </div>
          </div>

          {/* Colonnes liens */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-umo-yellow text-xs
                             uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Barre bas avec icônes genre */}
      <div className="border-t border-white/10">
        <div className="section-container py-4 flex flex-col md:flex-row
                        items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2025 Centre ODAS — Tous droits réservés</p>
          {/* Symboles décoratifs genre comme dans le template */}
          <div className="flex items-center gap-2 opacity-40">
            <span className="text-umo-yellow text-lg">✿</span>
            <span className="text-white text-sm">♀</span>
            <span className="text-umo-yellow text-sm">☻</span>
            <span className="text-umo-teal text-sm">▶</span>
            <span className="text-white text-sm">☯</span>
            <span className="text-umo-yellow text-sm">☘</span>
            <span className="text-white text-sm">✊</span>
            <span className="text-umo-teal text-sm">✿</span>
            <span className="text-white text-sm">♀</span>
          </div>
          <p className="text-white/30 text-xs">umo.centre-odas.org</p>
        </div>
      </div>
    </footer>
  )
}
