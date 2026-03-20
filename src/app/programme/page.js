import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Le Programme — UMO ODAS',
  description: 'Découvrez le programme complet de l\'Université Militante ODAS : 8 modules intensifs.',
}

/* ─── Séparateur ♀♂ ─── */
function GenderDivider({ color = '#622ed1' }) {
  return (
    <div className="overflow-hidden py-2 select-none" style={{background:'white'}}>
      <p className="text-center whitespace-nowrap"
         style={{color, opacity:.3, fontSize:'13px', letterSpacing:'3px', fontFamily:'sans-serif'}}>
        {Array(20).fill('⚢♂⚣⚤♀⚥⚦⚧ ').join('')}
      </p>
    </div>
  )
}

/* ─── Badge bouclier SVG (forme exacte du template) ─── */
function BadgeApproche({ icon, title, desc, delay = 0 }) {
  return (
    <div className="flex flex-col items-center group" style={{animationDelay:`${delay}ms`}}>
      {/* Forme bouclier : rectangle arrondi en bas, plat en haut avec légère courbure */}
      <div className="relative flex flex-col items-center text-center"
           style={{
             width: '200px',
             background: '#622ed1',
             borderRadius: '20px 20px 60% 60% / 20px 20px 40px 40px',
             padding: '28px 20px 36px',
             boxShadow: '0 8px 24px rgba(98,46,209,.35)',
           }}>
        {/* Icône jaune */}
        <div className="mb-3">{icon}</div>
        <h3 className="font-heading font-black text-white text-base leading-tight mb-2">{title}</h3>
        <p className="text-white/80 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

/* ─── Icônes jaunes pour "Notre approche" ─── */
const IconLivre = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <path d="M6 8 Q6 4 10 4 L22 4 L22 36 L10 36 Q6 36 6 32Z" stroke="#ecc92f" strokeWidth="2.5" fill="none"/>
    <path d="M22 4 L34 4 Q38 4 38 8 L38 32 Q38 36 34 36 L22 36Z" stroke="#ecc92f" strokeWidth="2.5" fill="none"/>
    <path d="M22 4 L22 36" stroke="#ecc92f" strokeWidth="1.5"/>
    <path d="M10 14 L18 14 M10 20 L18 20 M26 14 L34 14 M26 20 L34 20" stroke="#ecc92f" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconGroupe = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="14" cy="14" r="6" stroke="#ecc92f" strokeWidth="2.5"/>
    <circle cx="30" cy="14" r="6" stroke="#ecc92f" strokeWidth="2.5"/>
    <circle cx="22" cy="12" r="5" stroke="#ecc92f" strokeWidth="2.5"/>
    <path d="M4 36 Q4 26 14 26 Q18 26 20 28 Q22 24 22 24 Q22 24 24 28 Q26 26 30 26 Q40 26 40 36" stroke="#ecc92f" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
)

const IconCible = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="18" stroke="#ecc92f" strokeWidth="2.5"/>
    <circle cx="22" cy="22" r="12" stroke="#ecc92f" strokeWidth="2.5"/>
    <circle cx="22" cy="22" r="5"  fill="#ecc92f"/>
    <path d="M22 4 L22 10 M22 34 L22 40 M4 22 L10 22 M34 22 L40 22" stroke="#ecc92f" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

/* ─── Couleurs des modules ─── */
const moduleColors = [
  { bg:'#ecc92f', text:'#321b45' }, // 1 jaune
  { bg:'#34b7ad', text:'white' },   // 2 teal
  { bg:'#321b45', text:'white' },   // 3 violet foncé
  { bg:'#34b7ad', text:'white' },   // 4 teal
  { bg:'#321b45', text:'white' },   // 5 violet foncé
  { bg:'#622ed1', text:'white' },   // 6 violet
  { bg:'#321b45', text:'white' },   // 7 violet foncé
  { bg:'#ecc92f', text:'#321b45' }, // 8 jaune
]

const modules = [
  { num:'1', titre:'Introduction au militantisme féministe',     desc:'Histoire, cadres théoriques et contextes africains du féminisme militant.' },
  { num:'2', titre:'Droits sexuels et reproductifs',             desc:'Cadres juridiques internationaux, régionaux et nationaux. Protocole de Maputo.' },
  { num:'3', titre:'Avortement sécurisé — Faits et science',     desc:'Données médicales, méthodes sûres, mythes et réalités.' },
  { num:'4', titre:'Plaidoyer et lobbying',                      desc:'Techniques de plaidoyer, construction d\'alliances, engagement des décideurs.' },
  { num:'5', titre:'Communication et storytelling',              desc:'Narration militante, réseaux sociaux, gestion des médias.' },
  { num:'6', titre:'Sécurité numérique et psychosociale',        desc:'Protéger sa sécurité en ligne et prendre soin de sa santé mentale.' },
  { num:'7', titre:'Mobilisation et organisation communautaire', desc:'Stratégies de terrain, organisation de campagnes, coalitions.' },
  { num:'8', titre:'Projet final et certification',              desc:'Conception et présentation d\'un projet d\'action concrète.' },
]

/* ─── Symbole déco feuille ─── */
function Leaf({ color, rotate = 0, w = 50, h = 80 }) {
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <ellipse cx={w/2} cy={h/2} rx={w/2-2} ry={h/2-2}
               fill={color} transform={`rotate(${rotate} ${w/2} ${h/2})`}/>
    </svg>
  )
}

export default function ProgrammePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — fond blanc, titre violet+jaune, décos
      ══════════════════════════════════════════ */}
      <section className="relative bg-white pt-24 pb-4 overflow-hidden">
        {/* Forme violette arc haut gauche */}
        <div className="absolute top-0 left-0 w-48 h-48 opacity-90"
             style={{borderRadius:'0 0 100% 0', background:'#622ed1', transform:'translate(-40%, -20%)'}}>
        </div>
        {/* Feuilles teal gauche */}
        <div className="absolute left-0 top-40 opacity-90">
          <svg width="130" height="200" viewBox="0 0 130 200">
            <ellipse cx="65" cy="100" rx="55" ry="90" fill="#34b7ad" transform="rotate(-15 65 100)"/>
            <ellipse cx="40" cy="140" rx="35" ry="60" fill="#34b7ad" transform="rotate(10 40 140)" opacity=".8"/>
          </svg>
        </div>
        {/* Feuille jaune droite */}
        <div className="absolute right-8 top-32 opacity-85">
          <svg width="80" height="130" viewBox="0 0 80 130">
            <ellipse cx="40" cy="65" rx="32" ry="58" fill="#ecc92f" transform="rotate(-20 40 65)"/>
          </svg>
        </div>
        {/* Symbole ♀ droite */}
        <div className="absolute right-0 top-16 opacity-80">
          <span style={{fontSize:'120px', color:'#321b45', fontFamily:'sans-serif', lineHeight:1}}>♀</span>
        </div>

        <div className="section-container text-center relative z-10">
          <h1 className="font-heading font-black leading-tight mb-3">
            <span style={{fontSize:'clamp(2.4rem,5vw,4rem)', color:'#622ed1'}}>Un programme conçu</span><br/>
            <span style={{fontSize:'clamp(2.4rem,5vw,4rem)', color:'#ecc92f'}}>pour agir</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed" style={{maxWidth:'560px', margin:'0 auto'}}>
            8 modules intensifs, un coaching personnalisé, une communauté engagée.
            Tout ce qu&apos;il faut pour devenir une militante formée et outillée.
          </p>
        </div>
      </section>

      <GenderDivider />

      {/* ══════════════════════════════════════════
          NOTRE APPROCHE — 3 badges bouclier violets avec lignes pointillées courbes
      ══════════════════════════════════════════ */}
      <section className="relative bg-white py-16 overflow-hidden">
        {/* Feuilles teal gauche */}
        <div className="absolute left-0 top-1/4 opacity-70">
          <svg width="70" height="140" viewBox="0 0 70 140">
            <ellipse cx="35" cy="70" rx="30" ry="64" fill="#34b7ad" transform="rotate(10 35 70)"/>
          </svg>
        </div>
        {/* Feuille jaune droite */}
        <div className="absolute right-4 bottom-8 opacity-70">
          <svg width="55" height="90" viewBox="0 0 55 90">
            <ellipse cx="27" cy="45" rx="22" ry="42" fill="#ecc92f" transform="rotate(-15 27 45)"/>
          </svg>
        </div>
        {/* Flèche double haut droite */}
        <div className="absolute right-16 top-6 opacity-60">
          <svg width="48" height="50" viewBox="0 0 48 50">
            <path d="M24 44 L6 22 L16 22 L16 8 L32 8 L32 22 L42 22Z" fill="#622ed1"/>
            <path d="M24 32 L6 10 L16 10 L16 0 L32 0 L32 10 L42 10Z" fill="#622ed1" opacity=".4"/>
          </svg>
        </div>

        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black" style={{fontSize:'clamp(2rem,4vw,3rem)', color:'#622ed1'}}>
              Notre approche
            </h2>
          </div>

          {/* 3 badges + lignes pointillées courbes entre eux */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">

            {/* Ligne pointillée courbe gauche→milieu */}
            <div className="hidden md:block absolute" style={{left:'calc(50% - 280px)', top:'50%', zIndex:0}}>
              <svg width="200" height="60" viewBox="0 0 200 60">
                <path d="M0 30 Q50 10 100 30 Q150 50 200 30"
                      fill="none" stroke="#622ed1" strokeWidth="2.5"
                      strokeDasharray="8 6" opacity=".5"/>
                <polygon points="196,26 200,30 196,34" fill="#622ed1" opacity=".5"/>
              </svg>
            </div>
            {/* Ligne pointillée courbe milieu→droite */}
            <div className="hidden md:block absolute" style={{left:'calc(50% + 80px)', top:'50%', zIndex:0}}>
              <svg width="200" height="60" viewBox="0 0 200 60">
                <path d="M0 30 Q50 50 100 30 Q150 10 200 30"
                      fill="none" stroke="#622ed1" strokeWidth="2.5"
                      strokeDasharray="8 6" opacity=".5"/>
                <polygon points="196,26 200,30 196,34" fill="#622ed1" opacity=".5"/>
              </svg>
            </div>

            <BadgeApproche
              icon={<IconLivre />}
              title="Apprentissage progressif"
              desc="Les modules se débloquent au fil de votre avancement."
            />
            <BadgeApproche
              icon={<IconGroupe />}
              title="Intelligence collective"
              desc="Forums, groupes de coaching, partage d'expériences entre pairs."
              delay={150}
            />
            <BadgeApproche
              icon={<IconCible />}
              title="Ancrage dans la pratique"
              desc="Exercices concrets, études de cas, projets terrain."
              delay={300}
            />
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ══════════════════════════════════════════
          8 MODULES — Photo homme + grand 8 + séparateur + grille colorée
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="section-container">

          {/* Bloc "8 Modules" avec photo à gauche */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
            {/* Photo étudiant homme */}
            <div className="relative flex-shrink-0">
              <div className="overflow-hidden shadow-xl"
                   style={{width:'180px', height:'220px', borderRadius:'50% 50% 12px 12px'}}>
                <Image src="/hero-man.jpg" alt="Étudiant UMO"
                  width={180} height={220}
                  className="w-full h-full object-cover object-top"/>
              </div>
              {/* Fleur jaune déco */}
              <div className="absolute -bottom-4 -left-4">
                <svg width="44" height="44" viewBox="0 0 44 44">
                  <circle cx="22" cy="6"  r="6" fill="#ecc92f"/>
                  <circle cx="38" cy="22" r="6" fill="#ecc92f"/>
                  <circle cx="22" cy="38" r="6" fill="#ecc92f"/>
                  <circle cx="6"  cy="22" r="6" fill="#ecc92f"/>
                  <circle cx="22" cy="22" r="5" fill="#ecc92f"/>
                </svg>
              </div>
              {/* Symbole ♀ déco */}
              <div className="absolute -left-6 top-1/3 opacity-60">
                <span style={{fontSize:'32px', color:'#622ed1'}}>♀</span>
              </div>
            </div>

            {/* Grand 8 + texte */}
            <div>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-heading font-black leading-none select-none"
                      style={{fontSize:'clamp(8rem,16vw,12rem)', color:'#622ed1', lineHeight:.85}}>
                  8
                </span>
                <span className="font-heading font-black"
                      style={{fontSize:'clamp(2rem,5vw,4rem)', color:'#622ed1'}}>
                  Modules
                </span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed" style={{maxWidth:'420px'}}>
                Chaque module dure environ 2 semaines et combine lectures, vidéos, exercices et échanges.
              </p>
              {/* Séparateur ♀♂ inline */}
              <p className="mt-3 text-xs select-none"
                 style={{color:'#622ed1', opacity:.3, letterSpacing:'3px'}}>
                ⚢♂⚣⚤♀⚥⚦⚧⚢♂⚣⚤♀⚥⚦⚧⚢♂⚣⚤♀⚥⚦
              </p>
            </div>
          </div>

          {/* Séparateur ♀♂ pleine largeur */}
          <GenderDivider />

          {/* ── Grille 8 modules colorés ── */}
          {/* Rangée 1 — 3 modules */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {modules.slice(0,3).map((m, i) => {
              const c = moduleColors[i]
              return (
                <div key={i}
                  className="relative rounded-2xl p-5 overflow-hidden hover:scale-105 transition-transform duration-300"
                  style={{background: c.bg, boxShadow:'0 4px 16px rgba(0,0,0,.15)'}}>
                  {/* Numéro + titre */}
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-heading font-black text-3xl leading-none flex-shrink-0"
                          style={{color: c.text, opacity:.9}}>{m.num}</span>
                    <h3 className="font-heading font-black text-sm leading-tight"
                        style={{color: c.text}}>{m.titre}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{color: c.text, opacity:.85}}>{m.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Rangée 2 — 3 modules avec déco feuille sur module 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 relative">
            {/* Feuille déco sur module 5 */}
            <div className="hidden sm:block absolute" style={{left:'calc(33.3% + 8px)', top:'-18px', zIndex:10, opacity:.8}}>
              <svg width="40" height="55" viewBox="0 0 40 55">
                <ellipse cx="20" cy="27" rx="15" ry="24" fill="#ecc92f" transform="rotate(-15 20 27)"/>
              </svg>
            </div>
            {modules.slice(3,6).map((m, i) => {
              const c = moduleColors[i+3]
              return (
                <div key={i}
                  className="relative rounded-2xl p-5 overflow-hidden hover:scale-105 transition-transform duration-300"
                  style={{background: c.bg, boxShadow:'0 4px 16px rgba(0,0,0,.15)'}}>
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-heading font-black text-3xl leading-none flex-shrink-0"
                          style={{color: c.text, opacity:.9}}>{m.num}</span>
                    <h3 className="font-heading font-black text-sm leading-tight"
                        style={{color: c.text}}>{m.titre}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{color: c.text, opacity:.85}}>{m.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Rangée 3 — modules 7 et 8 centrés */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" style={{maxWidth:'680px', margin:'16px auto 0'}}>
            {modules.slice(6).map((m, i) => {
              const c = moduleColors[i+6]
              return (
                <div key={i}
                  className="relative rounded-2xl p-5 overflow-hidden hover:scale-105 transition-transform duration-300"
                  style={{background: c.bg, boxShadow:'0 4px 16px rgba(0,0,0,.15)'}}>
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-heading font-black text-3xl leading-none flex-shrink-0"
                          style={{color: c.text, opacity:.9}}>{m.num}</span>
                    <h3 className="font-heading font-black text-sm leading-tight"
                        style={{color: c.text}}>{m.titre}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{color: c.text, opacity:.85}}>{m.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BANDE PHOTOS + ICÔNES (comme dans template)
      ══════════════════════════════════════════ */}
      <div className="bg-white py-5" style={{borderTop:'1px solid #f5f5f5', borderBottom:'1px solid #f5f5f5'}}>
        <div className="flex items-center justify-center gap-5 flex-wrap px-6">
          <svg width="34" height="34" viewBox="0 0 34 34">
            <circle cx="17" cy="5" r="5" fill="#ecc92f"/><circle cx="29" cy="17" r="5" fill="#ecc92f"/>
            <circle cx="17" cy="29" r="5" fill="#ecc92f"/><circle cx="5" cy="17" r="5" fill="#ecc92f"/>
            <circle cx="17" cy="17" r="4" fill="#ecc92f"/>
          </svg>
          <span style={{color:'#34b7ad', fontSize:'26px', fontWeight:'bold'}}>♀</span>
          <div style={{width:'44px', height:'44px', borderRadius:'50%', overflow:'hidden', border:'2px solid rgba(98,46,209,.2)', flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={44} height={44} className="w-full h-full object-cover object-top"/>
          </div>
          <div style={{width:'32px', height:'32px', background:'#622ed1', flexShrink:0,
            clipPath:'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'}}/>
          <div style={{width:'52px', height:'52px', borderRadius:'50%', overflow:'hidden', border:'2px solid rgba(98,46,209,.2)', flexShrink:0}}>
            <Image src="/hero-woman.jpg" alt="" width={52} height={52} className="w-full h-full object-cover object-top"/>
          </div>
          <span style={{color:'#321b45', fontSize:'20px'}}>◑</span>
          <svg width="20" height="26" viewBox="0 0 20 26">
            <ellipse cx="10" cy="13" rx="8" ry="12" fill="#ecc92f" transform="rotate(-10 10 13)"/>
          </svg>
          <span style={{color:'#321b45', fontSize:'20px', fontWeight:'900'}}>✊</span>
          <div style={{width:'44px', height:'44px', borderRadius:'50%', overflow:'hidden', border:'2px solid rgba(52,183,173,.4)', flexShrink:0}}>
            <Image src="/hero-man.jpg" alt="" width={44} height={44} className="w-full h-full object-cover"/>
          </div>
          <span style={{color:'#34b7ad', fontSize:'26px', fontWeight:'bold'}}>♀</span>
        </div>
      </div>

      <GenderDivider />

      {/* ══════════════════════════════════════════
          PRÊTE À COMMENCER ? — fond blanc, texte centré
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 text-center">
        <div className="section-container">
          <h2 className="font-heading font-black mb-3"
              style={{fontSize:'clamp(2.2rem,5vw,3.5rem)', color:'#622ed1'}}>
            Prête<br/>à commencer ?
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Les candidatures pour la cohorte 4 sont ouvertes jusqu&apos;à épuisement des places.
          </p>
          <Link href="/candidature"
            className="inline-flex items-center gap-3 px-12 py-4 rounded-full font-heading font-bold text-base hover:-translate-y-1 transition-all duration-300"
            style={{background:'#ecc92f', color:'#321b45', boxShadow:'0 6px 20px rgba(236,201,47,.4)'}}>
            Candidatez ——→
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER — fond violet foncé complet
      ══════════════════════════════════════════ */}
      <footer style={{background:'#321b45'}} className="text-white">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Image src="/logo-umo.png" alt="UMO ODAS" width={140} height={48}
                className="object-contain mb-4" style={{height:'44px', width:'auto'}}/>
              <p className="text-white/55 text-sm leading-relaxed mb-4 max-w-xs">
                Un programme de renforcement de capacités 100% en ligne.
                Apprendre, échanger et agir ensemble pour l&apos;avortement sécurisé en Afrique.
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <span style={{color:'#ecc92f'}}>✉</span><span>umo@centre-odas.org</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <span style={{color:'#ecc92f'}}>📍</span><span>Abidjan, Côte d&apos;Ivoire</span>
                </div>
              </div>
            </div>
            {[
              { titre:'Programme', liens:[{l:'Présentation',h:'/programme'},{l:'Cohortes',h:'/cohortes'},{l:'Modules',h:'/programme#modules'},{l:'Webinaires',h:'/webinaires'}] },
              { titre:'Espace',    liens:[{l:'Se connecter',h:'/plateforme'},{l:'Candidater',h:'/candidature'},{l:'Ressources',h:'/ressources'},{l:'FAQ',h:'/faq'}] },
              { titre:'ODAS',     liens:[{l:'Notre équipe',h:'/equipe'},{l:'Contact',h:'/contact'},{l:'Centre ODAS',h:'https://centre-odas.org'}] },
            ].map(col => (
              <div key={col.titre}>
                <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4"
                    style={{color:'#ecc92f'}}>{col.titre}</h4>
                <ul className="space-y-2.5">
                  {col.liens.map(l => (
                    <li key={l.h}>
                      <Link href={l.h} className="text-white/50 hover:text-white text-sm transition-colors">{l.l}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bande basse avec photos + icônes */}
        <div className="py-4 overflow-hidden" style={{borderTop:'1px solid rgba(255,255,255,.1)'}}>
          <div className="flex items-center justify-center gap-5 flex-nowrap px-4">
            <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0">
              <circle cx="16" cy="5" r="5" fill="#ecc92f"/><circle cx="27" cy="16" r="5" fill="#ecc92f"/>
              <circle cx="16" cy="27" r="5" fill="#ecc92f"/><circle cx="5" cy="16" r="5" fill="#ecc92f"/>
              <circle cx="16" cy="16" r="4" fill="#ecc92f"/>
            </svg>
            <span style={{color:'white', fontSize:'22px', fontWeight:'bold', flexShrink:0}}>♀</span>
            <div style={{width:'44px',height:'44px',borderRadius:'50%',overflow:'hidden',border:'2px solid rgba(255,255,255,.25)',flexShrink:0}}>
              <Image src="/hero-man.jpg" alt="" width={44} height={44} className="w-full h-full object-cover object-top"/>
            </div>
            <div style={{width:'32px',height:'32px',background:'#622ed1',flexShrink:0,
              clipPath:'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'}}/>
            <div style={{width:'52px',height:'52px',borderRadius:'50%',overflow:'hidden',border:'2.5px solid #ecc92f',flexShrink:0}}>
              <Image src="/hero-woman.jpg" alt="" width={52} height={52} className="w-full h-full object-cover object-top"/>
            </div>
            <span style={{color:'white', fontSize:'20px', flexShrink:0}}>◑</span>
            <svg width="20" height="26" viewBox="0 0 20 26" className="flex-shrink-0">
              <ellipse cx="10" cy="13" rx="8" ry="12" fill="#ecc92f" transform="rotate(-10 10 13)"/>
            </svg>
            <span style={{color:'white', fontSize:'20px', fontWeight:'900', flexShrink:0}}>✊</span>
            <div style={{width:'44px',height:'44px',borderRadius:'50%',overflow:'hidden',border:'2px solid rgba(52,183,173,.5)',flexShrink:0}}>
              <Image src="/hero-man.jpg" alt="" width={44} height={44} className="w-full h-full object-cover"/>
            </div>
            <span style={{color:'#34b7ad', fontSize:'22px', fontWeight:'bold', flexShrink:0}}>♀</span>
          </div>
        </div>
      </footer>
    </>
  )
}
