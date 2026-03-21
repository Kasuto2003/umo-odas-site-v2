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

      {/* ── Bande photos + pictos (comme page.js) ── */}
      <div className="py-5 overflow-hidden border-b border-white/10">
        <div className="flex items-center justify-center gap-5 flex-wrap px-6">
          {/* Picto-05 fleur jaune */}
          <Image src="/pictos/picto-05.png" alt="" width={36} height={36}
            className="object-contain flex-shrink-0 opacity-80"/>
          {/* Symbole ♀ blanc */}
          <span style={{color:'white', fontSize:'22px', fontWeight:'bold', flexShrink:0}}>♀</span>
          {/* Photo homme rond */}
          <div style={{width:'48px',height:'48px',borderRadius:'50%',overflow:'hidden',
            border:'2px solid rgba(255,255,255,.25)',flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={48} height={48}
              className="w-full h-full object-cover object-top"/>
          </div>
          {/* Étoile violette */}
          <div style={{width:'32px',height:'32px',background:'#622ed1',flexShrink:0,
            clipPath:'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'}}/>
          {/* Photo femme — plus grande, bordure jaune */}
          <div style={{width:'56px',height:'56px',borderRadius:'50%',overflow:'hidden',
            border:'2.5px solid #ecc92f',flexShrink:0}}>
            <Image src="/hero-woman.jpg" alt="" width={56} height={56}
              className="w-full h-full object-cover object-top"/>
          </div>
          {/* Picto-08 demi-cercle */}
          <Image src="/pictos/picto-08.png" alt="" width={28} height={28}
            className="object-contain flex-shrink-0" style={{filter:'brightness(0) invert(1)', opacity:.6}}/>
          {/* Picto-04 fleur teal */}
          <Image src="/pictos/picto-04.png" alt="" width={30} height={30}
            className="object-contain flex-shrink-0" style={{opacity:.8}}/>
          {/* Picto-07 feuilles jaunes */}
          <Image src="/pictos/picto-07.png" alt="" width={32} height={32}
            className="object-contain flex-shrink-0"/>
          {/* Picto-12 bouton scroll */}
          <Image src="/pictos/picto-12.png" alt="" width={34} height={34}
            className="object-contain flex-shrink-0"/>
          {/* 2e photo homme */}
          <div style={{width:'44px',height:'44px',borderRadius:'50%',overflow:'hidden',
            border:'2px solid rgba(52,183,173,.5)',flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={44} height={44}
              className="w-full h-full object-cover"/>
          </div>
          {/* ♀ teal */}
          <span style={{color:'#34b7ad', fontSize:'22px', fontWeight:'bold', flexShrink:0}}>♀</span>
          {/* Picto-19 symbole ♀ violet */}
          <Image src="/pictos/picto-19.png" alt="" width={28} height={34}
            className="object-contain flex-shrink-0" style={{filter:'brightness(0) invert(1)', opacity:.5}}/>
        </div>
      </div>

      {/* ── Contenu principal ── */}
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
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block transition-transform">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Barre bas ── */}
      <div className="border-t border-white/10">
        <div className="section-container py-4 flex flex-col md:flex-row
                        items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2025 Centre ODAS — Tous droits réservés</p>
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
