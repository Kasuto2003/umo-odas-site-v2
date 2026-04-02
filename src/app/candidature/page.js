'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.08 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

function GenderDivider() {
  return (
    <div className="overflow-hidden select-none bg-white py-1">
      <Image src="/pictos/picto-20.png" alt="" width={1500} height={60}
        className="w-full object-cover" style={{ height: '32px', objectPosition: 'center' }} unoptimized />
    </div>
  )
}

const steps = [
  { num: '1', label: 'Remplissez', desc: 'le formulaire ci-dessous', color: '#622ed1' },
  { num: '2', label: 'Sélection', desc: 'sous 5 jours ouvrables', color: '#34b7ad' },
  { num: '3', label: 'Accès', desc: 'à votre espace formation', color: '#ecc92f', dark: true },
]

export default function CandidaturePage() {
  const [visible, setVisible] = useState(false)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    pays: '', organisation: '', comment: '', motivation: '',
  })

  const [stepsRef, stepsInView] = useInView()
  const [formRef, formInView] = useInView()

  useEffect(() => { setTimeout(() => setVisible(true), 80) }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const e = {}
    if (!formData.prenom.trim()) e.prenom = 'Le prénom est requis'
    if (!formData.nom.trim()) e.nom = 'Le nom est requis'
    if (!formData.email.includes('@')) e.email = 'Email invalide'
    if (!formData.pays.trim()) e.pays = 'Le pays est requis'
    if (formData.motivation.length < 50) e.motivation = 'Minimum 50 caractères'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setStatus('loading')
    try {
      const res = await fetch('/api/candidature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  /* ── Succès ── */
  if (status === 'success') return (
    <div className="min-h-screen bg-white flex items-center pt-16">
      <div className="section-container text-center py-20">
        <div className="absolute top-32 left-10 opacity-30 pointer-events-none">
          <Image src="/pictos/picto-04.png" alt="" width={80} height={80} className="object-contain animate-float" />
        </div>
        <div className="absolute top-40 right-10 opacity-30 pointer-events-none">
          <Image src="/pictos/picto-07.png" alt="" width={70} height={70} className="object-contain animate-float-slow" />
        </div>
        <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ background: 'rgba(52,183,173,0.12)' }}>
          <CheckCircle className="w-12 h-12" style={{ color: '#34b7ad' }} />
        </div>
        <h1 className="font-heading font-black mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#622ed1' }}>
          Candidature envoyée !
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-2 max-w-md mx-auto">
          Merci <strong style={{ color: '#622ed1' }}>{formData.prenom}</strong> ! Votre candidature a bien été reçue.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          L&apos;équipe ODAS vous contactera par email dans les <strong>5 jours ouvrables</strong>.
        </p>
        <Link href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-bold text-sm transition-all duration-300 hover:-translate-y-1"
          style={{ background: '#ecc92f', color: '#321b45', boxShadow: '0 6px 20px rgba(236,201,47,.35)' }}>
          Retour à l&apos;accueil <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-white pt-24 pb-8 overflow-hidden">
        {/* Forme violette arc haut gauche */}
        <div className="absolute top-0 left-0 w-52 h-52 opacity-90 pointer-events-none"
          style={{ borderRadius: '0 0 100% 0', background: '#622ed1', transform: 'translate(-40%,-20%)' }} />
        {/* Feuilles teal gauche */}
        <div className="absolute left-0 top-32 opacity-70 pointer-events-none">
          <svg width="90" height="140" viewBox="0 0 90 140">
            <ellipse cx="45" cy="70" rx="38" ry="64" fill="#34b7ad" transform="rotate(-15 45 70)" />
            <ellipse cx="28" cy="105" rx="22" ry="40" fill="#34b7ad" transform="rotate(10 28 105)" opacity=".7" />
          </svg>
        </div>
        {/* Personnage droite flottant */}
        <div className={`absolute right-6 bottom-0 pointer-events-none transition-all duration-1000 delay-200 ${visible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ width: '150px' }}>
          <Image src="/pictos/picto-02.png" alt="" width={150} height={190} className="object-contain"
            style={{ filter: 'drop-shadow(0 10px 24px rgba(98,46,209,0.25))', animation: visible ? 'float 6s ease-in-out infinite' : 'none' }} />
        </div>
        {/* Feuilles jaunes */}
        <div className="absolute right-36 top-16 opacity-75 pointer-events-none"
          style={{ animation: visible ? 'float 8s ease-in-out infinite 1s' : 'none' }}>
          <Image src="/pictos/picto-07.png" alt="" width={72} height={72} className="object-contain" />
        </div>
        {/* Fleur teal */}
        <div className="absolute right-2 top-4 opacity-75 pointer-events-none"
          style={{ animation: visible ? 'float 5s ease-in-out infinite 2s' : 'none' }}>
          <Image src="/pictos/picto-04.png" alt="" width={85} height={85} className="object-contain" />
        </div>
        {/* ♀ droite */}
        <div className="absolute right-0 top-10 opacity-60 pointer-events-none">
          <span style={{ fontSize: '100px', color: '#321b45', lineHeight: 1 }}>♀</span>
        </div>
        {/* Étoile déco */}
        <div className="absolute left-24 bottom-4 opacity-40 pointer-events-none">
          <div style={{ width: '34px', height: '34px', background: '#ecc92f', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
        </div>

        <div className={`section-container text-center relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-5 text-xs font-heading font-bold tracking-widest uppercase"
            style={{ background: 'rgba(213,179,253,0.3)', color: '#622ed1' }}>
            ✦ Candidature ouverte
          </div>
          <h1 className="font-heading font-black leading-tight mb-4">
            <span style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#622ed1', display: 'block' }}>Rejoignez</span>
            <span style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#ecc92f', display: 'block' }}>l&apos;UMO ODAS</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Remplissez ce formulaire pour postuler à la Cohorte 4 (2025).
            Places limitées — candidatures jusqu&apos;à épuisement.
          </p>
        </div>
      </section>

      <GenderDivider />

      {/* ══ ÉTAPES ══ */}
      <section className="bg-white py-12">
        <div ref={stepsRef} className="section-container">
          <h2 className={`font-heading font-black text-center mb-10 transition-all duration-700 ${stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#622ed1' }}>
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto relative">
            {/* Ligne pointillée entre étapes */}
            <div className="hidden sm:block absolute top-8 left-1/3 right-1/3 h-0.5 pointer-events-none"
              style={{ borderTop: '2.5px dashed rgba(98,46,209,0.2)', zIndex: 0 }} />

            {steps.map((s, i) => (
              <div key={i}
                className={`text-center transition-all duration-700 ${stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-black text-2xl relative z-10"
                  style={{
                    background: s.color,
                    color: s.dark ? '#321b45' : 'white',
                    boxShadow: `0 6px 16px ${s.color}40`
                  }}>
                  {s.num}
                </div>
                <h3 className="font-heading font-black text-base mb-1" style={{ color: s.color }}>{s.label}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ══ FORMULAIRE ══ */}
      <section className="bg-white py-14 relative overflow-hidden">
        {/* Décos flottantes */}
        <div className="absolute left-4 top-1/4 opacity-50 pointer-events-none">
          <Image src="/pictos/picto-04.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="absolute right-4 bottom-1/4 opacity-50 pointer-events-none">
          <Image src="/pictos/picto-05.png" alt="" width={55} height={55} className="object-contain" />
        </div>

        <div ref={formRef} className="section-container">
          <div className={`max-w-2xl mx-auto transition-all duration-700 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit}
              className="rounded-3xl p-8 md:p-10 shadow-sm"
              style={{ border: '2px solid rgba(98,46,209,0.1)', background: 'white' }}>

              {/* ── Infos personnelles ── */}
              <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: '2px solid rgba(98,46,209,0.1)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#622ed1' }}>
                  <span className="text-white font-heading font-black text-sm">1</span>
                </div>
                <h2 className="font-heading font-bold text-lg" style={{ color: '#321b45' }}>
                  Informations personnelles
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="form-label">Prénom *</label>
                  <input name="prenom" value={formData.prenom} onChange={handleChange}
                    className={`form-input ${errors.prenom ? 'border-red-400' : ''}`}
                    placeholder="Votre prénom" />
                  {errors.prenom && <p className="text-red-400 text-xs mt-1">{errors.prenom}</p>}
                </div>
                <div>
                  <label className="form-label">Nom *</label>
                  <input name="nom" value={formData.nom} onChange={handleChange}
                    className={`form-input ${errors.nom ? 'border-red-400' : ''}`}
                    placeholder="Votre nom" />
                  {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="form-label">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                    placeholder="votre@email.com" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="form-label">Téléphone (WhatsApp)</label>
                  <input name="telephone" value={formData.telephone} onChange={handleChange}
                    className="form-input" placeholder="+225 07 00 00 00 00" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                <div>
                  <label className="form-label">Pays de résidence *</label>
                  <input name="pays" value={formData.pays} onChange={handleChange}
                    className={`form-input ${errors.pays ? 'border-red-400' : ''}`}
                    placeholder="Ex : Côte d'Ivoire" />
                  {errors.pays && <p className="text-red-400 text-xs mt-1">{errors.pays}</p>}
                </div>
                <div>
                  <label className="form-label">Organisation / Structure</label>
                  <input name="organisation" value={formData.organisation} onChange={handleChange}
                    className="form-input" placeholder="Ex : Association X" />
                </div>
              </div>

              {/* ── Motivation ── */}
              <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: '2px solid rgba(52,183,173,0.15)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#34b7ad' }}>
                  <span className="text-white font-heading font-black text-sm">2</span>
                </div>
                <h2 className="font-heading font-bold text-lg" style={{ color: '#321b45' }}>
                  Votre motivation
                </h2>
              </div>

              <div className="mb-5">
                <label className="form-label">
                  Pourquoi souhaitez-vous rejoindre l&apos;UMO ODAS ? * <span className="text-gray-400 font-normal">(min. 50 caractères)</span>
                </label>
                <textarea name="motivation" value={formData.motivation} onChange={handleChange}
                  rows={5} className={`form-input resize-none ${errors.motivation ? 'border-red-400' : ''}`}
                  placeholder="Décrivez votre parcours militant, vos motivations et ce que vous espérez apprendre…" />
                <div className="flex justify-between mt-1">
                  {errors.motivation
                    ? <p className="text-red-400 text-xs">{errors.motivation}</p>
                    : <span />
                  }
                  <span className={`text-xs transition-colors ${formData.motivation.length >= 50 ? 'text-green-500' : 'text-gray-300'}`}>
                    {formData.motivation.length} / 50 min
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <label className="form-label">Comment avez-vous entendu parler de nous ?</label>
                <select name="comment" value={formData.comment} onChange={handleChange} className="form-input">
                  <option value="">Sélectionnez une option</option>
                  <option value="reseaux">Réseaux sociaux (Facebook, Instagram…)</option>
                  <option value="bouche">Bouche à oreille</option>
                  <option value="organisation">Via mon organisation</option>
                  <option value="email">Newsletter / Email</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Erreur générale */}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-2xl mb-6"
                  style={{ background: 'rgba(192,57,43,0.08)', border: '2px solid rgba(192,57,43,0.2)' }}>
                  <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#c0392b' }} />
                  <p className="text-sm" style={{ color: '#c0392b' }}>
                    Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                  </p>
                </div>
              )}

              {/* Bouton submit */}
              <button type="submit" disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-heading font-bold text-base transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: '#622ed1', color: 'white', boxShadow: '0 6px 24px rgba(98,46,209,.35)' }}>
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>Envoyer ma candidature <Send className="w-4 h-4" /></>
                )}
              </button>

              <p className="text-center text-gray-400 text-xs mt-4">
                Vos données sont confidentielles et ne seront utilisées que dans le cadre du processus de sélection.
              </p>
            </form>
          </div>
        </div>
      </section>

      <GenderDivider />

      {/* ══ BANDE PHOTOS ══ */}
      <div className="bg-white py-5" style={{ borderTop: '1px solid #f5f5f5', borderBottom: '1px solid #f5f5f5' }}>
        <div className="flex items-center justify-center gap-5 flex-wrap px-6">
          <svg width="34" height="34" viewBox="0 0 34 34">
            <circle cx="17" cy="5" r="5" fill="#ecc92f" /><circle cx="29" cy="17" r="5" fill="#ecc92f" />
            <circle cx="17" cy="29" r="5" fill="#ecc92f" /><circle cx="5" cy="17" r="5" fill="#ecc92f" />
            <circle cx="17" cy="17" r="4" fill="#ecc92f" />
          </svg>
          <span style={{ color: '#34b7ad', fontSize: '26px', fontWeight: 'bold' }}>♀</span>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(98,46,209,.2)', flexShrink: 0 }}>
            <Image src="/hero-man.jpg" alt="" width={44} height={44} className="w-full h-full object-cover object-top" />
          </div>
          <div style={{ width: '32px', height: '32px', background: '#622ed1', flexShrink: 0, clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
          <div style={{ width: '52px', height: '52px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(98,46,209,.2)', flexShrink: 0 }}>
            <Image src="/hero-woman.jpg" alt="" width={52} height={52} className="w-full h-full object-cover object-top" />
          </div>
          <span style={{ color: '#321b45', fontSize: '20px' }}>◑</span>
          <svg width="20" height="26" viewBox="0 0 20 26">
            <ellipse cx="10" cy="13" rx="8" ry="12" fill="#ecc92f" transform="rotate(-10 10 13)" />
          </svg>
          <span style={{ color: '#321b45', fontSize: '20px', fontWeight: '900' }}>✊</span>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(52,183,173,.4)', flexShrink: 0 }}>
            <Image src="/hero-man.jpg" alt="" width={44} height={44} className="w-full h-full object-cover" />
          </div>
          <span style={{ color: '#34b7ad', fontSize: '26px', fontWeight: 'bold' }}>♀</span>
        </div>
      </div>
    </>
  )
}
