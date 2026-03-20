'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Globe, BookOpen, Award } from 'lucide-react'

// ─── Statistiques affichées dans le hero ─────────────────────────────────
const stats = [
  { number: '200+', label: 'Participant·es formé·es',  icon: Users },
  { number: '8',    label: 'Pays représentés',          icon: Globe },
  { number: '3',    label: 'Cohortes réussies',         icon: BookOpen },
  { number: '100%', label: 'En ligne',                  icon: Award },
]

// ─── Infos de la prochaine cohorte ───────────────────────────────────────
const cohortInfo = [
  { icon: '🎓', label: 'Formation',   value: '8 modules' },
  { icon: '👥', label: 'Coaching',    value: 'Groupes de 10' },
  { icon: '📅', label: 'Durée',       value: '3 mois' },
  { icon: '🌍', label: 'Langue',      value: 'Français' },
]

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  // Déclenche l'animation d'entrée après le chargement
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden
                        bg-gradient-to-br from-odas-dark via-odas-blue to-odas-light">

      {/* ── Décors de fond ── */}
      {/* Cercle décoratif haut droite */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px]
                      rounded-full bg-white/[0.03] pointer-events-none" />
      {/* Cercle jaune bas gauche */}
      <div className="absolute bottom-[-80px] left-[30%] w-[300px] h-[300px]
                      rounded-full bg-odas-yellow/[0.06] pointer-events-none" />

      {/* ── Pattern de feuilles ODAS (SVG décoratif) ── */}
      <div className="absolute right-0 top-0 w-[40%] h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 700" className="w-full h-full">
          {[0,1,2,3,4,5,6,7,8,9].map((i) => (
            <ellipse
              key={i}
              cx={80 + (i % 3) * 120}
              cy={80 + Math.floor(i / 3) * 160}
              rx={16} ry={40}
              transform={`rotate(${-35 + i * 15} ${80 + (i%3)*120} ${80 + Math.floor(i/3)*160})`}
              fill="white"
            />
          ))}
        </svg>
      </div>

      {/* ── Contenu principal ── */}
      <div className="section-container w-full py-28 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── COLONNE GAUCHE : texte ── */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge cohorte */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-white/15 border border-white/25 text-white text-xs
                            font-heading font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-odas-yellow animate-pulse-slow" />
              Cohorte 4 — 2025 · Inscriptions ouvertes
            </div>

            {/* Titre principal */}
            <h1 className="font-heading font-black text-white leading-[1.05] mb-6
                           text-4xl sm:text-5xl lg:text-6xl">
              Université<br />
              <span className="text-odas-yellow">Militante</span><br />
              ODAS
            </h1>

            {/* Sous-titre */}
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Un programme de renforcement de capacités <strong className="text-white">100% en ligne</strong>.
              Apprendre, échanger et agir ensemble pour l'avortement sécurisé en Afrique.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/candidature" className="btn-yellow">
                Postuler maintenant <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/programme" className="btn-outline-white">
                Découvrir le programme
              </Link>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="font-heading font-black text-2xl text-odas-yellow">
                    {stat.number}
                  </div>
                  <div className="text-white/55 text-xs font-body mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── COLONNE DROITE : carte cohorte ── */}
          <div
            className={`transition-all duration-700 delay-300 animate-float ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8
                            border border-white/20 shadow-2xl shadow-odas-dark/30">

              {/* En-tête de la carte */}
              <div className="mb-6">
                <p className="text-white/50 text-[11px] font-heading font-bold
                               tracking-widest uppercase mb-1">
                  Prochaine cohorte
                </p>
                <h3 className="font-heading font-black text-2xl text-white">
                  Cohorte 4 — 2025
                </h3>
              </div>

              {/* Détails de la cohorte */}
              <div className="space-y-1 mb-6">
                {cohortInfo.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-3
                               border-b border-white/10 last:border-0
                               transition-all duration-500 ${
                                 visible ? 'opacity-100' : 'opacity-0'
                               }`}
                    style={{ transitionDelay: `${500 + i * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-white/65 text-sm font-body">{item.label}</span>
                    </div>
                    <span className="text-odas-yellow font-heading font-bold text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bouton dans la carte */}
              <Link href="/candidature" className="btn-yellow w-full">
                Soumettre ma candidature <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Vague de transition vers la section suivante ── */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none"
             className="w-full h-14 md:h-16 block">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
                fill="#F8F8FF" />
        </svg>
      </div>
    </section>
  )
}
