'use client'
import { useState } from 'react'
import { Calendar, Clock, Video, X, CheckCircle } from 'lucide-react'

const webinairesAVenir = [
  { id: 1, titre: 'Le Protocole de Maputo — 20 ans après', date: '15 Juillet 2025', heure: '14h00 GMT', intervenant: 'Dr. Aminata Coulibaly', places: 150 },
  { id: 2, titre: 'Communication digitale pour le plaidoyer', date: '22 Juillet 2025', heure: '16h00 GMT', intervenant: 'Fatou Diallo', places: 150 },
  { id: 3, titre: 'Sécurité numérique pour militantes', date: '29 Juillet 2025', heure: '14h00 GMT', intervenant: 'Expert invité', places: 100 },
]

const webinairesPassees = [
  { titre: 'Introduction aux droits reproductifs', date: 'Juin 2025', replay: true },
  { titre: 'Construire une coalition efficace', date: 'Mai 2025', replay: true },
  { titre: 'Témoignages — Cohorte 3', date: 'Avril 2025', replay: false },
]

export default function WebinairesPage() {
  const [modal, setModal]     = useState(null) // webinaire sélectionné
  const [form, setForm]       = useState({ nom: '', email: '', pays: '' })
  const [statut, setStatut]   = useState('idle') // idle | loading | success | error

  const ouvrirModal = (w) => {
    setModal(w)
    setForm({ nom: '', email: '', pays: '' })
    setStatut('idle')
  }

  const fermerModal = () => {
    setModal(null)
    setStatut('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatut('loading')
    // Simulation d'inscription — à connecter à une vraie API plus tard
    await new Promise(r => setTimeout(r, 1200))
    setStatut('success')
  }

  return (
    <>
      <section className="pt-28 pb-12 bg-gradient-to-br from-umo-dark via-umo-purple to-umo-light">
        <div className="section-container text-center text-white">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">
            Webinaires <span className="text-umo-yellow">&amp; Sessions live</span>
          </h1>
          <p className="text-white/75 text-lg">Des sessions en direct avec nos experts.</p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#F8F8FF" />
        </svg>
      </section>

      <section className="py-16 bg-umo-soft">
        <div className="section-container">

          {/* À venir */}
          <h2 className="section-title mb-8">Prochains webinaires</h2>
          <div className="space-y-4 mb-14">
            {webinairesAVenir.map((w) => (
              <div key={w.id} className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-12 h-12 bg-umo-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-umo-purple text-lg mb-1">{w.titre}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {w.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {w.heure}</span>
                      <span>Animé par {w.intervenant}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => ouvrirModal(w)}
                    className="btn-primary text-sm flex-shrink-0"
                  >
                    S&apos;inscrire →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Passés */}
          <h2 className="section-title mb-8">Webinaires passés</h2>
          <div className="space-y-3">
            {webinairesPassees.map((w, i) => (
              <div key={i} className="card p-5 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-umo-purple">{w.titre}</h3>
                  <p className="text-gray-400 text-sm">{w.date}</p>
                </div>
                {w.replay
                  ? <button className="btn-outline-purple text-xs px-4 py-2">Voir le replay</button>
                  : <span className="text-gray-300 text-xs">Replay non disponible</span>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ MODAL INSCRIPTION ════ */}
      {modal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

            {/* En-tête modal */}
            <div className="bg-gradient-to-r from-umo-dark to-umo-purple p-6 relative">
              <button
                onClick={fermerModal}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <Video className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-heading font-black text-white text-lg leading-tight">{modal.titre}</h2>
              <div className="flex gap-4 mt-2 text-white/70 text-sm">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {modal.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {modal.heure}</span>
              </div>
            </div>

            {/* Corps modal */}
            <div className="p-6">
              {statut === 'success' ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-3" />
                  <h3 className="font-heading font-black text-umo-purple text-xl mb-2">Inscription confirmée !</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Vous recevrez un lien de connexion par email avant le webinaire.
                  </p>
                  <button onClick={fermerModal} className="btn-primary">Fermer</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-gray-500 text-sm">Remplissez ce formulaire pour vous inscrire à ce webinaire gratuit.</p>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nom complet *</label>
                    <input
                      type="text"
                      required
                      value={form.nom}
                      onChange={e => setForm({ ...form, nom: e.target.value })}
                      placeholder="Aminata Koné"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 outline-none focus:border-umo-purple transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="aminata@exemple.com"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 outline-none focus:border-umo-purple transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Pays *</label>
                    <input
                      type="text"
                      required
                      value={form.pays}
                      onChange={e => setForm({ ...form, pays: e.target.value })}
                      placeholder="Côte d'Ivoire"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 outline-none focus:border-umo-purple transition-colors text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={statut === 'loading'}
                    className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {statut === 'loading' ? 'Inscription en cours...' : 'Confirmer mon inscription →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
