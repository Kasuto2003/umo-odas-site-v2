'use client'
import { useState } from 'react'
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setSent(true)
  }

  if (sent) return (
    <div className="min-h-screen pt-28 bg-odas-bg flex items-center">
      <div className="section-container text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="font-heading font-black text-3xl text-odas-blue mb-3">Message envoyé !</h1>
        <p className="text-gray-500 mb-6">Nous vous répondrons dans les 48 heures.</p>
        <a href="/" className="btn-primary">Retour à l'accueil</a>
      </div>
    </div>
  )

  return (
    <>
      <section className="pt-28 pb-12 bg-gradient-to-br from-odas-dark via-odas-blue to-odas-light">
        <div className="section-container text-center text-white">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">
            Nous <span className="text-odas-yellow">contacter</span>
          </h1>
          <p className="text-white/75 text-lg">Une question ? Écrivez-nous, nous répondons sous 48h.</p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#F8F8FF" />
        </svg>
      </section>

      <section className="py-16 bg-odas-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">

            {/* Infos contact */}
            <div className="space-y-4">
              {[
                { icon: Mail,    label: 'Email',         val: 'umo@centre-odas.org' },
                { icon: MapPin,  label: 'Localisation',  val: 'Abidjan, Côte d\'Ivoire' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="card p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-odas-soft rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-odas-blue" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-heading">{item.label}</div>
                      <div className="font-heading font-semibold text-odas-blue text-sm">{item.val}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Nom</label>
                    <input className="form-input" placeholder="Votre nom"
                      value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} required />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="votre@email.com"
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                  </div>
                </div>
                <div>
                  <label className="form-label">Sujet</label>
                  <input className="form-input" placeholder="Objet de votre message"
                    value={form.sujet} onChange={e => setForm({...form, sujet: e.target.value})} required />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea rows={5} className="form-input resize-none"
                    placeholder="Votre message..."
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Envoyer <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
