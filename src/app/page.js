'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

/* ── Hook animation scroll ── */
function useInView(opts = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.12, ...opts })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

/* ── Séparateur ♀♂ ── */
function GenderDivider() {
  return (
    <div className="overflow-hidden py-2 bg-white select-none">
      <p className="whitespace-nowrap text-center"
         style={{color:'#622ed1',opacity:.22,fontSize:'12px',letterSpacing:'4px'}}>
        {Array(20).fill('⚢ ♂ ⚣ ⚤ ♀ ⚥ ⚦ ⚧ ').join('')}
      </p>
    </div>
  )
}

/* ── Personnage SVG hero — t-shirt JAUNE avec rayures violettes ── */
function HeroCharacter() {
  return (
    <svg viewBox="0 0 300 460" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="272" cy="68"  rx="19" ry="50" transform="rotate(28 272 68)"  fill="#ecc92f"/>
      <ellipse cx="260" cy="126" rx="14" ry="37" transform="rotate(18 260 126)" fill="#ecc92f" opacity=".72"/>
      <circle cx="289" cy="192" r="41" fill="#321b45"/>
      <circle cx="215" cy="30" r="17" fill="#34b7ad"/>
      <circle cx="242" cy="18" r="14" fill="#34b7ad"/>
      <circle cx="230" cy="50" r="14" fill="#34b7ad"/>
      <circle cx="196" cy="44" r="13" fill="#34b7ad"/>
      <circle cx="258" cy="46" r="11" fill="#34b7ad"/>
      <circle cx="230" cy="32" r="12" fill="#34b7ad"/>
      <ellipse cx="150" cy="86" rx="64" ry="70" fill="#1a0a00"/>
      <ellipse cx="150" cy="113" rx="48" ry="54" fill="#6B3A2A"/>
      <ellipse cx="136" cy="106" rx="5"   ry="6.5" fill="#1a0a00"/>
      <ellipse cx="164" cy="106" rx="5"   ry="6.5" fill="#1a0a00"/>
      <ellipse cx="136" cy="103.5" rx="1.8" ry="1.8" fill="white"/>
      <ellipse cx="164" cy="103.5" rx="1.8" ry="1.8" fill="white"/>
      <path d="M129 97 Q136 93 143 97" stroke="#1a0a00" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M157 97 Q164 93 171 97" stroke="#1a0a00" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="150" cy="121" rx="4" ry="2.8" fill="#4a2518"/>
      <path d="M138 134 Q150 147 162 134" stroke="#3a1a08" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="102" cy="128" r="9"  fill="#ecc92f" stroke="#c9a010" strokeWidth="1.5"/>
      <circle cx="102" cy="145" r="7"  fill="#ecc92f"/>
      <circle cx="198" cy="128" r="9"  fill="#ecc92f" stroke="#c9a010" strokeWidth="1.5"/>
      <circle cx="198" cy="145" r="7"  fill="#ecc92f"/>
      <rect x="136" y="159" width="28" height="26" rx="8" fill="#6B3A2A"/>
      {/* T-shirt JAUNE avec rayures VIOLETTES */}
      <rect x="92" y="183" width="116" height="120" rx="28" fill="#ecc92f"/>
      <rect x="92" y="198" width="116" height="9" fill="#622ed1" opacity=".7"/>
      <rect x="92" y="217" width="116" height="9" fill="#622ed1" opacity=".7"/>
      <rect x="92" y="236" width="116" height="9" fill="#622ed1" opacity=".7"/>
      <circle cx="150" cy="276" r="26" fill="white" opacity=".85"/>
      <text x="150" y="286" textAnchor="middle" fontSize="22" fill="#622ed1" fontWeight="bold">✊</text>
      <ellipse cx="76"  cy="237" rx="18" ry="46" transform="rotate(-8 76 237)"  fill="#6B3A2A"/>
      <ellipse cx="224" cy="237" rx="18" ry="46" transform="rotate(8 224 237)"  fill="#6B3A2A"/>
      <rect x="112" y="299" width="33" height="94" rx="16" fill="#2d2060"/>
      <rect x="155" y="299" width="33" height="94" rx="16" fill="#2d2060"/>
      <ellipse cx="129" cy="392" rx="20" ry="9" fill="#1a0a00"/>
      <ellipse cx="171" cy="392" rx="20" ry="9" fill="#1a0a00"/>
    </svg>
  )
}

/* ── Illustration Webinaires SVG ── */
function WebinairesIllustration() {
  return (
    <svg viewBox="0 0 340 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="158" r="118" fill="#622ed1"/>
      <rect x="55"  y="62"  width="195" height="130" rx="12" fill="#d8d8e8"/>
      <rect x="63"  y="70"  width="179" height="114" rx="8"  fill="#1e1640"/>
      <rect x="73"  y="82"  width="82"  height="8"  rx="4" fill="#622ed1"/>
      <rect x="73"  y="96"  width="126" height="5"  rx="3" fill="#9963db" opacity=".55"/>
      <rect x="73"  y="107" width="106" height="5"  rx="3" fill="#9963db" opacity=".4"/>
      <rect x="73"  y="118" width="116" height="5"  rx="3" fill="#9963db" opacity=".4"/>
      <rect x="73"  y="129" width="96"  height="5"  rx="3" fill="#9963db" opacity=".3"/>
      <rect x="73"  y="140" width="76"  height="5"  rx="3" fill="#9963db" opacity=".3"/>
      <rect x="44"  y="190" width="217" height="10" rx="5" fill="#c0c0d0"/>
      <rect x="96"  y="198" width="113" height="6"  rx="3" fill="#b0b0c0"/>
      <rect x="136" y="38"  width="96"  height="78" rx="9" fill="#ecc92f"/>
      <rect x="136" y="38"  width="42"  height="14" rx="5" fill="#c8a010"/>
      <ellipse cx="254" cy="66" rx="24" ry="20" fill="#ecc92f"/>
      <ellipse cx="278" cy="48" rx="17" ry="14" fill="#ecc92f" opacity=".8"/>
      <circle  cx="232" cy="200" r="24" fill="#34b7ad"/>
      <polygon points="225,192 225,208 240,200" fill="white"/>
    </svg>
  )
}

/* ── Icônes features SVG jaunes ── */
const FeatIcons = {
  modules:       <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><path d="M6 6 Q6 3 9 3 L21 3 L21 36 L9 36 Q6 36 6 33Z" stroke="#ecc92f" strokeWidth="2.5" fill="none"/><path d="M21 3 L33 3 Q36 3 36 6 L36 33 Q36 36 33 36 L21 36Z" stroke="#ecc92f" strokeWidth="2.5" fill="none"/><path d="M21 3 L21 36" stroke="#ecc92f" strokeWidth="1.5"/><path d="M10 13 L17 13 M10 19 L17 19 M25 13 L32 13 M25 19 L32 19" stroke="#ecc92f" strokeWidth="2" strokeLinecap="round"/></svg>,
  coaching:      <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><circle cx="14" cy="13" r="6" stroke="#ecc92f" strokeWidth="2.5"/><circle cx="28" cy="13" r="6" stroke="#ecc92f" strokeWidth="2.5"/><path d="M4 34 Q4 24 14 24 Q21 24 21 24 Q21 24 28 24 Q38 24 38 34" stroke="#ecc92f" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>,
  forums:        <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><path d="M4 8 Q4 4 8 4 L34 4 Q38 4 38 8 L38 22 Q38 26 34 26 L16 26 L5 36 L5 26 Q4 26 4 22Z" stroke="#ecc92f" strokeWidth="2.5" fill="none"/></svg>,
  webinaires:    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><rect x="4" y="8" width="34" height="22" rx="3" stroke="#ecc92f" strokeWidth="2.5"/><circle cx="21" cy="19" r="5" fill="#ecc92f"/><path d="M13 38 L29 38 M21 30 L21 38" stroke="#ecc92f" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  certification: <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><circle cx="21" cy="16" r="10" stroke="#ecc92f" strokeWidth="2.5"/><path d="M16 29 L21 35 L26 29" stroke="#ecc92f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 25 L7 33 L14 32 L16 39" stroke="#ecc92f" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M29 25 L35 33 L28 32 L26 39" stroke="#ecc92f" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M16 16 L19 19 L26 12" stroke="#ecc92f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>,
}

const features = [
  { key:'modules',       title:'Modules structurés',     desc:'Des cours organisés en leçons progressives, accessibles à votre rythme avec déblocage automatique.' },
  { key:'coaching',      title:'Coaching de groupe',     desc:'Des groupes de 10 participants accompagnés par un·e coach expert·e tout au long du parcours.' },
  { key:'forums',        title:'Forums & échanges',      desc:'Espaces d\'échange collectifs et forums privés par groupe pour une intelligence collective forte.' },
  { key:'webinaires',    title:'Webinaires live',        desc:'Sessions en direct avec Zoom pour approfondir les thèmes et interagir avec les intervenants.' },
  { key:'certification', title:'Badges & Attestations',  desc:'Certification officielle de votre participation et vos acquis, téléchargeable et vérifiable.' },
]

/* ── Steps — Design EXACT de la capture : arrondi large en haut ── */
const steps = [
  { num:'1', title:'Candidatez',             desc:'Remplissez le formulaire en ligne. L\'équipe examine votre dossier sous 5 jours.' },
  { num:'2', title:'Rejoignez votre cohorte', desc:'Après sélection, vous recevez votre accès et intégrez votre groupe de coaching.' },
  { num:'3', title:'Apprenez & échangez',    desc:'Suivez les modules, participez aux forums, rendez vos devoirs et assistez aux webinaires.' },
  { num:'4', title:'Certifiez-vous',         desc:'En fin de parcours, recevez votre attestation et vos badges de compétences.' },
]

/* ── Équipe RÉELLE depuis umo.centre-odas.org ── */
const BASE = 'https://umo.centre-odas.org/wp-content/uploads/2025/05/'
const equipe = [
  { nom:'Dr. Ginette Hounkanrin',  org:'Pathfinder International, Burkina Faso', photo: BASE+'Photo_Ginette-1-2-819x1024.jpg' },
  { nom:'Mme Cécile Yougbaré',     org:'Médecins du Monde, France',              photo: BASE+'Photo-THIOMBIANO-_YOUGBARE-W.-Cecile-1-1024x919.jpg' },
  { nom:'Mme Moinsalima Hassane',  org:'ANJSR, Sénégal',                         photo: BASE+'Moinsalima-Hassane-2-edited.jpg' },
  { nom:'Dr. Melchie Ibula Bwanga',org:'AJCAF-AS',                               photo: BASE+'Photo-3-683x1024.jpg' },
  { nom:'Saskia Hüsken',           org:'Rutgers International',                  photo: BASE+'Saskia-Husken-profile-picture-1.jpg' },
  { nom:'Souwaiba Ibrahim',         org:'Ligue Nigérienne des Droits des Femmes', photo: BASE+'Photo-Souwaiba-663x1024.jpg' },
  { nom:'Dr. Béniel Agossou',      org:'Le Centre ODAS',                         photo: BASE+'Beniel-Agossou-2-1.png' },
  { nom:'M. Noël Adanlao',         org:'Le Centre ODAS',                         photo: BASE+'Img-Noel-Adanlao-1024x1024.png' },
  { nom:'Dr. Raqibat Idris',       org:'GFMER',                                  photo: BASE+'RIdris-scaled.jpg' },
  { nom:'Prof. Aldo Campana',      org:'GFMER',                                  photo: BASE+'Campana.jpg' },
]

const temoignages = [
  { name:'Aminata K.', pays:'🇸🇳 Sénégal',   text:'Cette formation a complètement transformé ma façon d\'aborder le plaidoyer. Les échanges avec les autres participantes étaient incroyablement riches.' },
  { name:'Grace O.',   pays:'🇳🇬 Nigeria',    text:'Le coaching en petits groupes est un vrai plus. Notre coach était disponible et vraiment à l\'écoute. J\'ai acquis des compétences concrètes.' },
  { name:'Fatoumata D.', pays:'🇲🇱 Mali',     text:'La plateforme est facile à utiliser même avec une connexion lente. J\'ai pu suivre tous les modules depuis mon téléphone sans problème.' },
  { name:'Aminata K.', pays:'🇸🇳 Sénégal',   text:'Cette formation a complètement transformé ma façon d\'aborder le plaidoyer. Les échanges avec les autres participantes étaient incroyablement riches.' },
  { name:'Grace O.',   pays:'🇳🇬 Nigeria',    text:'Le coaching en petits groupes est un vrai plus. Notre coach était disponible et vraiment à l\'écoute. J\'ai acquis des compétences concrètes.' },
]
const bubbleTop = [20, 0, 48, 8, 32]

/* ══════════════════════════════════════════════════ */
export default function HomePage() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 80) }, [])

  const [featRef,  featInView]  = useInView()
  const [stepsRef, stepsInView] = useInView()
  const [webRef,   webInView]   = useInView()
  const [quiRef,   quiInView]   = useInView()
  const [eqRef,    eqInView]    = useInView()
  const [temoRef,  temoInView]  = useInView()
  const [partRef,  partInView]  = useInView()

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative bg-white overflow-hidden min-h-screen flex items-center pt-16">
        <div className="absolute bottom-0 left-0 w-52 h-52 rounded-tr-[90px] -translate-x-1/4 translate-y-1/4" style={{background:'#622ed1'}}/>
        <div className="absolute top-12 right-6 w-28 h-28 rounded-full opacity-40" style={{background:'#d5b3fd'}}/>
        <div className="absolute top-28 right-0 w-40 h-40 rounded-full opacity-25" style={{background:'#d5b3fd'}}/>
        <div className="absolute top-5 right-1/2 w-5 h-5 rounded-sm opacity-60" style={{background:'#622ed1',transform:'rotate(10deg)'}}/>

        <div className="section-container w-full py-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className={`transition-all duration-700 ${visible?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
              <h1 className="font-heading font-black leading-[0.93] mb-5">
                <span className="block text-umo-purple" style={{fontSize:'clamp(3.4rem,6.5vw,5.5rem)'}}>Université</span>
                <span className="block text-umo-yellow" style={{fontSize:'clamp(3.4rem,6.5vw,5.5rem)'}}>Militante</span>
                <span className="block text-umo-purple" style={{fontSize:'clamp(3.4rem,6.5vw,5.5rem)'}}>ODAS</span>
              </h1>
              <p className="text-gray-700 text-base leading-relaxed mb-7" style={{maxWidth:'380px'}}>
                Un programme de renforcement de capacités 100% en ligne.
                Apprendre, échanger et agir ensemble pour l&apos;avortement sécurisé en Afrique.
              </p>
              <Link href="/programme"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-heading font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-umo-yellow"
                style={{border:'2px solid #ecc92f',color:'#321b45',background:'transparent'}}>
                Découvrez le programme →
              </Link>
            </div>

            <div className="relative flex justify-center items-center" style={{minHeight:'460px'}}>
              <div className={`relative z-10 transition-all duration-700 delay-300 ${visible?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}
                   style={{width:'260px',height:'420px',animation:visible?'float 6s ease-in-out infinite':'none'}}>
                <HeroCharacter/>
              </div>
              {[
                {val:'+200',lbl:'Participants',       pos:{top:'6px',left:'4px'}},
                {val:'8',   lbl:'Pays\nEngagés',      pos:{top:'6px',right:'0'}},
                {val:'3',   lbl:'Cohortes\nréussies', pos:{top:'38%',left:'0'}},
                {val:'100%',lbl:'En ligne',           pos:{bottom:'58px',right:'0'}},
              ].map((s,i) => (
                <div key={i} className="absolute text-center z-20 transition-all duration-500"
                     style={{...s.pos,background:'rgba(213,179,253,0.55)',borderRadius:'14px',padding:'10px 16px',backdropFilter:'blur(4px)',
                             opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(10px)',transitionDelay:`${400+i*120}ms`}}>
                  <div className="font-heading font-black text-xl leading-none" style={{color:'#622ed1'}}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{color:'#622ed1',whiteSpace:'pre-line'}}>{s.lbl}</div>
                </div>
              ))}
              <div className="absolute z-20" style={{top:'50%',right:'26%',width:'14px',height:'14px',background:'#622ed1',borderRadius:'3px',transform:'rotate(12deg)',opacity:.45}}/>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FEATURES ══════ */}
      <section ref={featRef} className="relative bg-white py-20 overflow-hidden">
        <div className="absolute left-0 top-1/4 opacity-80"><svg width="52" height="130" viewBox="0 0 52 130"><ellipse cx="26" cy="65" rx="22" ry="60" fill="#34b7ad" transform="rotate(8 26 65)"/></svg></div>
        <div className="absolute left-6 bottom-1/4 opacity-55"><svg width="38" height="90" viewBox="0 0 38 90"><ellipse cx="19" cy="45" rx="15" ry="42" fill="#34b7ad" transform="rotate(-13 19 45)"/></svg></div>
        <div className="absolute left-0 bottom-4 opacity-65"><svg width="70" height="100" viewBox="0 0 70 100"><ellipse cx="35" cy="50" rx="30" ry="46" fill="#ecc92f" transform="rotate(15 35 50)"/><ellipse cx="18" cy="70" rx="20" ry="34" fill="#ecc92f" transform="rotate(-10 18 70)" opacity=".7"/></svg></div>
        <div className="absolute right-2 bottom-1/3 opacity-65"><svg width="44" height="78" viewBox="0 0 44 78"><ellipse cx="22" cy="39" rx="18" ry="36" fill="#ecc92f" transform="rotate(18 22 39)"/></svg></div>
        <div className="absolute right-10 top-6 opacity-55"><svg width="44" height="46" viewBox="0 0 44 46"><path d="M22 40 L6 22 L14 22 L14 8 L30 8 L30 22 L38 22Z" fill="#622ed1"/><path d="M22 30 L6 12 L14 12 L14 0 L30 0 L30 12 L38 12Z" fill="#622ed1" opacity=".4"/></svg></div>

        <div className="section-container">
          <div className={`text-center mb-14 transition-all duration-700 ${featInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-6 py-1 rounded-xl mb-1" style={{background:'rgba(213,179,253,0.35)'}}>
              <h2 className="font-heading font-black" style={{fontSize:'clamp(2rem,4vw,3rem)',color:'#622ed1'}}>Des Formations</h2>
            </div>
            <h2 className="font-heading font-black leading-tight mb-4" style={{fontSize:'clamp(2rem,4vw,3rem)',color:'#ecc92f'}}>Complètes et Engagées</h2>
            <p className="text-gray-600 text-base" style={{maxWidth:'520px',margin:'0 auto'}}>
              Des modules conçus pour former des militant·es éclairé·es, capables d&apos;agir concrètement sur le terrain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {features.slice(0,3).map((f,i) => (
              <div key={i} className="text-center px-4 transition-all duration-500"
                   style={{transitionDelay:`${i*120}ms`,opacity:featInView?1:0,transform:featInView?'translateY(0)':'translateY(20px)'}}>
                <div className="flex justify-center mb-4">{FeatIcons[f.key]}</div>
                <h3 className="font-heading font-bold text-base mb-2" style={{color:'#622ed1',textDecoration:'underline',textDecorationColor:'#622ed1'}}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10" style={{maxWidth:'560px',margin:'0 auto 2.5rem'}}>
            {features.slice(3).map((f,i) => (
              <div key={i} className="text-center px-4 transition-all duration-500"
                   style={{transitionDelay:`${360+i*120}ms`,opacity:featInView?1:0,transform:featInView?'translateY(0)':'translateY(20px)'}}>
                <div className="flex justify-center mb-4">{FeatIcons[f.key]}</div>
                <h3 className="font-heading font-bold text-base mb-2" style={{color:'#622ed1',textDecoration:'underline',textDecorationColor:'#622ed1'}}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div/>
            <Link href="/programme" className="mx-auto inline-flex items-center gap-2 px-10 py-3 rounded-full text-white font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300 shadow-md" style={{background:'#34b7ad'}}>
              En savoir +
            </Link>
            <div style={{width:'112px',height:'96px',flexShrink:0}}>
              <svg viewBox="0 0 100 88" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="54" rx="27" ry="23" fill="#34b7ad"/>
                <circle cx="50" cy="25" r="15" fill="#6B3A2A"/>
                <ellipse cx="50" cy="19" rx="17" ry="13" fill="#1a0a00"/>
                <text x="50" y="52" textAnchor="middle" fontSize="11" fill="white">♀♀</text>
                <rect x="20" y="58" width="60" height="25" rx="4" fill="#d8d8e8"/>
                <rect x="24" y="62" width="52" height="17" rx="3" fill="#1e1640"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ BANDE PHOTOS / ICÔNES ══════ */}
      <div className="bg-white py-5" style={{borderTop:'1px solid #f5f5f5',borderBottom:'1px solid #f5f5f5'}}>
        <div className="flex items-center justify-center gap-5 flex-wrap px-6">
          <svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="5" r="5" fill="#ecc92f"/><circle cx="29" cy="17" r="5" fill="#ecc92f"/><circle cx="17" cy="29" r="5" fill="#ecc92f"/><circle cx="5" cy="17" r="5" fill="#ecc92f"/><circle cx="17" cy="17" r="4" fill="#ecc92f"/></svg>
          <span style={{color:'#34b7ad',fontSize:'28px',fontWeight:'bold'}}>♀</span>
          <div style={{width:'48px',height:'48px',borderRadius:'50%',overflow:'hidden',border:'2px solid rgba(98,46,209,.2)',flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={48} height={48} className="w-full h-full object-cover object-top"/>
          </div>
          <div style={{width:'36px',height:'36px',background:'#622ed1',flexShrink:0,clipPath:'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'}}/>
          <div style={{width:'56px',height:'56px',borderRadius:'50%',overflow:'hidden',border:'2.5px solid #ecc92f',flexShrink:0}}>
            <Image src="/hero-woman.jpg" alt="" width={56} height={56} className="w-full h-full object-cover object-top"/>
          </div>
          <span style={{color:'#321b45',fontSize:'22px'}}>◑</span>
          <span style={{color:'#34b7ad',fontSize:'22px'}}>◧</span>
          <svg width="22" height="28" viewBox="0 0 22 28"><ellipse cx="11" cy="14" rx="9" ry="13" fill="#ecc92f" transform="rotate(-10 11 14)"/></svg>
          <span style={{color:'#321b45',fontSize:'22px',fontWeight:'900'}}>✊</span>
          <div style={{width:'48px',height:'48px',borderRadius:'50%',overflow:'hidden',border:'2px solid rgba(52,183,173,.5)',flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={48} height={48} className="w-full h-full object-cover"/>
          </div>
          <span style={{color:'#34b7ad',fontSize:'28px',fontWeight:'bold'}}>♀</span>
        </div>
      </div>

      {/* ══════ COMMENT ÇA FONCTIONNE — DESIGN EXACT DE LA CAPTURE ══════ */}
      <section ref={stepsRef} className="bg-white py-20">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${stepsInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            {/* Titre avec fond violet clair arrondi — comme dans la capture */}
            <h2 className="font-heading font-black inline-block px-8 py-3 rounded-2xl"
                style={{fontSize:'clamp(2rem,4vw,3rem)',color:'#622ed1',background:'rgba(213,179,253,0.3)'}}>
              Comment ça fonctionne ?
            </h2>
          </div>

          {/* Container violet foncé — 4 cartes blanches avec arrondi LARGE en haut (comme capture) */}
          <div className={`rounded-3xl relative overflow-visible transition-all duration-700 ${stepsInView?'opacity-100 scale-100':'opacity-0 scale-95'}`}
               style={{background:'#321b45', padding:'48px 32px 48px'}}>

            {/* Lignes pointillées entre les étapes */}
            <div className="hidden lg:block absolute"
                 style={{top:'calc(32px + 50px)',left:'calc(25% - 20px)',width:'calc(50% + 40px)',
                         borderTop:'2.5px dashed rgba(255,255,255,0.2)',zIndex:0}}/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
              {steps.map((s, i) => (
                <div key={i}
                  className="bg-white text-center relative transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  style={{
                    /* Forme exacte de la capture : rectangle avec grands arrondis en HAUT seulement */
                    borderRadius: '120px 120px 24px 24px',
                    padding: '40px 20px 32px',
                    transitionDelay: `${i*100}ms`,
                    opacity: stepsInView ? 1 : 0,
                    transform: stepsInView ? 'translateY(0)' : 'translateY(24px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    minHeight: '240px',
                  }}>
                  {/* Grand numéro violet */}
                  <div className="font-heading font-black leading-none mb-4"
                       style={{fontSize:'5.5rem', color:'#622ed1', lineHeight:'.85'}}>
                    {s.num}
                  </div>
                  {/* Titre en violet souligné */}
                  <h3 className="font-heading font-bold text-sm mb-3 leading-snug"
                      style={{color:'#622ed1', textDecoration:'underline', textDecorationColor:'#622ed1', textDecorationThickness:'2px'}}>
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`text-center mt-9 transition-all duration-700 delay-300 ${stepsInView?'opacity-100 translate-y-0':'opacity-0 translate-y-5'}`}>
            <Link href="/candidature"
              className="inline-flex items-center gap-3 px-10 py-3 rounded-full font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
              style={{border:'2px solid #ecc92f',color:'#321b45',background:'transparent'}}>
              Candidatez ——→
            </Link>
          </div>
        </div>
      </section>

      <GenderDivider/>

      {/* ══════ WEBINAIRES ══════ */}
      <section ref={webRef} className="bg-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${webInView?'opacity-100 translate-x-0':'opacity-0 -translate-x-8'}`}>
              <h2 className="font-heading font-black leading-tight mb-1" style={{fontSize:'clamp(2.4rem,4.5vw,3.8rem)',color:'#321b45'}}>Webinaires</h2>
              <h2 className="font-heading font-black leading-tight mb-5" style={{fontSize:'clamp(2.4rem,4.5vw,3.8rem)',color:'#ecc92f'}}>&amp; Sessions live</h2>
              <p className="text-sm inline-block px-3 py-1.5 rounded-lg mb-6" style={{background:'rgba(213,179,253,0.3)',color:'#321b45'}}>
                Des sessions en direct avec nos experts.
              </p>
              <div>
                <Link href="/plateforme"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300"
                  style={{background:'#34b7ad',border:'2px solid #34b7ad'}}>
                  Se connecter
                </Link>
              </div>
            </div>
            <div className={`flex justify-center transition-all duration-700 delay-200 ${webInView?'opacity-100 translate-x-0':'opacity-0 translate-x-8'}`}>
              <div style={{width:'360px',height:'280px'}}><WebinairesIllustration/></div>
            </div>
          </div>
        </div>
      </section>

      <GenderDivider/>

      {/* ══════ QUI SOMMES NOUS ══════ */}
      <section ref={quiRef} className="bg-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className={`relative transition-all duration-700 ${quiInView?'opacity-100 translate-x-0':'opacity-0 -translate-x-8'}`}>
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{maxWidth:'380px',margin:'0 auto'}}>
                <Image src="/hero-woman.jpg" alt="Étudiante UMO ODAS" width={400} height={480}
                  className="w-full object-cover object-top" style={{height:'380px'}}/>
              </div>
              <div className="absolute" style={{bottom:'-12px',left:'-12px'}}>
                <svg width="52" height="52" viewBox="0 0 52 52"><circle cx="26" cy="8" r="7" fill="#ecc92f"/><circle cx="44" cy="26" r="7" fill="#ecc92f"/><circle cx="26" cy="44" r="7" fill="#ecc92f"/><circle cx="8" cy="26" r="7" fill="#ecc92f"/><circle cx="26" cy="26" r="6" fill="#ecc92f"/></svg>
              </div>
            </div>
            <div className={`transition-all duration-700 delay-200 ${quiInView?'opacity-100 translate-x-0':'opacity-0 translate-x-8'}`}>
              <h2 className="font-heading font-black mb-5" style={{fontSize:'clamp(2.2rem,4vw,3.2rem)'}}>
                <span className="inline-block px-3 py-1 rounded-xl" style={{background:'rgba(213,179,253,0.3)'}}>
                  <span style={{color:'#622ed1'}}>Qui sommes </span><span style={{color:'#ecc92f'}}>Nous ?</span>
                </span>
              </h2>
              <div className="mb-5">
                <Image src="/logo-umo.png" alt="UMO ODAS" width={220} height={76} className="object-contain" style={{height:'60px',width:'auto'}}/>
              </div>
              <div className="px-4 py-3 rounded-2xl mb-6" style={{background:'rgba(213,179,253,0.25)'}}>
                <p className="text-gray-700 text-sm leading-relaxed" style={{textAlign:'justify'}}>
                  L&apos;Université Militante ODAS est un programme de renforcement de capacités 100 pour cent en ligne.
                  Le programme fonctionne par cohortes et repose sur une approche d&apos;intelligence collective combinant
                  apprentissage théorique, travaux pratiques, coaching et échanges entre participants.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/candidature" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-heading font-bold text-sm hover:-translate-y-1 transition-all duration-300" style={{background:'#622ed1'}}>
                  Candidater <ArrowRight size={16}/>
                </Link>
                <Link href="/programme" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-heading font-semibold text-sm hover:-translate-y-1 transition-all duration-300" style={{border:'2px solid #622ed1',color:'#622ed1',background:'transparent'}}>
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GenderDivider/>

      {/* ══════ NOTRE SUPER ÉQUIPE — VRAIES PHOTOS ══════ */}
      <section ref={eqRef} className="bg-white py-20">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${eqInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading font-black inline-block px-6 py-2 rounded-2xl" style={{fontSize:'clamp(2rem,4vw,3rem)',background:'rgba(213,179,253,0.25)'}}>
              <span style={{color:'#622ed1'}}>Notre super </span><span style={{color:'#ecc92f'}}>Equipe</span>
            </h2>
          </div>
          <div style={{width:'14px',height:'14px',background:'#622ed1',borderRadius:'3px',transform:'rotate(12deg)',opacity:.45,marginBottom:'24px'}}/>

          {/* Grille : disposition exacte du site UMO — 4 colonnes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {equipe.map((m, i) => (
              <div key={i}
                className="text-center group transition-all duration-500"
                style={{transitionDelay:`${i*70}ms`,opacity:eqInView?1:0,transform:eqInView?'translateY(0)':'translateY(20px)'}}>
                <div className="mx-auto mb-3 overflow-hidden group-hover:scale-110 transition-transform duration-300"
                     style={{width:'120px',height:'120px',borderRadius:'50%',border:'4px solid #f0f0f0',boxShadow:'0 4px 14px rgba(0,0,0,.14)'}}>
                  <Image src={m.photo} alt={m.nom}
                    width={120} height={120}
                    className="w-full h-full object-cover object-top"
                    unoptimized/>
                </div>
                <h3 className="font-heading font-bold text-xs leading-tight" style={{color:'#622ed1'}}>{m.nom}</h3>
                <p className="text-gray-500 text-xs mt-0.5 leading-snug">{m.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GenderDivider/>

      {/* ══════ TÉMOIGNAGES ══════ */}
      <section ref={temoRef} className="bg-white py-20 overflow-hidden">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${temoInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading font-black inline-block px-6 py-2 rounded-2xl mb-3"
                style={{fontSize:'clamp(2rem,4vw,3rem)',background:'rgba(213,179,253,0.25)',color:'#622ed1'}}>
              Temoignage
            </h2>
            <p className="inline-block px-5 py-2 rounded-xl text-base"
               style={{background:'rgba(213,179,253,0.25)',color:'#622ed1'}}>
              Des participantes de nos cohortes précédentes partagent leur expérience.
            </p>
            <div className="mt-4 mx-auto w-4 h-4 rounded-sm opacity-45" style={{background:'#622ed1',transform:'rotate(12deg)'}}/>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mb-8">
            {temoignages.map((t,i) => (
              <div key={i}
                className="relative rounded-3xl p-5 flex-shrink-0 hover:-translate-y-2 transition-all duration-500"
                style={{
                  background:'#ecc92f',width:'200px',marginTop:bubbleTop[i]+'px',
                  boxShadow:'0 6px 20px rgba(236,201,47,.4)',
                  transitionDelay:`${i*100}ms`,
                  opacity:temoInView?1:0,
                  transform:temoInView?`translateY(${bubbleTop[i]}px)`:`translateY(${bubbleTop[i]+30}px)`,
                }}>
                <div className="flex items-center gap-1 mb-2">
                  <span style={{color:'rgba(50,27,69,.5)',fontSize:'18px',fontWeight:'900',lineHeight:1}}>&ldquo;&rdquo;</span>
                  <h4 className="font-heading font-black text-sm" style={{color:'#321b45'}}>{t.name}</h4>
                </div>
                <p className="text-xs leading-relaxed" style={{color:'#321b45'}}>{t.text}</p>
                <p className="text-xs mt-2 font-heading font-semibold" style={{color:'rgba(50,27,69,.55)'}}>{t.pays}</p>
                <div className="absolute" style={{bottom:'-11px',left:'28px',width:'22px',height:'22px',background:'#ecc92f',transform:'rotate(45deg)',borderRadius:'2px'}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ NOS PARTENAIRES — IMAGE OFFICIELLE DEPUIS UMO.CENTRE-ODAS.ORG ══════ */}
      <section ref={partRef} className="bg-white py-20">
        <div className="section-container">
          <div className={`text-center mb-12 transition-all duration-700 ${partInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <div className="mx-auto mb-4 w-4 h-4 rounded-sm opacity-45" style={{background:'#622ed1',transform:'rotate(12deg)'}}/>
            <h2 className="font-heading font-black inline-block px-6 py-2 rounded-2xl"
                style={{fontSize:'clamp(2rem,4vw,3rem)',background:'rgba(213,179,253,0.25)',color:'#622ed1'}}>
              Nos partenaires
            </h2>
            <p className="text-gray-500 mt-4">Merci aux partenaires techniques et stratégiques qui accompagnent le programme.</p>
          </div>

          {/* Image officielle des logos partenaires depuis le site UMO */}
          <div className={`transition-all duration-700 delay-200 ${partInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <Image
              src="https://umo.centre-odas.org/wp-content/uploads/2025/05/PTS_all_Plan-de-travail-1-2048x784.png"
              alt="Partenaires UMO ODAS"
              width={1200}
              height={460}
              className="w-full object-contain"
              style={{maxHeight:'300px'}}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ══════ BANDE FOOTER VIOLETTE ══════ */}
      <div className="overflow-hidden py-4" style={{background:'#321b45'}}>
        <div className="flex items-center justify-center gap-5 flex-nowrap px-4">
          <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0"><circle cx="16" cy="5" r="5" fill="#ecc92f"/><circle cx="27" cy="16" r="5" fill="#ecc92f"/><circle cx="16" cy="27" r="5" fill="#ecc92f"/><circle cx="5" cy="16" r="5" fill="#ecc92f"/><circle cx="16" cy="16" r="4" fill="#ecc92f"/></svg>
          <span style={{color:'white',fontSize:'24px',fontWeight:'bold',flexShrink:0}}>♀</span>
          <div style={{width:'48px',height:'48px',borderRadius:'50%',overflow:'hidden',border:'2px solid rgba(255,255,255,.25)',flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={48} height={48} className="w-full h-full object-cover object-top"/>
          </div>
          <div style={{width:'36px',height:'36px',background:'#622ed1',flexShrink:0,clipPath:'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'}}/>
          <div style={{width:'56px',height:'56px',borderRadius:'50%',overflow:'hidden',border:'2.5px solid #ecc92f',flexShrink:0}}>
            <Image src="/hero-woman.jpg" alt="" width={56} height={56} className="w-full h-full object-cover object-top"/>
          </div>
          <span style={{color:'white',fontSize:'22px',flexShrink:0}}>◑</span>
          <svg width="20" height="26" viewBox="0 0 20 26" className="flex-shrink-0"><ellipse cx="10" cy="13" rx="8" ry="12" fill="#ecc92f" transform="rotate(-10 10 13)"/></svg>
          <span style={{color:'white',fontSize:'22px',fontWeight:'900',flexShrink:0}}>✊</span>
          <div style={{width:'48px',height:'48px',borderRadius:'50%',overflow:'hidden',border:'2px solid rgba(52,183,173,.5)',flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={48} height={48} className="w-full h-full object-cover"/>
          </div>
          <span style={{color:'#34b7ad',fontSize:'24px',fontWeight:'bold',flexShrink:0}}>♀</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-14px); }
        }
      `}</style>
    </>
  )
}
