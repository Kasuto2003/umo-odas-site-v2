'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function CandidaturePage() {
  const [status,  setStatus]  = useState('idle') // idle | loading | success | error
  const [errors,  setErrors]  = useState({})
  const [formData, setFormData] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    pays: '', organisation: '', comment: '', motivation: '',
  })

  // ── Mettre à jour un champ ──────────────────────────────────────────────
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  // ── Valider le formulaire ───────────────────────────────────────────────
  const validate = () => {
    const newErrors = {}
    if (!formData.prenom.trim())       newErrors.prenom       = 'Le prénom est requis'
    if (!formData.nom.trim())          newErrors.nom          = 'Le nom est requis'
    if (!formData.email.includes('@')) newErrors.email        = 'Email invalide'
    if (!formData.pays.trim())         newErrors.pays         = 'Le pays est requis'
    if (formData.motivation.length < 50) newErrors.motivation = 'Minimum 50 caractères'
    return newErrors
  }

  // ── Soumettre le formulaire ─────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/candidature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  // ── Page de succès ──────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="min-h-screen pt-28 pb-16 bg-odas-bg flex items-center">
        <div className="section-container text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center
                            justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="font-heading font-black text-3xl text-odas-blue mb-4">
              Candidature envoyée !
            </h1>
            <p className="text-gray-500 leading-relaxed mb-8">
              Merci {formData.prenom} ! Votre candidature a bien été reçue.
              L'équipe ODAS vous contactera par email dans les <strong>5 jours ouvrables</strong>.
            </p>
            <a href="/" className="btn-primary">Retour à l'accueil</a>
          </div>
        </div>
      </div>
    )
  }

  // ── Formulaire principal ────────────────────────────────────────────────
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-odas-dark via-odas-blue to-odas-light">
        <div className="section-container text-center text-white">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">
            Soumettre ma <span className="text-odas-yellow">candidature</span>
          </h1>
          <p className="text-white/75 text-lg max-w-lg mx-auto">
            Remplissez ce formulaire pour postuler à la Cohorte 4 (2025).
            Tous les champs marqués * sont obligatoires.
          </p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#F8F8FF" />
        </svg>
      </section>

      {/* FORMULAIRE */}
      <section className="py-14 bg-odas-bg">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10
                                                      shadow-sm border border-odas-soft">

              {/* ── Infos personnelles ── */}
              <h2 className="font-heading font-bold text-odas-blue text-xl mb-6
                             pb-3 border-b border-odas-soft">
                Informations personnelles
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Prénom */}
                <div>
                  <label className="form-label">Prénom *</label>
                  <input name="prenom" value={formData.prenom} onChange={handleChange}
                    className={`form-input ${errors.prenom ? 'border-red-400' : ''}`}
                    placeholder="Votre prénom" />
                  {errors.prenom && <p className="text-red-400 text-xs mt-1">{errors.prenom}</p>}
                </div>
                {/* Nom */}
                <div>
                  <label className="form-label">Nom *</label>
                  <input name="nom" value={formData.nom} onChange={handleChange}
                    className={`form-input ${errors.nom ? 'border-red-400' : ''}`}
                    placeholder="Votre nom" />
                  {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Email */}
                <div>
                  <label className="form-label">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                    placeholder="votre@email.com" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                {/* Téléphone */}
                <div>
                  <label className="form-label">Téléphone (WhatsApp)</label>
                  <input name="telephone" value={formData.telephone} onChange={handleChange}
                    className="form-input" placeholder="+225 07 00 00 00 00" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {/* Pays */}
                <div>
                  <label className="form-label">Pays de résidence *</label>
                  <input name="pays" value={formData.pays} onChange={handleChange}
                    className={`form-input ${errors.pays ? 'border-red-400' : ''}`}
                    placeholder="Ex : Côte d'Ivoire" />
                  {errors.pays && <p className="text-red-400 text-xs mt-1">{errors.pays}</p>}
                </div>
                {/* Organisation */}
                <div>
                  <label className="form-label">Organisation / Structure</label>
                  <input name="organisation" value={formData.organisation} onChange={handleChange}
                    className="form-input" placeholder="Ex : Association X" />
                </div>
              </div>

              {/* ── Motivation ── */}
              <h2 className="font-heading font-bold text-odas-blue text-xl mb-6
                             pb-3 border-b border-odas-soft">
                Votre motivation
              </h2>

              <div className="mb-5">
                <label className="form-label">
                  Pourquoi souhaitez-vous rejoindre l'UMO ODAS ? * (min. 50 caractères)
                </label>
                <textarea name="motivation" value={formData.motivation} onChange={handleChange}
                  rows={5}
                  className={`form-input resize-none ${errors.motivation ? 'border-red-400' : ''}`}
                  placeholder="Décrivez votre parcours militant, vos motivations et ce que vous espérez apprendre..." />
                <div className="flex justify-between mt-1">
                  {errors.motivation
                    ? <p className="text-red-400 text-xs">{errors.motivation}</p>
                    : <span />
                  }
                  <span className={`text-xs ${formData.motivation.length < 50 ? 'text-gray-300' : 'text-green-500'}`}>
                    {formData.motivation.length} / 50 min
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <label className="form-label">Comment avez-vous entendu parler de nous ?</label>
                <select name="comment" value={formData.comment} onChange={handleChange}
                  className="form-input">
                  <option value="">Sélectionnez une option</option>
                  <option value="reseaux">Réseaux sociaux (Facebook, Instagram...)</option>
                  <option value="bouche">Bouche à oreille</option>
                  <option value="organisation">Via mon organisation</option>
                  <option value="email">Newsletter / Email</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* ── Erreur générale ── */}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 rounded-xl
                                border border-red-200 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-600 text-sm">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                  </p>
                </div>
              )}

              {/* ── Bouton submit ── */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white
                                     rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma candidature <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-gray-400 text-xs mt-4">
                Vos données sont confidentielles et ne seront utilisées que dans le cadre
                du processus de sélection.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
