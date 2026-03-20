import Link from 'next/link'
import { ExternalLink, Lock, HelpCircle } from 'lucide-react'

export const metadata = { title: 'Accéder à la plateforme' }

export default function PlatformePage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-gradient-to-br from-odas-dark via-odas-blue to-odas-light">
        <div className="section-container text-center text-white">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">
            Votre espace <span className="text-odas-yellow">formation</span>
          </h1>
          <p className="text-white/75 text-lg max-w-lg mx-auto">
            Accédez à la plateforme Moodle pour suivre vos cours, rendre vos devoirs
            et échanger avec votre groupe.
          </p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#F8F8FF" />
        </svg>
      </section>

      <section className="py-16 bg-odas-bg">
        <div className="section-container max-w-2xl">

          {/* Carte principale */}
          <div className="card text-center p-10 mb-6">
            <div className="w-16 h-16 bg-odas-blue rounded-2xl flex items-center
                            justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-heading font-black text-2xl text-odas-blue mb-3">
              Connexion à Moodle
            </h2>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Utilisez les identifiants reçus par email après validation de votre candidature.
              Si vous n'avez pas reçu vos accès, contactez-nous.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_MOODLE_URL || 'https://learn.umo.centre-odas.org'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Accéder à ma formation <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Aide */}
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-odas-blue" />
              <h3 className="font-heading font-bold text-odas-blue">Besoin d'aide ?</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-500">
              {[
                'Vérifiez vos emails (y compris les spams)',
                'Vos identifiants : votre adresse email + mot de passe provisoire reçu',
                'Problème de connexion ? Utilisez "Mot de passe oublié" sur Moodle',
                'Toujours bloqué ? Écrivez-nous à umo@centre-odas.org',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-odas-yellow font-bold flex-shrink-0">→</span>
                  {tip}
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-odas-soft">
              <Link href="/contact" className="btn-outline-blue text-sm">
                Contacter le support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
