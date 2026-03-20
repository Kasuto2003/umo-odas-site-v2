import Link from 'next/link'
import { ArrowRight, Calendar, Users, Globe, Star } from 'lucide-react'

export const metadata = {
  title: 'Cohortes',
  description: 'Découvrez les cohortes passées et la prochaine de l\'UMO ODAS.',
}

const cohortePassees = [
  { num: 3, annee: '2024', pays: 8, participants: 48, satisfaction: '96%',
    description: 'Focus sur le plaidoyer digital et la mobilisation en ligne.',
    pays_list: ['🇨🇮 Côte d\'Ivoire', '🇸🇳 Sénégal', '🇧🇫 Burkina Faso', '🇲🇱 Mali', '🇬🇳 Guinée', '🇧🇯 Bénin', '🇹🇬 Togo', '🇨🇲 Cameroun'] },
  { num: 2, annee: '2023', pays: 6, participants: 42, satisfaction: '94%',
    description: 'Renforcement des capacités en communication et storytelling.',
    pays_list: ['🇨🇮 Côte d\'Ivoire', '🇸🇳 Sénégal', '🇧🇫 Burkina Faso', '🇲🇱 Mali', '🇬🇳 Guinée', '🇧🇯 Bénin'] },
  { num: 1, annee: '2022', pays: 4, participants: 35, satisfaction: '92%',
    description: 'La première cohorte — poser les bases du militantisme informé.',
    pays_list: ['🇨🇮 Côte d\'Ivoire', '🇸🇳 Sénégal', '🇧🇫 Burkina Faso', '🇲🇱 Mali'] },
]

export default function CohortesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-odas-dark via-odas-blue to-odas-light">
        <div className="section-container text-center text-white">
          <span className="badge bg-white/15 border border-white/25 text-white mb-4">
            Nos cohortes
          </span>
          <h1 className="font-heading font-black text-4xl md:text-5xl leading-tight mb-4">
            <span className="text-odas-yellow">3 cohortes.</span><br />
            Une communauté grandissante.
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Depuis 2022, nous formons des militant·es engagé·es à travers toute l'Afrique francophone.
          </p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#F8F8FF" />
        </svg>
      </section>

      {/* ── PROCHAINE COHORTE ── */}
      <section className="py-16 bg-odas-bg">
        <div className="section-container">
          <div className="bg-gradient-to-r from-odas-blue to-odas-dark rounded-3xl p-8 md:p-10
                          text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full
                            bg-odas-yellow/10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <span className="badge bg-odas-yellow text-odas-blue mb-4">
                🔥 Inscriptions ouvertes
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl mb-3">
                Cohorte 4 — 2025
              </h2>
              <p className="text-white/70 mb-6 max-w-lg">
                La quatrième édition de l'Université Militante ODAS ouvre ses portes.
                Places limitées à 50 participant·es.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Calendar, label: 'Début',       val: 'Septembre 2025' },
                  { icon: Users,    label: 'Places',       val: '50 participant·es' },
                  { icon: Globe,    label: 'Format',       val: '100% en ligne' },
                  { icon: Star,     label: 'Durée',        val: '3 mois' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-odas-yellow flex-shrink-0" />
                      <div>
                        <div className="text-white/50 text-xs">{item.label}</div>
                        <div className="text-white font-heading font-bold text-sm">{item.val}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <Link href="/candidature" className="btn-yellow">
                Postuler maintenant <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COHORTES PASSÉES ── */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="section-title text-center mb-12">Cohortes précédentes</h2>
          <div className="space-y-6">
            {cohortePassees.map((c, i) => (
              <div key={i}
                className="border-2 border-odas-soft rounded-2xl p-6 md:p-8
                           hover:border-odas-blue/30 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">

                  {/* Numéro */}
                  <div className="w-16 h-16 bg-odas-blue rounded-2xl flex items-center
                                  justify-center font-heading font-black text-white text-2xl
                                  flex-shrink-0">
                    {c.num}
                  </div>

                  {/* Infos */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-heading font-bold text-odas-blue text-xl">
                        Cohorte {c.num} — {c.annee}
                      </h3>
                      <span className="badge bg-odas-soft text-odas-blue">Terminée ✓</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{c.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.pays_list.map((p, j) => (
                        <span key={j} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 text-center flex-shrink-0">
                    {[
                      { val: c.participants, lbl: 'Participant·es' },
                      { val: c.pays,         lbl: 'Pays' },
                      { val: c.satisfaction, lbl: 'Satisfaction' },
                    ].map((s, j) => (
                      <div key={j}>
                        <div className="font-heading font-black text-2xl text-odas-blue">{s.val}</div>
                        <div className="text-gray-400 text-xs">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
