'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ── Hook animation au scroll ── */
function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

/* ── Données équipe ── */
const equipe = [
  { nom: 'Dr. Béniel Agossou', role: 'Directeur', organisation: 'Le Centre ODAS', pays: '🌍 Afrique', photo: '/equipe/beniel-agossou.png', categorie: 'odas' },
  { nom: 'M. Noël Adanlao', role: 'Coordinateur de programme', organisation: 'Le Centre ODAS', pays: '🌍 Afrique', photo: '/equipe/noel-adanlao.jpg', categorie: 'odas' },
  { nom: 'Dr. Ginette Hounkanrin', role: 'Facilitatrice', organisation: 'Pathfinder International', pays: '🇧🇫 Burkina Faso', photo: '/equipe/ginette-hounkanrin.png', categorie: 'facilitation' },
  { nom: 'Mme Cécile Yougbaré', role: 'Facilitatrice', organisation: 'Médecins du Monde', pays: '🇫🇷 France', photo: '/equipe/cecile-yougbare.png', categorie: 'facilitation' },
  { nom: 'Mme Moinsalima Hassane', role: 'Facilitatrice', organisation: 'ANJSR', pays: '🇸🇳 Sénégal', photo: '/equipe/moinsalima-hassane.png', categorie: 'facilitation' },
  { nom: 'Dr. Melchie Ibula Bwanga', role: 'Facilitatrice', organisation: 'AJCAF-AS', pays: '🌍 Afrique', photo: '/equipe/melchie-ibula.png', categorie: 'facilitation' },
  { nom: 'Saskia Hüsken', role: 'Facilitatrice', organisation: 'Rutgers International', pays: '🇳🇱 Pays-Bas', photo: '/equipe/saskia-husken.png', categorie: 'facilitation' },
  { nom: 'Souwaiba Ibrahim', role: 'Facilitatrice', organisation: 'Ligue Nigérienne des Droits des Femmes', pays: '🇳🇪 Niger', photo: '/equipe/souwaiba-ibrahim.png', categorie: 'facilitation' },
  { nom: 'Dr. Raqibat Idris', role: 'Éditrice', organisation: 'GFMER', pays: '🌍 Afrique', photo: '/equipe/raqibat-idris.png', categorie: 'edition' },
  { nom: 'Prof. Aldo Campana', role: 'Éditeur', organisation: 'GFMER', pays: '🇨🇭 Suisse', photo: '/equipe/aldo-campana.png', categorie: 'edition' },
]

/* ── Carte membre animée ── */
function MembreCard({ membre, delay = 0 }) {
  const [ref, inView] = useInView(0.08)
  const [imgErr, setImgErr] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: hovered ? '2px solid rgba(98,46,209,0.3)' : '2px solid rgba(98,46,209,0.1)',
        boxShadow: hovered ? '0 14px 40px rgba(98,46,209,0.18)' : '0 2px 16px rgba(98,46,209,0.06)',
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(32px)',
        transition: 'opacity 0.55s ease, transform 0.4s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transitionDelay: inView ? '0ms' : `${delay}ms`,
      }}
    >
      {/* Zone photo */}
      <div className="relative overflow-hidden"
        style={{ height: '260px', background: 'linear-gradient(135deg, #f3ebff 0%, #e0ccfa 100%)' }}>
        {!imgErr ? (
          <Image
            src={membre.photo}
            alt={`Photo de ${membre.nom}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgErr(true)}
            style={{
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center font-heading font-black text-white text-3xl"
              style={{ background: 'linear-gradient(135deg, #622ed1, #34b7ad)' }}>
              {membre.nom.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(98,46,209,0.7) 0%, transparent 100%)' }} />
        {/* Badge pays */}
        <div className="absolute bottom-3 left-3 text-base leading-none">{membre.pays}</div>
      </div>

      {/* Infos */}
      <div className="p-5">
        <h3 className="font-heading font-black text-base leading-tight mb-1.5" style={{ color: '#321b45' }}>
          {membre.nom}
        </h3>
        <p className="font-heading font-semibold text-sm mb-1" style={{ color: '#34b7ad' }}>
          {membre.role}
        </p>
        <p className="text-xs" style={{ color: 'rgba(50,27,69,0.45)' }}>
          {membre.organisation}
        </p>
      </div>
    </div>
  )
}

/* ── Titre de section ── */
function SectionHeader({ color, label, icon }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="flex items-center gap-4 mb-8"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>
      <div className="w-1.5 h-10 rounded-full flex-shrink-0" style={{ background: color }} />
      <h2 className="font-heading font-black text-2xl md:text-3xl" style={{ color: '#321b45' }}>{label}</h2>
      {icon && <Image src={icon} alt="" width={30} height={30} className="object-contain ml-1 opacity-50" />}
    </div>
  )
}

/* ── Page ── */
export default function EquipePage() {
  const [heroVisible, setHeroVisible] = useState(false)
  useEffect(() => { setTimeout(() => setHeroVisible(true), 80) }, [])

  const equipeOdas = equipe.filter(m => m.categorie === 'odas')
  const facilitateurs = equipe.filter(m => m.categorie === 'facilitation')
  const editeurs = equipe.filter(m => m.categorie === 'edition')

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden pt-28 pb-16"
        style={{ background: 'linear-gradient(135deg, #321b45 0%, #622ed1 100%)' }}>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-16 rounded-full opacity-10 animate-float"
            style={{ width: '300px', height: '300px', background: '#ecc92f' }} />
          <div className="absolute bottom-0 -left-12 rounded-full opacity-10 animate-float-slow"
            style={{ width: '220px', height: '220px', background: '#34b7ad' }} />
          <div className={`absolute top-20 left-8 transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-35 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ animation: heroVisible ? 'float 7s ease-in-out infinite 1s' : 'none' }}>
            <Image src="/pictos/picto-04.png" alt="" width={60} height={60} className="object-contain" />
          </div>
          <div className={`absolute top-24 right-12 transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ animation: heroVisible ? 'float 9s ease-in-out infinite 2s' : 'none' }}>
            <Image src="/pictos/picto-07.png" alt="" width={50} height={50} className="object-contain" />
          </div>
          <div className={`absolute bottom-20 right-20 transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-25 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ animation: heroVisible ? 'floatSlow 11s ease-in-out infinite' : 'none' }}>
            <Image src="/pictos/picto-05.png" alt="" width={44} height={44} className="object-contain" />
          </div>
          <div className="absolute top-14 right-1/3 select-none font-black text-white/8" style={{ fontSize: '110px' }}>♀</div>
          <div className={`absolute top-36 left-1/3 transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-25' : 'opacity-0'}`}
            style={{ animation: heroVisible ? 'floatSlow 8s ease-in-out infinite' : 'none' }}>
            <div style={{
              width: '28px', height: '28px', background: '#ecc92f',
              clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'
            }} />
          </div>
          <div className="absolute bottom-0 right-0 opacity-15 pointer-events-none">
            <Image src="/pictos/picto-03.png" alt="" width={180} height={220} className="object-contain" />
          </div>
        </div>

        <div className="section-container text-center text-white relative z-10"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-5 text-xs font-heading font-bold tracking-widest uppercase"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <span>♀</span> L&apos;équipe
          </div>
          <h1 className="font-heading font-black text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            Des expert·es au service<br />
            <span style={{ color: '#ecc92f' }}>de votre formation</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
            Facilitatrices, coordinateurs et éditeurs engagés pour la formation militante sur l&apos;avortement sécurisé en Afrique.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s' }}>
            {[{ val: equipe.length, label: 'Expert·es' }, { val: 8, label: 'Pays' }, { val: 3, label: 'Pôles' }].map((s, i) => (
              <div key={i} className="text-center px-5 py-3 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <div className="font-heading font-black text-2xl" style={{ color: '#ecc92f' }}>{s.val}</div>
                <div className="text-white/55 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="white" />
        </svg>
      </section>

      {/* Bande picto-10 */}
      <div className="overflow-hidden bg-white border-b border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '42px', objectPosition: 'center' }} unoptimized />
      </div>

      {/* ══ MEMBRES ══ */}
      <section className="py-16 bg-white">
        <div className="section-container">

          <SectionHeader color="#ecc92f" label="Équipe Centre ODAS" icon="/pictos/picto-05.png" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {equipeOdas.map((m, i) => <MembreCard key={i} membre={m} delay={i * 100} />)}
          </div>

          <SectionHeader color="#622ed1" label="Facilitatrices" icon="/pictos/picto-04.png" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {facilitateurs.map((m, i) => <MembreCard key={i} membre={m} delay={i * 80} />)}
          </div>

          <SectionHeader color="#34b7ad" label="Éditeurs scientifiques" icon="/pictos/picto-07.png" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editeurs.map((m, i) => <MembreCard key={i} membre={m} delay={i * 100} />)}
          </div>

        </div>
      </section>

      {/* Bande picto-10 */}
      <div className="overflow-hidden bg-white border-y border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '42px', objectPosition: 'center' }} unoptimized />
      </div>

      {/* ══ CTA ══ */}
      <section className="py-14 md:py-20 bg-white text-center relative overflow-hidden">
        <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none animate-float-slow">
          <Image src="/pictos/picto-05.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none animate-float">
          <Image src="/pictos/picto-07.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="section-container fade-up">
          <h2 className="font-heading font-black mb-3"
            style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: 1.15, color: '#622ed1' }}>
            Vous aussi, rejoignez<br />l&apos;aventure
          </h2>
          <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto">
            Postulez à la Cohorte 3 et apprenez aux côtés de ces expert·es engagé·es.
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
