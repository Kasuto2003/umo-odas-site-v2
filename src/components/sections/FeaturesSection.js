'use client'
import Link from 'next/link'
import { BookOpen, Users, MessageSquare, Video, Award, ArrowRight } from 'lucide-react'

// ════════════════════════════════════════════════
// SECTION FONCTIONNALITÉS
// ════════════════════════════════════════════════
const features = [
  { icon: BookOpen,      title: 'Modules structurés',    color: 'odas-blue',
    desc: 'Des cours organisés en leçons progressives, accessibles à votre rythme avec déblocage automatique.' },
  { icon: Users,         title: 'Coaching de groupe',    color: 'odas-teal',
    desc: 'Des groupes de 10 participants accompagnés par un·e coach expert·e tout au long du parcours.' },
  { icon: MessageSquare, title: 'Forums & échanges',     color: 'odas-green',
    desc: 'Espaces d\'échange collectifs et forums privés par groupe pour une intelligence collective forte.' },
  { icon: Video,         title: 'Webinaires live',       color: 'odas-light',
    desc: 'Sessions en direct avec Zoom pour approfondir les thèmes et interagir avec les intervenants.' },
  { icon: Award,         title: 'Badges & Attestations', color: 'odas-yellow',
    desc: 'Certification officielle de votre participation et vos acquis, téléchargeable et vérifiable.' },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-24 bg-odas-bg">
      <div className="section-container">

        {/* En-tête */}
        <div className="text-center mb-14">
          <span className="badge bg-odas-soft text-odas-blue mb-4">
            Ce que vous apprenez
          </span>
          <h2 className="section-title mb-4">
            Une formation complète et engagée
          </h2>
          <p className="section-subtitle">
            Des modules conçus pour former des militant·es éclairé·es,
            capables d'agir concrètement sur le terrain.
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="group card hover:border-odas-blue/30 cursor-pointer"
              >
                {/* Icône */}
                <div className={`w-12 h-12 rounded-2xl bg-${f.color}/10
                                flex items-center justify-center mb-4
                                group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 text-${f.color}`} />
                </div>

                {/* Texte */}
                <h3 className="font-heading font-bold text-odas-blue text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>

                {/* Ligne décorative au hover */}
                <div className={`mt-4 h-0.5 w-0 bg-${f.color} rounded-full
                                group-hover:w-full transition-all duration-500`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════
// SECTION COMMENT ÇA MARCHE
// ════════════════════════════════════════════════
const steps = [
  { num: '01', title: 'Candidatez',
    desc: 'Remplissez le formulaire en ligne. L\'équipe examine votre dossier sous 5 jours.',
    color: 'bg-odas-blue' },
  { num: '02', title: 'Rejoignez votre cohorte',
    desc: 'Après sélection, vous recevez votre accès et intégrez votre groupe de coaching.',
    color: 'bg-odas-dark' },
  { num: '03', title: 'Apprenez & échangez',
    desc: 'Suivez les modules, participez aux forums, rendez vos devoirs et assistez aux webinaires.',
    color: 'bg-odas-teal' },
  { num: '04', title: 'Certifiez-vous',
    desc: 'En fin de parcours, recevez votre attestation et vos badges de compétences.',
    color: 'bg-odas-green' },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-odas-soft/30 to-white">
      <div className="section-container">

        <div className="text-center mb-14">
          <span className="badge bg-odas-soft text-odas-blue mb-4">
            Le parcours
          </span>
          <h2 className="section-title mb-4">Comment ça fonctionne ?</h2>
          <p className="section-subtitle">
            4 étapes simples pour rejoindre la communauté UMO ODAS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative card overflow-hidden group">
              {/* Numéro géant en fond */}
              <div className="absolute top-2 right-3 font-heading font-black text-6xl
                              text-odas-blue/[0.06] leading-none pointer-events-none select-none">
                {step.num}
              </div>

              {/* Badge numéro */}
              <div className={`w-11 h-11 ${step.color} rounded-xl flex items-center
                              justify-center font-heading font-black text-white text-sm mb-4`}>
                {step.num}
              </div>

              <h3 className="font-heading font-bold text-odas-blue text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════
// SECTION STATISTIQUES
// ════════════════════════════════════════════════
const statsData = [
  { number: '200+', label: 'Participant·es formé·es' },
  { number: '8',    label: 'Pays représentés' },
  { number: '3',    label: 'Cohortes réussies' },
  { number: '95%',  label: 'Taux de satisfaction' },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-odas-blue">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((s, i) => (
            <div key={i}>
              <div className="font-heading font-black text-4xl md:text-5xl text-odas-yellow mb-2">
                {s.number}
              </div>
              <div className="text-white/65 text-sm font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════
// SECTION TÉMOIGNAGES
// ════════════════════════════════════════════════
const testimonials = [
  {
    name: 'Aminata K.',
    country: '🇸🇳 Sénégal',
    cohort: 'Cohorte 2',
    text: 'Cette formation a complètement transformé ma façon d\'aborder le plaidoyer. Les échanges avec les autres participantes étaient incroyablement riches.',
  },
  {
    name: 'Grace O.',
    country: '🇳🇬 Nigeria',
    cohort: 'Cohorte 1',
    text: 'Le coaching en petits groupes est un vrai plus. Notre coach était disponible et vraiment à l\'écoute. J\'ai acquis des compétences concrètes.',
  },
  {
    name: 'Fatoumata D.',
    country: '🇲🇱 Mali',
    cohort: 'Cohorte 3',
    text: 'La plateforme est facile à utiliser même avec une connexion lente. J\'ai pu suivre tous les modules depuis mon téléphone sans problème.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24 bg-odas-bg">
      <div className="section-container">

        <div className="text-center mb-14">
          <span className="badge bg-odas-soft text-odas-blue mb-4">
            Témoignages
          </span>
          <h2 className="section-title mb-4">Ce qu'elles en disent</h2>
          <p className="section-subtitle">
            Des participantes de nos cohortes précédentes partagent leur expérience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card flex flex-col">
              {/* Guillemets */}
              <div className="text-5xl text-odas-blue/20 font-heading font-black leading-none mb-3">
                "
              </div>

              {/* Texte */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                {t.text}
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* Avatar initiale */}
                <div className="w-10 h-10 rounded-full bg-odas-blue flex items-center
                                justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-odas-blue">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.country} · {t.cohort}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════
// SECTION CTA FINALE
// ════════════════════════════════════════════════
export function CtaSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="section-container">
        <div className="bg-gradient-to-br from-odas-dark via-odas-blue to-odas-light
                        rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">

          {/* Décor fond */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full
                          bg-white/[0.04] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full
                          bg-odas-yellow/[0.08] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          {/* Emoji */}
          <div className="text-5xl mb-4">🌱</div>

          <h2 className="font-heading font-black text-white text-3xl md:text-4xl
                         leading-tight mb-4 max-w-2xl mx-auto">
            Prête à rejoindre la prochaine cohorte ?
          </h2>

          <p className="text-white/70 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Les inscriptions pour la cohorte 4 sont ouvertes. Rejoignez une communauté
            engagée de militant·es pour l'avortement sécurisé en Afrique.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/candidature" className="btn-yellow">
              Postuler maintenant <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/plateforme" className="btn-outline-white">
              Accéder à la plateforme
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
