'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ExternalLink, Lock, HelpCircle, User, ArrowRight } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export default function PlatformePage() {
  const { login } = useAuth()
  const router = useRouter()
  const [tab, setTab] = useState('moodle') // 'moodle' | 'demo'
  const [form, setForm] = useState({ prenom: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleDemoLogin = async (e) => {
    e.preventDefault()
    if (!form.prenom.trim()) { setError('Votre prénom est requis.'); return }
    if (!form.email.includes('@')) { setError('Email invalide.'); return }
    setError('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 600))
    login({ prenom: form.prenom.trim(), email: form.email.trim() })
    setLoading(false)
    router.push('/mes-cours')
  }

  return (
    <>
      <section className="pt-28 pb-12" style={{ background: 'linear-gradient(135deg, #321b45 0%, #622ed1 60%, #9963db 100%)' }}>
        <div className="section-container text-center text-white">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">
            Votre espace <span style={{ color: '#ecc92f' }}>formation</span>
          </h1>
          <p className="text-white/75 text-lg max-w-lg mx-auto">
            Accédez à la plateforme pour suivre vos cours, rendre vos devoirs et échanger avec votre groupe.
          </p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="white" />
        </svg>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container max-w-2xl">

          {/* Tabs */}
          <div className="flex rounded-2xl overflow-hidden border-2 border-gray-100 mb-8">
            <button
              onClick={() => setTab('moodle')}
              className={`flex-1 py-3 text-sm font-heading font-bold transition-all duration-200
                ${tab === 'moodle' ? 'bg-umo-purple text-white' : 'bg-white text-gray-500 hover:text-umo-purple'}`}>
              Accès Moodle
            </button>
            <button
              onClick={() => setTab('demo')}
              className={`flex-1 py-3 text-sm font-heading font-bold transition-all duration-200
                ${tab === 'demo' ? 'bg-umo-purple text-white' : 'bg-white text-gray-500 hover:text-umo-purple'}`}>
              Connexion démo
            </button>
          </div>

          {tab === 'moodle' && (
            <>
              {/* Carte Moodle */}
              <div className="bg-white rounded-3xl p-10 mb-6 text-center shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-umo-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-heading font-black text-2xl text-umo-purple mb-3">
                  Connexion à Moodle
                </h2>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                  Utilisez les identifiants reçus par email après validation de votre candidature.
                  Si vous n&apos;avez pas reçu vos accès, contactez-nous.
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_MOODLE_URL || 'https://learn.umo.centre-odas.org'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary">
                  Accéder à ma formation <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Aide */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-5 h-5 text-umo-purple" />
                  <h3 className="font-heading font-bold text-umo-purple">Besoin d&apos;aide ?</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-500">
                  {[
                    'Vérifiez vos emails (y compris les spams)',
                    'Vos identifiants : votre adresse email + mot de passe provisoire reçu',
                    'Problème de connexion ? Utilisez "Mot de passe oublié" sur Moodle',
                    'Toujours bloqué ? Écrivez-nous à umo@centre-odas.org',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-umo-yellow font-bold flex-shrink-0">→</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-umo-purple text-umo-purple font-heading font-bold text-sm hover:bg-umo-purple hover:text-white transition-all duration-200">
                    Contacter le support
                  </Link>
                </div>
              </div>
            </>
          )}

          {tab === 'demo' && (
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-umo-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-umo-purple" />
              </div>
              <h2 className="font-heading font-black text-2xl text-umo-purple text-center mb-2">
                Connexion démo
              </h2>
              <p className="text-gray-400 text-sm text-center mb-7 leading-relaxed">
                Simulez une connexion pour explorer l&apos;espace membre (aucun vrai compte requis).
              </p>

              <form onSubmit={handleDemoLogin} className="space-y-5">
                <div>
                  <label className="form-label">Votre prénom *</label>
                  <input
                    value={form.prenom}
                    onChange={e => setForm({ ...form, prenom: e.target.value })}
                    placeholder="Ex : Aminatou"
                    className="form-input" />
                </div>
                <div>
                  <label className="form-label">Votre email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="votre@email.com"
                    className="form-input" />
                </div>

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-2">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Connexion...
                    </>
                  ) : (
                    <>Accéder à mes cours <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
