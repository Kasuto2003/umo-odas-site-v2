'use client'
import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

// ─── Statuts disponibles ──────────────────────────────────────────────────
const STATUTS = {
  en_attente: { label: '⏳ En attente', bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
  acceptee:   { label: '✅ Acceptée',   bg: 'bg-green-100',  text: 'text-green-800',  border: 'border-green-300'  },
  refusee:    { label: '❌ Refusée',    bg: 'bg-red-100',    text: 'text-red-800',    border: 'border-red-300'    },
  en_cours:   { label: '🔄 En cours',   bg: 'bg-blue-100',   text: 'text-blue-800',   border: 'border-blue-300'   },
}

const ADMIN_PASSWORD = 'odas2025'

export default function AdminPage() {
  const [auth, setAuth]                 = useState(false)
  const [password, setPassword]         = useState('')
  const [errPass, setErrPass]           = useState(false)
  const [candidatures, setCandidatures] = useState([])
  const [loading, setLoading]           = useState(false)
  const [selected, setSelected]         = useState(null)
  const [filtre, setFiltre]             = useState('tous')
  const [recherche, setRecherche]       = useState('')
  const [updating, setUpdating]         = useState(false)
  const [supabase, setSupabase]         = useState(null)

  // ── Initialiser Supabase côté client uniquement ───────────────────────
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (url && key) {
      setSupabase(createClient(url, key))
    }
  }, [])

  // ── Login ─────────────────────────────────────────────────────────────
  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) { setAuth(true); setErrPass(false) }
    else setErrPass(true)
  }

  // ── Charger les candidatures ──────────────────────────────────────────
  const fetchCandidatures = useCallback(async () => {
    if (!supabase) return
    setLoading(true)
    const { data, error } = await supabase
      .from('candidatures')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error) setCandidatures(data || [])
    setLoading(false)
  }, [supabase])

  useEffect(() => { if (auth && supabase) fetchCandidatures() }, [auth, supabase, fetchCandidatures])

  // ── Changer le statut ─────────────────────────────────────────────────
  const changerStatut = async (id, nouveauStatut) => {
    if (!supabase) return
    setUpdating(true)
    await supabase.from('candidatures').update({ statut: nouveauStatut }).eq('id', id)
    await fetchCandidatures()
    if (selected?.id === id) setSelected(prev => ({ ...prev, statut: nouveauStatut }))
    setUpdating(false)
  }

  // ── Filtres ───────────────────────────────────────────────────────────
  const candidaturesFiltrees = candidatures.filter(c => {
    const matchFiltre    = filtre === 'tous' || c.statut === filtre
    const matchRecherche = recherche === '' ||
      `${c.prenom} ${c.nom} ${c.email} ${c.pays} ${c.organisation}`.toLowerCase().includes(recherche.toLowerCase())
    return matchFiltre && matchRecherche
  })

  // ── Stats ─────────────────────────────────────────────────────────────
  const stats = {
    total:      candidatures.length,
    en_attente: candidatures.filter(c => c.statut === 'en_attente').length,
    acceptee:   candidatures.filter(c => c.statut === 'acceptee').length,
    refusee:    candidatures.filter(c => c.statut === 'refusee').length,
  }

  // ════════════════════════════════════════════════════════════════════════
  // PAGE LOGIN
  // ════════════════════════════════════════════════════════════════════════
  if (!auth) return (
    <div className="min-h-screen bg-gradient-to-br from-odas-dark via-odas-blue to-odas-light flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🔐</div>
          <h1 className="font-heading font-black text-2xl text-odas-blue">Espace Admin</h1>
          <p className="text-gray-400 text-sm mt-1">Université Militante ODAS</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={`w-full border-2 rounded-xl px-4 py-3 outline-none focus:border-odas-blue transition-colors ${errPass ? 'border-red-400' : 'border-gray-200'}`}
          />
          {errPass && <p className="text-red-500 text-sm">Mot de passe incorrect</p>}
          <button type="submit" className="w-full btn-primary">Se connecter</button>
        </form>
      </div>
    </div>
  )

  // ════════════════════════════════════════════════════════════════════════
  // TABLEAU DE BORD
  // ════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-odas-bg">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-odas-dark to-odas-blue px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-heading font-black text-white text-xl">🎓 Admin UMO ODAS</h1>
          <p className="text-white/60 text-xs">Gestion des candidatures</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all">
            🏠 Accueil
          </a>
          <button onClick={() => setAuth(false)} className="text-white/60 hover:text-white text-sm transition-colors">
            Déconnexion →
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {[
          { label: 'Total',      value: stats.total,      color: 'text-odas-blue',   bg: 'bg-white'      },
          { label: 'En attente', value: stats.en_attente, color: 'text-yellow-600',  bg: 'bg-yellow-50'  },
          { label: 'Acceptées',  value: stats.acceptee,   color: 'text-green-600',   bg: 'bg-green-50'   },
          { label: 'Refusées',   value: stats.refusee,    color: 'text-red-600',     bg: 'bg-red-50'     },
        ].map((s, i) => (
          <div key={i} className={`${s.bg} rounded-2xl p-5 shadow-sm border border-white`}>
            <div className={`font-heading font-black text-3xl ${s.color}`}>{s.value}</div>
            <div className="text-gray-500 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* FILTRES */}
      <div className="px-6 mb-4 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="🔍 Rechercher par nom, email, pays..."
          value={recherche}
          onChange={e => setRecherche(e.target.value)}
          className="flex-1 border-2 border-white bg-white rounded-xl px-4 py-2.5 outline-none focus:border-odas-blue transition-colors text-sm"
        />
        <div className="flex gap-2 flex-wrap">
          {[
            { key: 'tous',      label: 'Tous'         },
            { key: 'en_attente',label: '⏳ Attente'   },
            { key: 'acceptee',  label: '✅ Acceptées' },
            { key: 'refusee',   label: '❌ Refusées'  },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFiltre(f.key)}
              className={`px-4 py-2 rounded-xl text-sm font-heading font-semibold transition-all ${
                filtre === f.key
                  ? 'bg-odas-blue text-white shadow'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* LISTE + DÉTAIL */}
      <div className={`px-6 pb-10 flex gap-6 ${selected ? 'flex-col lg:flex-row' : ''}`}>

        {/* Liste */}
        <div className={selected ? 'lg:w-1/2' : 'w-full'}>
          {loading ? (
            <div className="text-center py-20 text-gray-400">Chargement...</div>
          ) : candidaturesFiltrees.length === 0 ? (
            <div className="text-center py-20 text-gray-400 bg-white rounded-2xl">
              <div className="text-4xl mb-3">📭</div>
              <p>Aucune candidature trouvée</p>
            </div>
          ) : (
            <div className="space-y-3">
              {candidaturesFiltrees.map(c => {
                const s = STATUTS[c.statut] || STATUTS.en_attente
                return (
                  <div
                    key={c.id}
                    onClick={() => setSelected(c)}
                    className={`bg-white rounded-2xl p-4 shadow-sm border-2 cursor-pointer transition-all hover:shadow-md ${
                      selected?.id === c.id ? 'border-odas-blue' : 'border-white hover:border-odas-blue/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-heading font-bold text-odas-blue truncate">{c.prenom} {c.nom}</p>
                        <p className="text-gray-500 text-sm truncate">{c.email}</p>
                        <p className="text-gray-400 text-xs mt-1">🌍 {c.pays}{c.organisation ? ` · ${c.organisation}` : ''}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${s.bg} ${s.text} ${s.border} whitespace-nowrap`}>
                          {s.label}
                        </span>
                        <span className="text-gray-300 text-xs">
                          {new Date(c.created_at).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Détail */}
        {selected && (
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-sm border-2 border-odas-blue/20 sticky top-4">
              <div className="bg-gradient-to-r from-odas-dark to-odas-blue p-5 rounded-t-2xl flex items-start justify-between">
                <div>
                  <h2 className="font-heading font-black text-white text-lg">{selected.prenom} {selected.nom}</h2>
                  <p className="text-white/70 text-sm">{selected.email}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-white/60 hover:text-white text-xl leading-none">✕</button>
              </div>
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    ['Pays',         selected.pays],
                    ['Téléphone',    selected.telephone || 'N/A'],
                    ['Organisation', selected.organisation || 'N/A'],
                    ['Source',       selected.comment || 'N/A'],
                    ['Reçue le',     new Date(selected.created_at).toLocaleDateString('fr-FR')],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-gray-400 text-xs">{label}</p>
                      <p className="font-semibold text-gray-700 text-sm">{value}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-odas-blue font-bold text-xs uppercase mb-2">Lettre de motivation</p>
                  <div className="bg-odas-bg rounded-xl p-4 text-sm text-gray-600 leading-relaxed max-h-40 overflow-y-auto">
                    {selected.motivation}
                  </div>
                </div>
                <div>
                  <p className="text-odas-blue font-bold text-xs uppercase mb-3">Changer le statut</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(STATUTS).map(([key, val]) => (
                      <button
                        key={key}
                        disabled={updating || selected.statut === key}
                        onClick={() => changerStatut(selected.id, key)}
                        className={`py-2.5 px-3 rounded-xl text-sm font-semibold border-2 transition-all ${
                          selected.statut === key
                            ? `${val.bg} ${val.text} ${val.border} cursor-default`
                            : 'border-gray-200 text-gray-500 hover:border-odas-blue hover:text-odas-blue'
                        } disabled:opacity-50`}
                      >
                        {val.label}
                      </button>
                    ))}
                  </div>
                </div>
                <a
                  href={`mailto:${selected.email}?subject=Votre candidature UMO ODAS`}
                  className="block w-full text-center btn-primary text-sm py-3"
                >
                  ✉️ Envoyer un email à {selected.prenom}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
