'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, Play, CheckCircle2, Clock } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

/* ── Données cohortes ── */
const cohortes = [
  {
    num: 3,
    annee: '2026',
    titre: 'Focus sur le plaidoyer digital et la mobilisation en ligne.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    status: 'En cours',
    bg: '#321b45',
    textColor: 'white',
    image: '/hero-woman.jpg',
  },
  {
    num: 2,
    annee: '2025',
    titre: 'Renforcement des capacités en communication et storytelling.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    status: 'En cours',
    bg: '#34b7ad',
    textColor: 'white',
    imageBg: '#2a9d8f',
    imageText: 'sto·ry\n·tel·ling',
  },
  {
    num: 1,
    annee: '2025',
    titre: 'La première cohorte à poser les bases du militantisme informé.',
    desc: 'Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.',
    status: 'Terminé',
    bg: '#ecc92f',
    textColor: '#321b45',
    imageBg: '#d4a017',
    imageText: 'mili\n·tan·tis·me',
  },
]

/* ── Composants utilitaires ── */
function GenderDivider() {
  return (
    <div className="py-3 overflow-hidden text-center select-none"
      style={{ color: '#622ed1', opacity: 0.22, fontSize: '13px', letterSpacing: '6px' }}>
      ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥ ♀ ♂ ⚥
    </div>
  )
}

function StatusBadge({ status, dark = false }) {
  const isEnCours = status === 'En cours'
  if (dark) {
    // For yellow card (dark text)
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
        style={{
          background: isEnCours ? 'rgba(50,27,69,0.12)' : 'rgba(50,27,69,0.08)',
          color: isEnCours ? '#321b45' : 'rgba(50,27,69,0.5)',
          border: `1px solid ${isEnCours ? 'rgba(50,27,69,0.25)' : 'rgba(50,27,69,0.15)'}`,
        }}>
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: isEnCours ? '#321b45' : 'rgba(50,27,69,0.35)' }} />
        {status}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
      style={{
        background: isEnCours ? 'rgba(52,183,173,0.22)' : 'rgba(255,255,255,0.12)',
        color: isEnCours ? '#34b7ad' : 'rgba(255,255,255,0.55)',
        border: `1px solid ${isEnCours ? 'rgba(52,183,173,0.45)' : 'rgba(255,255,255,0.2)'}`,
      }}>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: isEnCours ? '#34b7ad' : 'rgba(255,255,255,0.4)' }} />
      {status}
    </span>
  )
}

/* ── Vue NON CONNECTÉE ── */
function NotConnectedView() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px' }}>
        <div className="absolute inset-0">
          <Image src="/hero-woman.jpg" alt="Nos cohortes" fill className="object-cover object-top" priority />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(50,27,69,0.7) 0%, rgba(98,46,209,0.75) 60%, rgba(50,27,69,0.85) 100%)' }} />
          <div className="absolute left-6 top-20 opacity-55">
            <Image src="/pictos/picto-04.png" alt="" width={68} height={68} className="object-contain" />
          </div>
          <div className="absolute right-8 bottom-14 opacity-45">
            <Image src="/pictos/picto-07.png" alt="" width={58} height={58} className="object-contain" />
          </div>
          <div className="absolute right-16 top-14 opacity-35">
            <div style={{ width: '48px', height: '48px', background: '#ecc92f',
              clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
          </div>
        </div>
        <div className="relative section-container text-center text-white" style={{ paddingTop: 'clamp(90px, 18vw, 140px)', paddingBottom: '70px' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-heading font-bold tracking-widest uppercase"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)' }}>
            <span>♀</span> Formation
          </div>
          <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.1, marginBottom: '16px' }}>
            Nos Cohortes
          </h1>
          <p className="text-white/80 text-lg" style={{ maxWidth: '540px', margin: '0 auto' }}>
            Depuis 2022, nous formons des militant·es engagé·es à travers toute l&apos;Afrique francophone.
          </p>
        </div>
      </section>

      <GenderDivider />

      {/* GRILLE COHORTES */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Cohorte 3 — purple */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: cohortes[0].bg }}>
              <div className="relative" style={{ height: '190px', overflow: 'hidden' }}>
                <Image src="/hero-woman.jpg" alt="Cohorte 3" fill className="object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 35%, rgba(50,27,69,0.65) 100%)' }} />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-black text-white text-base mb-2 leading-tight">{cohortes[0].titre}</h3>
                <p className="text-white/65 text-sm mb-5 leading-relaxed">{cohortes[0].desc}</p>
                <Link href="/programme"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-white/55 text-white
                             font-heading font-bold text-xs hover:bg-white hover:text-umo-dark transition-all duration-200">
                  Lire la suite <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Cohorte 2 — teal */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: cohortes[1].bg }}>
              <div className="relative flex items-center justify-center" style={{ height: '190px', background: cohortes[1].imageBg }}>
                <div className="text-center px-6">
                  <div className="font-heading font-black text-white/90 leading-tight"
                    style={{ fontSize: 'clamp(1.8rem,5vw,3rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                    sto·ry<br />·tel·ling
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20" />
                <div className="absolute bottom-3 left-4 w-5 h-5 rounded-full bg-white/15" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-black text-white text-base mb-2 leading-tight">{cohortes[1].titre}</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">{cohortes[1].desc}</p>
                <Link href="/candidature"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-white/55 text-white
                             font-heading font-bold text-xs hover:bg-white hover:text-umo-teal transition-all duration-200">
                  Candidatez <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Cohorte 1 — yellow */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: cohortes[2].bg }}>
              <div className="relative flex items-center justify-center" style={{ height: '190px', background: cohortes[2].imageBg }}>
                <div className="text-center px-6">
                  <div className="font-heading font-black leading-tight"
                    style={{ fontSize: 'clamp(1.8rem,5vw,3rem)', letterSpacing: '-0.02em', lineHeight: '1.1', color: 'rgba(50,27,69,0.8)' }}>
                    mili<br />·tan·tis·me
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30" />
                <div className="absolute bottom-3 left-4 w-5 h-5 rounded-full bg-white/20" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-black text-umo-dark text-base mb-2 leading-tight">{cohortes[2].titre}</h3>
                <p className="text-umo-dark/65 text-sm mb-5 leading-relaxed">{cohortes[2].desc}</p>
                <Link href="/candidature"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-umo-dark/45 text-umo-dark
                             font-heading font-bold text-xs hover:bg-umo-dark hover:text-umo-yellow transition-all duration-200">
                  Candidatez <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* CTA Prête à commencer ? */}
            <div className="rounded-2xl p-8 flex flex-col items-center justify-center text-center"
              style={{ background: 'white', border: '2.5px solid #f3ebff', minHeight: '300px' }}>
              <div className="mb-4 opacity-40">
                <Image src="/pictos/picto-05.png" alt="" width={44} height={44} className="object-contain mx-auto" />
              </div>
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

      {/* Bandeau déco */}
      <div className="py-5 overflow-hidden border-t border-gray-100">
        <div className="flex items-center justify-center gap-5 flex-wrap px-6">
          <Image src="/pictos/picto-05.png" alt="" width={34} height={34} className="object-contain flex-shrink-0" />
          <span style={{ color: '#622ed1', fontSize: '22px', fontWeight: 'bold' }}>♀</span>
          <div style={{ width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(98,46,209,.22)', flexShrink: 0 }}>
            <Image src="/hero-man.jpg" alt="" width={46} height={46} className="w-full h-full object-cover object-top" />
          </div>
          <div style={{ width: '30px', height: '30px', background: '#622ed1', flexShrink: 0,
            clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
          <div style={{ width: '54px', height: '54px', borderRadius: '50%', overflow: 'hidden', border: '2.5px solid #ecc92f', flexShrink: 0 }}>
            <Image src="/hero-woman.jpg" alt="" width={54} height={54} className="w-full h-full object-cover object-top" />
          </div>
          <Image src="/pictos/picto-04.png" alt="" width={30} height={30} className="object-contain flex-shrink-0" />
          <Image src="/pictos/picto-07.png" alt="" width={30} height={30} className="object-contain flex-shrink-0" />
          <Image src="/pictos/picto-12.png" alt="" width={32} height={32} className="object-contain flex-shrink-0" />
          <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(52,183,173,.35)', flexShrink: 0 }}>
            <Image src="/hero-man.jpg" alt="" width={42} height={42} className="w-full h-full object-cover" />
          </div>
          <span style={{ color: '#34b7ad', fontSize: '22px', fontWeight: 'bold' }}>♀</span>
        </div>
      </div>
    </>
  )
}

/* ── Vue CONNECTÉE ── */
function ConnectedView({ user }) {
  return (
    <>
      {/* HERO CONNECTÉ */}
      <section className="relative overflow-hidden" style={{ background: '#321b45', minHeight: '340px' }}>
        {/* Décos fond */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full opacity-10"
            style={{ background: '#622ed1' }} />
          <div className="absolute left-0 bottom-0 opacity-60">
            <svg width="80" height="120" viewBox="0 0 80 120">
              <ellipse cx="40" cy="60" rx="34" ry="56" fill="#34b7ad" transform="rotate(-15 40 60)" opacity=".6" />
            </svg>
          </div>
          <div className="absolute right-12 bottom-6 opacity-30">
            <Image src="/pictos/picto-07.png" alt="" width={55} height={55} className="object-contain" />
          </div>
          <div className="absolute left-8 top-12 opacity-25">
            <Image src="/pictos/picto-04.png" alt="" width={50} height={50} className="object-contain" />
          </div>
          <div className="absolute right-1/3 top-8 opacity-20">
            <div style={{ width: '40px', height: '40px', background: '#ecc92f',
              clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
          </div>
        </div>

        <div className="relative section-container text-white" style={{ paddingTop: '130px', paddingBottom: '60px' }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-heading font-bold tracking-widest uppercase"
                style={{ background: 'rgba(52,183,173,0.2)', color: '#34b7ad', border: '1px solid rgba(52,183,173,0.35)' }}>
                <BookOpen className="w-3.5 h-3.5" /> Espace apprenant
              </div>
              <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(2.2rem,5.5vw,4rem)', lineHeight: 1.1, marginBottom: '12px' }}>
                Mes cours
              </h1>
              <p className="text-white/70 text-base" style={{ maxWidth: '480px' }}>
                Depuis 2022, nous formons des militant·es engagé·es à travers toute l&apos;Afrique francophone.
              </p>
            </div>
            {/* Stats rapides */}
            <div className="flex gap-4 flex-wrap">
              {[
                { val: '+200', label: 'Participants' },
                { val: '8', label: 'Pays' },
                { val: '3', label: 'Cohortes réussies' },
              ].map((s, i) => (
                <div key={i} className="text-center px-4 py-3 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', minWidth: '80px' }}>
                  <div className="font-heading font-black text-umo-yellow text-xl leading-none">{s.val}</div>
                  <div className="text-white/55 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* GRILLE COHORTES avec statuts */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Cohorte 3 — purple */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: cohortes[0].bg }}>
              <div className="relative" style={{ height: '175px', overflow: 'hidden' }}>
                <Image src="/hero-woman.jpg" alt="Cohorte 3" fill className="object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(50,27,69,0.7) 100%)' }} />
                <div className="absolute top-3 right-3">
                  <StatusBadge status={cohortes[0].status} />
                </div>
              </div>
              <div className="p-5">
                <p className="text-white/45 text-xs font-heading font-bold mb-1.5">Cohorte {cohortes[0].num} — {cohortes[0].annee}</p>
                <h3 className="font-heading font-black text-white text-base mb-2 leading-tight">{cohortes[0].titre}</h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">{cohortes[0].desc}</p>
                <Link href="/mes-cours"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-white/50 text-white
                             font-heading font-bold text-xs hover:bg-white hover:text-umo-dark transition-all duration-200">
                  Lire la suite <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Cohorte 2 — teal */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: cohortes[1].bg }}>
              <div className="relative flex items-center justify-center" style={{ height: '175px', background: cohortes[1].imageBg }}>
                <div className="text-center px-6">
                  <div className="font-heading font-black text-white/90 leading-tight"
                    style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                    sto·ry<br />·tel·ling
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <StatusBadge status={cohortes[1].status} />
                </div>
              </div>
              <div className="p-5">
                <p className="text-white/45 text-xs font-heading font-bold mb-1.5">Cohorte {cohortes[1].num} — {cohortes[1].annee}</p>
                <h3 className="font-heading font-black text-white text-base mb-2 leading-tight">{cohortes[1].titre}</h3>
                <p className="text-white/65 text-sm mb-4 leading-relaxed">{cohortes[1].desc}</p>
                <Link href="/mes-cours"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-white/50 text-white
                             font-heading font-bold text-xs hover:bg-white hover:text-umo-teal transition-all duration-200">
                  Lire la suite <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Cohorte 1 — yellow */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: cohortes[2].bg }}>
              <div className="relative flex items-center justify-center" style={{ height: '175px', background: cohortes[2].imageBg }}>
                <div className="text-center px-6">
                  <div className="font-heading font-black leading-tight"
                    style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', letterSpacing: '-0.02em', lineHeight: '1.1', color: 'rgba(50,27,69,0.8)' }}>
                    mili<br />·tan·tis·me
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <StatusBadge status={cohortes[2].status} dark />
                </div>
              </div>
              <div className="p-5">
                <p className="text-umo-dark/40 text-xs font-heading font-bold mb-1.5">Cohorte {cohortes[2].num} — {cohortes[2].annee}</p>
                <h3 className="font-heading font-black text-umo-dark text-base mb-2 leading-tight">{cohortes[2].titre}</h3>
                <p className="text-umo-dark/60 text-sm mb-4 leading-relaxed">{cohortes[2].desc}</p>
                <Link href="/mes-cours"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-umo-dark/40 text-umo-dark
                             font-heading font-bold text-xs hover:bg-umo-dark hover:text-umo-yellow transition-all duration-200">
                  Lire la suite <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Légende statuts */}
            <div className="rounded-2xl p-7 flex flex-col justify-center gap-5"
              style={{ background: 'white', border: '2px solid #f3ebff', minHeight: '280px' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(52,183,173,0.12)' }}>
                  <Play className="w-4 h-4" style={{ color: '#34b7ad' }} />
                </div>
                <div>
                  <p className="font-heading font-black text-sm" style={{ color: '#34b7ad' }}>En cours</p>
                  <p className="text-gray-500 text-xs">Formation active — accédez à vos modules</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(98,46,209,0.08)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: '#622ed1' }} />
                </div>
                <div>
                  <p className="font-heading font-black text-sm" style={{ color: '#622ed1' }}>Terminé</p>
                  <p className="text-gray-500 text-xs">Formation complétée — ressources accessibles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(236,201,47,0.15)' }}>
                  <Clock className="w-4 h-4" style={{ color: '#c9a700' }} />
                </div>
                <div>
                  <p className="font-heading font-black text-sm" style={{ color: '#c9a700' }}>À venir</p>
                  <p className="text-gray-500 text-xs">Prochaine cohorte — candidature ouverte</p>
                </div>
              </div>
              <Link href="/mes-cours" className="btn-yellow-solid mt-2 text-center">
                Accéder à mes cours <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Bouton Affichez tout */}
          <div className="mt-7 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-bold text-sm transition-all duration-200"
              style={{ background: 'rgba(98,46,209,0.07)', color: '#622ed1', border: '1.5px solid rgba(98,46,209,0.2)' }}>
              Affichez tout <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* CTA Inscription */}
      <section className="bg-white py-16 text-center relative overflow-hidden">
        <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
          <Image src="/pictos/picto-05.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
          <Image src="/pictos/picto-07.png" alt="" width={50} height={50} className="object-contain" />
        </div>
        <div className="section-container">
          <h2 className="font-heading font-black mb-3"
            style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', lineHeight: 1.15, color: '#622ed1' }}>
            Inscrivez-vous à<br />notre prochaine Cohorte
          </h2>
          <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto">
            Les candidatures pour la cohorte 2 sont ouvertes jusqu&apos;à épuisement des places.
          </p>
          <Link href="/candidature"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-heading font-bold text-base transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#ecc92f', color: '#321b45', boxShadow: '0 6px 20px rgba(236,201,47,.4)' }}>
            Candidatez ——→
          </Link>
        </div>
      </section>
    </>
  )
}

/* ── Page principale ── */
export default function CohortesPage() {
  const { user } = useAuth()

  return user ? <ConnectedView user={user} /> : <NotConnectedView />
}
