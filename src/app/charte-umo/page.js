'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

function GenderDivider() {
  return (
    <div className="overflow-hidden select-none bg-white py-1">
      <Image src="/pictos/picto-20.png" alt="" width={1500} height={60}
        className="w-full object-cover" style={{ height: '32px', objectPosition: 'center' }} unoptimized />
    </div>
  )
}

const sections = [
  {
    num: 'I', titre: 'Valeurs partagées',
    color: '#622ed1', colorLight: 'rgba(98,46,209,0.07)', colorBorder: 'rgba(98,46,209,0.18)',
    items: [
      'Respecter la diversité des identités et des vécus : chaque personne mérite d\'être écoutée, crue, respectée et valorisée, quelle que soit son origine, son orientation, sa situation ou son parcours.',
      'Rejeter toute forme d\'oppression : sexisme, racisme, lesbophobie, validisme, classisme, transphobie, colonialisme ou toute autre forme de violence ou de discrimination n\'ont pas leur place à l\'UMO.',
      'Cultiver la sororité et le soutien mutuel : nous créons un environnement de bienveillance, de soin collectif et d\'entraide.',
      'Pratiquer l\'écoute active et la parole responsable : nous écoutons sans interrompre, nous parlons avec honnêteté, nous faisons preuve de compassion.',
      'Respecter la confidentialité : tout ce qui est partagé au sein du programme reste dans le programme.',
      'Respecter le droit à l\'image : toute photo, vidéo ou enregistrement exige le consentement explicite et révocable des personnes concernées.',
      'Protéger la sécurité des personnes : aucune information sensible (lieux, identités, témoignages) ne doit être diffusée sans précaution.',
    ],
  },
  {
    num: 'II', titre: 'Engagements des lauréat·es',
    color: '#ecc92f', colorLight: 'rgba(236,201,47,0.1)', colorBorder: 'rgba(236,201,47,0.35)',
    items: [
      'Participer activement à toutes les sessions, ateliers, projets collaboratifs et restitutions ;',
      'Respecter les horaires, les délais et les consignes fixées par l\'équipe pédagogique ;',
      'Faire preuve d\'ouverture, de curiosité intellectuelle et de volonté d\'apprendre ;',
      'M\'impliquer de façon constructive dans les dynamiques de groupe ;',
      'Co-construire des espaces sûrs en refusant toute forme de moquerie, de mépris ou de hiérarchie ;',
      'Utiliser les outils numériques ou physiques de manière responsable et respectueuse ;',
      'Ne pas instrumentaliser le programme à des fins individuelles ou opportunistes ;',
      'Faire remonter toute difficulté ou malaise auprès de l\'équipe de coordination.',
    ],
  },
  {
    num: 'III', titre: 'Engagements des coach·es et intervenant·es',
    color: '#34b7ad', colorLight: 'rgba(52,183,173,0.08)', colorBorder: 'rgba(52,183,173,0.22)',
    items: [
      'Intervenir dans une posture féministe, décoloniale, inclusive et horizontale ;',
      'Reconnaître la valeur des savoirs militants, situés, communautaires et expérientiels ;',
      'Créer un cadre pédagogique qui valorise la parole des jeunes femmes et garantit leur sécurité émotionnelle ;',
      'Ne pas exercer d\'abus de pouvoir, ni de paternalisme, ni imposer un modèle unique de penser ;',
      'Me rendre disponible pour répondre aux questions, soutenir les apprentissages et accompagner les parcours ;',
      'Respecter les limites, les sensibilités et les rythmes d\'apprentissage de chacun·e ;',
      'Participer activement aux évaluations du programme (bilan, retours, co-apprentissage).',
    ],
  },
]

function SectionCard({ s, delay = 0 }) {
  const [open, setOpen] = useState(true)
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="rounded-3xl overflow-hidden shadow-sm transition-all duration-700"
      style={{
        border: `2px solid ${s.colorBorder}`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}>
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-4 px-7 py-5 text-left"
        style={{ background: s.color }}>
        <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <span className="font-heading font-black text-white text-base">{s.num}</span>
        </div>
        <h3 className="font-heading font-black text-white text-lg flex-1 leading-tight">{s.titre}</h3>
        {open ? <ChevronUp className="w-5 h-5 text-white/70 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-white/70 flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ background: s.colorLight }}>
        <ul className="px-7 py-6 space-y-3.5">
          {s.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: s.color }} />
              <p className="text-sm leading-relaxed" style={{ color: '#321b45' }}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function CharteUMOPage() {
  const [visible, setVisible] = useState(false)
  const [preRef, preInView] = useInView()
  const [dispRef, dispInView] = useInView()
  const [valRef, valInView] = useInView()
  useEffect(() => { setTimeout(() => setVisible(true), 80) }, [])

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-white pt-24 pb-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-52 h-52 opacity-90 pointer-events-none"
          style={{ borderRadius: '0 0 100% 0', background: '#622ed1', transform: 'translate(-40%,-20%)' }} />
        <div className={`absolute right-8 bottom-0 pointer-events-none transition-all duration-1000 delay-300 ${visible ? 'opacity-75 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ width: '150px' }}>
          <Image src="/pictos/picto-02.png" alt="" width={150} height={190} className="object-contain"
            style={{ filter: 'drop-shadow(0 10px 24px rgba(98,46,209,0.25))', animation: visible ? 'float 6s ease-in-out infinite' : 'none' }} />
        </div>
        <div className="absolute left-0 top-28 opacity-70 pointer-events-none">
          <svg width="90" height="140" viewBox="0 0 90 140">
            <ellipse cx="45" cy="70" rx="38" ry="64" fill="#34b7ad" transform="rotate(-15 45 70)" />
            <ellipse cx="28" cy="105" rx="22" ry="40" fill="#34b7ad" transform="rotate(10 28 105)" opacity=".7" />
          </svg>
        </div>
        <div className="absolute right-36 top-20 opacity-75 pointer-events-none"
          style={{ animation: visible ? 'float 8s ease-in-out infinite 2s' : 'none' }}>
          <Image src="/pictos/picto-07.png" alt="" width={70} height={70} className="object-contain" />
        </div>
        <div className="absolute right-56 top-8 opacity-60 pointer-events-none">
          <Image src="/pictos/picto-05.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="absolute right-0 top-8 opacity-60 pointer-events-none">
          <span style={{ fontSize: '100px', color: '#321b45', lineHeight: 1 }}>♀</span>
        </div>

        <div className={`section-container text-center relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-5 text-xs font-heading font-bold tracking-widest uppercase"
            style={{ background: 'rgba(213,179,253,0.3)', color: '#622ed1' }}>
            <span>♀</span> Engagement
          </div>
          <h1 className="font-heading font-black leading-tight mb-3">
            <span style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#622ed1', display: 'block' }}>
              Charte d&apos;engagement
            </span>
            <span style={{ fontSize: 'clamp(1.5rem,3.5vw,2.6rem)', color: '#ecc92f', display: 'block' }}>
              de l&apos;Université Militante ODAS
            </span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed" style={{ maxWidth: '520px', margin: '0 auto' }}>
            Pour un espace sûr, féministe, sorore et inclusif
          </p>
        </div>
      </section>

      <GenderDivider />

      {/* ══ PRÉAMBULE ══ */}
      <section className="bg-white py-12">
        <div ref={preRef}
          className={`section-container max-w-3xl transition-all duration-700 ${preInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: 'rgba(98,46,209,0.06)', border: '2px solid rgba(98,46,209,0.14)' }}>
            <div className="absolute right-4 top-4 opacity-20 pointer-events-none">
              <svg width="70" height="110" viewBox="0 0 70 110">
                <ellipse cx="35" cy="55" rx="28" ry="50" fill="#622ed1" transform="rotate(-15 35 55)" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#622ed1' }}>
                <span className="text-white font-heading font-black text-sm">P</span>
              </div>
              <h3 className="font-heading font-black text-xl" style={{ color: '#622ed1' }}>Préambule</h3>
            </div>
            <div className="space-y-3 relative z-10">
              <p className="text-gray-700 text-sm leading-relaxed">
                L&apos;Université Militante ODAS est un espace d&apos;apprentissage collectif, de co-création et d&apos;engagement.
                Elle a pour objectif de former une nouvelle génération d&apos;activistes pro-choix en Afrique francophone,
                en renforçant leurs compétences dans les domaines des droits et de la santé sexuels et reproductifs (DSSR),
                avec un accent particulier sur l&apos;avortement sécurisé.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Son approche est féministe, multidisciplinaire et centrée sur l&apos;action collective, afin de contribuer
                à l&apos;amélioration de l&apos;écosystème de l&apos;avortement, de réduire l&apos;incidence des avortements non sécurisés
                et, ainsi, de participer à la diminution de la mortalité maternelle en Afrique francophone.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ce programme repose sur des principes d&apos;autonomie, de solidarité, d&apos;inclusion, de justice sociale,
                de soin collectif et de lutte contre toutes les formes d&apos;oppression. Cette charte vise à garantir
                un cadre éthique, protecteur et responsabilisant pour toutes les personnes impliquées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTIONS I II III ══ */}
      <section className="bg-white pb-8">
        <div className="section-container max-w-3xl space-y-5">
          {sections.map((s, i) => <SectionCard key={i} s={s} delay={i * 80} />)}
        </div>
      </section>

      <GenderDivider />

      {/* ══ IV DISPOSITIONS FINALES ══ */}
      <section className="bg-white py-8">
        <div ref={dispRef}
          className={`section-container max-w-3xl transition-all duration-700 ${dispInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-3xl overflow-hidden shadow-sm" style={{ border: '2px solid rgba(192,57,43,0.2)' }}>
            <div className="px-7 py-5 flex items-center gap-4" style={{ background: '#c0392b' }}>
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-black text-white text-base">IV</span>
              </div>
              <h3 className="font-heading font-black text-white text-lg">Dispositions finales</h3>
            </div>
            <div className="px-7 py-6" style={{ background: 'rgba(192,57,43,0.05)' }}>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">Tout manquement grave à cette charte pourra entraîner :</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Rappel à l\'ordre', desc: 'Un rappel à l\'ordre, une médiation ou un retrait temporaire d\'une activité.', color: '#e67e22' },
                  { title: 'Exclusion définitive', desc: 'En cas de comportement abusif, discriminatoire ou menaçant : l\'exclusion définitive du programme, sans appel.', color: '#c0392b' },
                ].map((item, j) => (
                  <div key={j} className="rounded-2xl p-5 bg-white" style={{ border: `2px solid ${item.color}30` }}>
                    <div className="w-2.5 h-2.5 rounded-full mb-3" style={{ background: item.color }} />
                    <h4 className="font-heading font-black text-sm mb-2" style={{ color: item.color }}>{item.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ V VALIDATION ══ */}
      <section className="bg-white py-6 pb-16">
        <div ref={valRef}
          className={`section-container max-w-3xl transition-all duration-700 ${valInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #321b45 0%, #622ed1 100%)' }}>
            <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
              <Image src="/pictos/picto-04.png" alt="" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-black text-white">V</span>
              </div>
              <h3 className="font-heading font-black text-white text-xl">Validation</h3>
            </div>
            <p className="text-white/85 text-sm leading-relaxed mb-5 relative z-10">
              En suivant ce cours, je reconnais avoir pris connaissance des engagements qui y figurent
              et m&apos;engage à les respecter pour garantir un espace sûr, sorore, féministe et respectueux
              pour toutes les personnes impliquées dans l&apos;Université Militante ODAS.
            </p>
            <p className="text-white/60 text-xs relative z-10">
              Pour tout signalement contacter le Centre ODAS à{' '}
              <a href="mailto:communication@centre-odas.org" className="text-umo-yellow underline hover:text-white transition-colors">
                communication@centre-odas.org
              </a>
            </p>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ══ CTA ══ */}
      <section className="bg-white py-16 text-center relative overflow-hidden">
        <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
          <Image src="/pictos/picto-04.png" alt="" width={60} height={60} className="object-contain" />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
          <Image src="/pictos/picto-07.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="section-container fade-up">
          <h2 className="font-heading font-black mb-3"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.15, color: '#622ed1' }}>
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
