import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Charte UMO — Université Militante ODAS',
  description: 'Charte d\'engagement de l\'Université Militante ODAS pour un espace sûr, féministe, sorore et inclusif.',
}

const sections = [
  {
    num: 'I',
    titre: 'Valeurs partagées',
    color: 'bg-umo-purple',
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
    num: 'II',
    titre: 'Engagements des lauréat·es',
    color: 'bg-umo-yellow',
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
    num: 'III',
    titre: 'Engagements des coach·es et intervenant·es',
    color: 'bg-umo-teal',
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

export default function CharteUMOPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{background:'linear-gradient(135deg, #321b45 0%, #622ed1 50%, #9963db 100%)'}}>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{background:'#ecc92f', transform:'translate(30%, -30%)'}}/>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{background:'#34b7ad', transform:'translate(-30%, 30%)'}}/>
        <div className="section-container text-center relative">
          <div className="text-5xl mb-4">♀</div>
          <span className="inline-block px-5 py-2 rounded-full text-xs font-heading font-bold tracking-widest uppercase mb-5"
                style={{background:'rgba(255,255,255,0.15)', color:'white', border:'1px solid rgba(255,255,255,0.3)'}}>
            Engagement
          </span>
          <h1 className="font-heading font-black text-white mb-3" style={{fontSize:'clamp(2rem,4vw,3.5rem)'}}>
            Charte d&apos;engagement
          </h1>
          <h2 className="font-heading font-black mb-5" style={{fontSize:'clamp(1.5rem,3vw,2.5rem)', color:'#ecc92f'}}>
            de l&apos;Université Militante ODAS
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Pour un espace sûr, féministe, sorore et inclusif
          </p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="white"/>
        </svg>
      </section>

      {/* PRÉAMBULE */}
      <section className="py-14 bg-white">
        <div className="section-container max-w-3xl">
          <div className="rounded-3xl p-8" style={{background:'rgba(98,46,209,0.06)', border:'2px solid rgba(98,46,209,0.15)'}}>
            <h3 className="font-heading font-black text-xl mb-4" style={{color:'#622ed1'}}>Préambule</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              L&apos;Université Militante ODAS est un espace d&apos;apprentissage collectif, de co-création et d&apos;engagement.
              Elle a pour objectif de former une nouvelle génération d&apos;activistes pro-choix en Afrique francophone,
              en renforçant leurs compétences dans les domaines des droits et de la santé sexuels et reproductifs (DSSR),
              avec un accent particulier sur l&apos;avortement sécurisé.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
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
      </section>

      {/* SECTIONS */}
      <section className="pb-14 bg-white">
        <div className="section-container max-w-3xl space-y-8">
          {sections.map((s, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-md">
              {/* En-tête coloré */}
              <div className={`${s.color} px-8 py-5 flex items-center gap-4`}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-black text-white text-lg">{s.num}</span>
                </div>
                <h3 className="font-heading font-black text-white text-xl">{s.titre}</h3>
              </div>
              {/* Contenu */}
              <div className="bg-white px-8 py-6">
                <ul className="space-y-3">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{background:'#622ed1'}}/>
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Section IV */}
          <div className="rounded-3xl overflow-hidden shadow-md">
            <div className="px-8 py-5 flex items-center gap-4" style={{background:'#c0392b'}}>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-black text-white text-lg">IV</span>
              </div>
              <h3 className="font-heading font-black text-white text-xl">Dispositions finales</h3>
            </div>
            <div className="bg-white px-8 py-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Tout manquement grave à cette charte pourra entraîner :
              </p>
              <ul className="space-y-2">
                {[
                  'Un rappel à l\'ordre, une médiation ou un retrait temporaire d\'une activité ;',
                  'En cas de comportement abusif, discriminatoire ou menaçant : l\'exclusion définitive du programme, sans appel.',
                ].map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{background:'#c0392b'}}/>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section V */}
          <div className="rounded-3xl p-8" style={{background:'linear-gradient(135deg, #321b45, #622ed1)'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="font-heading font-black text-white">V</span>
              </div>
              <h3 className="font-heading font-black text-white text-xl">Validation</h3>
            </div>
            <p className="text-white/85 text-sm leading-relaxed mb-6">
              En suivant ce cours, je reconnais avoir pris connaissance des engagements qui y figurent
              et m&apos;engage à les respecter pour garantir un espace sûr, sorore, féministe et respectueux
              pour toutes les personnes impliquées dans l&apos;Université Militante ODAS.
            </p>
            <p className="text-white/70 text-xs">
              Pour tout signalement contacter le Centre ODAS à{' '}
              <a href="mailto:communication@centre-odas.org" className="text-umo-yellow underline">
                communication@centre-odas.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Candidatez <ArrowRight className="w-4 h-4"/>
          </Link>
        </div>
      </section>
    </>
  )
}
