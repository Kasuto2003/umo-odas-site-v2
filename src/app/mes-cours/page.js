'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

const cours = [
  {
    titre: 'Focus sur le plaidoyer digital et la mobilisation en ligne.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    statut: 'En cours',
    bg: '#321b45',
    textColor: 'white',
    imageBg: null,
    usePhoto: true,
  },
  {
    titre: 'Renforcement des capacités en communication et storytelling.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    statut: 'En cours',
    bg: '#34b7ad',
    textColor: 'white',
    imageBg: '#2a9d8f',
    imageText: 'sto·ry\n·tel·ling',
  },
  {
    titre: 'La première cohorte — poser les bases du militantisme informé.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    statut: 'En cours',
    bg: '#622ed1',
    textColor: 'white',
    imageBg: null,
    useAlt: true,
  },
  {
    titre: 'Renforcement des capacités en communication et storytelling.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    statut: 'Terminé',
    bg: '#ecc92f',
    textColor: '#321b45',
    imageBg: '#d4a017',
    imageText: 'sto·ry\n·tel·ling',
  },
  {
    titre: 'Focus sur le plaidoyer digital et la mobilisation en ligne.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    statut: 'En cours',
    bg: '#321b45',
    textColor: 'white',
    imageBg: null,
    usePhoto: true,
  },
  {
    titre: 'Renforcement des capacités en communication et storytelling.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    statut: 'Terminé',
    bg: '#34b7ad',
    textColor: 'white',
    imageBg: '#2a9d8f',
    useAlt: true,
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
      </div>
    </div>
  )
}

function CoursCard({ c }) {
  const isTermine = c.statut === 'Terminé'
  const badgeStyle = isTermine
    ? { background: 'rgba(255,255,255,0.25)', color: c.textColor === 'white' ? 'white' : '#321b45', border: '1px solid rgba(255,255,255,0.4)' }
    : { background: 'rgba(255,255,255,0.2)', color: c.textColor === 'white' ? 'white' : '#321b45', border: '1px solid rgba(255,255,255,0.35)' }

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ background: c.bg }}
    >
      {/* Zone image */}
      <div className="relative" style={{ height: '180px', background: c.imageBg || c.bg, overflow: 'hidden' }}>
        {c.usePhoto && (
          <>
            <Image src="/hero-woman.jpg" alt="" fill className="object-cover object-top" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.35) 100%)' }} />
          </>
        )}
        {c.useAlt && (
          <>
            <Image src="/hero-man.jpg" alt="" fill className="object-cover object-center" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.4) 100%)' }} />
          </>
        )}
        {c.imageText && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-heading font-black text-center px-4"
              style={{
                fontSize: 'clamp(1.6rem,4vw,2.5rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
                color: c.textColor === 'white' ? 'rgba(255,255,255,0.9)' : 'rgba(50,27,69,0.8)',
                whiteSpace: 'pre-line',
              }}>
              {c.imageText}
            </div>
            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20" />
            <div className="absolute bottom-3 left-4 w-4 h-4 rounded-full bg-white/15" />
          </div>
        )}
        {/* Badge statut */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold"
          style={badgeStyle}>
          <BookOpen className="w-3 h-3" />
          {isTermine ? '✓ Terminé' : 'En cours'}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h3 className="font-heading font-black text-base mb-2 leading-tight"
          style={{ color: c.textColor === 'white' ? 'white' : '#321b45' }}>
          {c.titre}
        </h3>
        <p className="text-sm mb-4 leading-relaxed"
          style={{ color: c.textColor === 'white' ? 'rgba(255,255,255,0.7)' : 'rgba(50,27,69,0.65)' }}>
          {c.desc}
        </p>
        <Link href="/plateforme"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-heading font-bold text-xs transition-all duration-200"
          style={{
            border: `2px solid ${c.textColor === 'white' ? 'rgba(255,255,255,0.6)' : 'rgba(50,27,69,0.4)'}`,
            color: c.textColor === 'white' ? 'white' : '#321b45',
          }}>
          Lire la suite <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}

export default function MesCoursPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      // Attendre le chargement de l'auth depuis localStorage
      const timer = setTimeout(() => {
        if (!localStorage.getItem('umo-user')) {
          router.push('/plateforme')
        }
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [user, router])

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '440px' }}>
        <div className="absolute inset-0">
          <Image
            src="/hero-woman.jpg"
            alt="Mes cours"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(50,27,69,0.7) 0%, rgba(98,46,209,0.75) 60%, rgba(50,27,69,0.85) 100%)' }} />
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

        <div className="relative section-container text-center text-white"
          style={{ paddingTop: '140px', paddingBottom: '80px' }}>
          <h1 className="font-heading font-black text-white"
            style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.1, marginBottom: '16px' }}>
            Mes cours
          </h1>
          <p className="text-white/85 text-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
            Depuis 2022, nous formons des militant·es engagé·es à travers toute l&apos;Afrique francophone.
          </p>
        </div>
      </section>

      {/* ── SÉPARATEUR GENRE ── */}
      <GenderDivider />

      {/* ── GRILLE COURS ── */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {cours.map((c, i) => (
              <CoursCard key={i} c={c} />
            ))}
          </div>

          {/* Bouton Affichez tout */}
          <div className="flex justify-center mb-4">
            <Link href="/plateforme"
              className="btn-yellow-solid">
              Affichez tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STICKERS ── */}
      <StickerBand />

      {/* ── CTA INSCRIPTION ── */}
      <section className="py-16 bg-white text-center">
        <div className="section-container">
          <h2 className="font-heading font-black text-umo-purple mb-2"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.15 }}>
            Inscrivez-vous à<br />notre prochaine Cohorte
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
            Les candidatures pour la cohorte 2 sont ouvertes jusqu&apos;à épuisement des places.
          </p>
          <Link href="/candidature" className="btn-yellow-solid">
            Candidatez <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
