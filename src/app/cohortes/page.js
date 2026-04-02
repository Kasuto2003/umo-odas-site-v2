import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Nos Cohortes — UMO ODAS',
  description: 'Découvrez les cohortes de l\'Université Militante ODAS. Depuis 2022, nous formons des militant·es engagé·es à travers toute l\'Afrique francophone.',
}

const cohortes = [
  {
    num: 3,
    titre: 'Focus sur le plaidoyer digital et la mobilisation en ligne.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    bg: '#321b45',
    textColor: 'white',
    btnLabel: 'Lire la suite',
    btnHref: '/programme',
    btnStyle: 'outline-white',
    image: '/hero-woman.jpg',
  },
  {
    num: 2,
    titre: 'Renforcement des capacités en communication et storytelling.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    bg: '#34b7ad',
    textColor: 'white',
    btnLabel: 'Candidatez',
    btnHref: '/candidature',
    btnStyle: 'outline-white',
    image: null,
    imageText: 'sto·ry·tel·ling',
    imageBg: '#2a9d8f',
  },
  {
    num: 1,
    titre: 'Renforcement des capacités en communication et storytelling.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    bg: '#ecc92f',
    textColor: '#321b45',
    btnLabel: 'Candidatez',
    btnHref: '/candidature',
    btnStyle: 'outline-dark',
    image: null,
    imageText: 'sto·ry·tel·ling',
    imageBg: '#d4a017',
  },
]

function GenderDivider() {
  return (
    <div className="py-3 overflow-hidden text-center select-none"
      style={{ color: '#622ed1', opacity: 0.25, fontSize: '13px', letterSpacing: '6px' }}>
      ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥
    </div>
  )
}

function StickerBand() {
  return (
    <div className="py-5 overflow-hidden border-t border-gray-100">
      <div className="flex items-center justify-center gap-5 flex-wrap px-6">
        <Image src="/pictos/picto-05.png" alt="" width={36} height={36} className="object-contain flex-shrink-0" />
        <span style={{ color: '#622ed1', fontSize: '22px', fontWeight: 'bold' }}>♀</span>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(98,46,209,.25)', flexShrink: 0 }}>
          <Image src="/hero-man.jpg" alt="" width={48} height={48} className="w-full h-full object-cover object-top" />
        </div>
        <div style={{ width: '32px', height: '32px', background: '#622ed1', flexShrink: 0,
          clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', border: '2.5px solid #ecc92f', flexShrink: 0 }}>
          <Image src="/hero-woman.jpg" alt="" width={56} height={56} className="w-full h-full object-cover object-top" />
        </div>
        <Image src="/pictos/picto-08.png" alt="" width={28} height={28} className="object-contain flex-shrink-0" style={{ filter: 'brightness(0)', opacity: 0.25 }} />
        <Image src="/pictos/picto-04.png" alt="" width={30} height={30} className="object-contain flex-shrink-0" />
        <Image src="/pictos/picto-07.png" alt="" width={32} height={32} className="object-contain flex-shrink-0" />
        <Image src="/pictos/picto-12.png" alt="" width={34} height={34} className="object-contain flex-shrink-0" />
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(52,183,173,.4)', flexShrink: 0 }}>
          <Image src="/hero-man.jpg" alt="" width={44} height={44} className="w-full h-full object-cover" />
        </div>
        <span style={{ color: '#34b7ad', fontSize: '22px', fontWeight: 'bold' }}>♀</span>
        <Image src="/pictos/picto-19.png" alt="" width={28} height={34} className="object-contain flex-shrink-0" style={{ filter: 'brightness(0) invert(0)', opacity: 0.2 }} />
      </div>
    </div>
  )
}

export default function CohortesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '440px' }}>
        {/* Photo de fond */}
        <div className="absolute inset-0">
          <Image
            src="/hero-woman.jpg"
            alt="Nos cohortes"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(50,27,69,0.7) 0%, rgba(98,46,209,0.75) 60%, rgba(50,27,69,0.85) 100%)' }} />
          {/* Décos */}
          <div className="absolute left-6 top-20 opacity-60">
            <Image src="/pictos/picto-04.png" alt="" width={70} height={70} className="object-contain" />
          </div>
          <div className="absolute right-8 bottom-16 opacity-50">
            <Image src="/pictos/picto-07.png" alt="" width={60} height={60} className="object-contain" />
          </div>
          <div className="absolute right-16 top-16 opacity-40">
            <div style={{ width: '50px', height: '50px', background: '#ecc92f', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
          </div>
        </div>

        <div className="relative section-container text-center text-white" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
          <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.1, marginBottom: '16px' }}>
            Nos Cohortes
          </h1>
          <p className="text-white/85 text-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
            Depuis 2022, nous formons des militant·es engagé·es à travers toute l&apos;Afrique francophone.
          </p>
        </div>
      </section>

      {/* ── SÉPARATEUR GENRE ── */}
      <GenderDivider />

      {/* ── GRILLE COHORTES ── */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Card 1 — cohorte 3 (purple/dark) */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: cohortes[0].bg }}>
              {/* Image */}
              <div className="relative" style={{ height: '200px', overflow: 'hidden' }}>
                <Image
                  src="/hero-woman.jpg"
                  alt="Cohorte 3"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(50,27,69,0.6) 100%)' }} />
              </div>
              {/* Contenu */}
              <div className="p-5">
                <h3 className="font-heading font-black text-white text-base mb-2 leading-tight">
                  {cohortes[0].titre}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {cohortes[0].desc}
                </p>
                <Link href={cohortes[0].btnHref}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-white/60 text-white
                             font-heading font-bold text-xs hover:bg-white hover:text-umo-dark transition-all duration-200">
                  {cohortes[0].btnLabel} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 — cohorte 2 (teal) */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: cohortes[1].bg }}>
              {/* Image text-based storytelling */}
              <div className="relative flex items-center justify-center"
                style={{ height: '200px', background: cohortes[1].imageBg }}>
                <div className="text-center px-6">
                  <div className="font-heading font-black text-white/90 leading-tight"
                    style={{ fontSize: 'clamp(1.8rem,5vw,3rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                    sto·ry<br />·tel·ling
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20" />
                <div className="absolute bottom-3 left-4 w-5 h-5 rounded-full bg-white/15" />
              </div>
              {/* Contenu */}
              <div className="p-5">
                <h3 className="font-heading font-black text-white text-base mb-2 leading-tight">
                  {cohortes[1].titre}
                </h3>
                <p className="text-white/75 text-sm mb-4 leading-relaxed">
                  {cohortes[1].desc}
                </p>
                <Link href={cohortes[1].btnHref}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-white/60 text-white
                             font-heading font-bold text-xs hover:bg-white hover:text-umo-teal transition-all duration-200">
                  {cohortes[1].btnLabel} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 — cohorte 1 (yellow) */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: cohortes[2].bg }}>
              {/* Image text-based storytelling */}
              <div className="relative flex items-center justify-center"
                style={{ height: '200px', background: cohortes[2].imageBg }}>
                <div className="text-center px-6">
                  <div className="font-heading font-black leading-tight"
                    style={{ fontSize: 'clamp(1.8rem,5vw,3rem)', letterSpacing: '-0.02em', lineHeight: '1.1', color: 'rgba(50,27,69,0.85)' }}>
                    sto·ry<br />·tel·ling
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30" />
                <div className="absolute bottom-3 left-4 w-5 h-5 rounded-full bg-white/20" />
              </div>
              {/* Contenu */}
              <div className="p-5">
                <h3 className="font-heading font-black text-umo-dark text-base mb-2 leading-tight">
                  {cohortes[2].titre}
                </h3>
                <p className="text-umo-dark/70 text-sm mb-4 leading-relaxed">
                  {cohortes[2].desc}
                </p>
                <Link href={cohortes[2].btnHref}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-umo-dark/50 text-umo-dark
                             font-heading font-bold text-xs hover:bg-umo-dark hover:text-umo-yellow transition-all duration-200">
                  {cohortes[2].btnLabel} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* CTA — Prête à commencer ? */}
            <div className="rounded-2xl p-8 flex flex-col items-center justify-center text-center"
              style={{ background: 'white', border: '2px solid #f3ebff', minHeight: '320px' }}>
              <h2 className="font-heading font-black text-umo-purple mb-3"
                style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: '1.15' }}>
                Prête<br />à commencer&nbsp;?
              </h2>
              <p className="text-gray-500 text-sm mb-6 max-w-xs leading-relaxed">
                Les candidatures pour la cohorte 2 sont ouvertes jusqu&apos;à épuisement des places.
              </p>
              <Link href="/candidature" className="btn-yellow-solid">
                Candidatez <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── BANDE STICKERS ── */}
      <StickerBand />
    </>
  )
}
