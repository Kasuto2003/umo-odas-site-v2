'use client'
import { useState } from 'react'
import { FileText, Download, BookOpen } from 'lucide-react'

const ressources = [
  { titre: 'Protocole de Maputo — Texte complet', type: 'PDF', categorie: 'Textes officiels',
    desc: 'Protocole à la Charte africaine des droits de l\'Homme et des Peuples relatif aux droits des femmes.',
    lien: 'https://au.int/sites/default/files/treaties/37077-treaty-0011_-_protocol_to_the_african_charter_on_human_and_peoples_rights_on_the_rights_of_women_in_africa_f.pdf' },
  { titre: 'Cadre juridique par pays — Afrique francophone', type: 'PDF', categorie: 'Textes officiels',
    desc: 'Panorama des législations sur l\'avortement dans 15 pays d\'Afrique francophone.',
    lien: '#' },
  { titre: 'Guide du plaidoyer pour l\'avortement sécurisé', type: 'PDF', categorie: 'Guides pratiques',
    desc: 'Méthodes, outils et stratégies pour conduire un plaidoyer efficace.',
    lien: '#' },
  { titre: 'Manuel de communication militante', type: 'PDF', categorie: 'Guides pratiques',
    desc: 'Techniques de narration, gestion des réseaux sociaux et relations médias.',
    lien: '#' },
  { titre: 'Données sur la santé reproductive en Afrique — OMS 2024', type: 'Rapport', categorie: 'Données & Recherche',
    desc: 'Statistiques et analyses sur la santé maternelle et l\'avortement à risque.',
    lien: 'https://www.who.int/fr/publications' },
]

const categories = ['Tous', 'Textes officiels', 'Guides pratiques', 'Données & Recherche']

export default function RessourcesPage() {
  const [filtre, setFiltre] = useState('Tous')

  const ressourcesFiltrees = filtre === 'Tous'
    ? ressources
    : ressources.filter(r => r.categorie === filtre)

  return (
    <>
      <section className="pt-28 pb-12 bg-gradient-to-br from-odas-dark via-odas-blue to-odas-light">
        <div className="section-container text-center text-white">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">
            Ressources <span className="text-odas-yellow">publiques</span>
          </h1>
          <p className="text-white/75 text-lg">Documents, guides et données en libre accès.</p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#F8F8FF" />
        </svg>
      </section>

      <section className="py-16 bg-odas-bg">
        <div className="section-container">

          {/* Filtres interactifs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltre(cat)}
                className={`px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-200 ${
                  filtre === cat
                    ? 'bg-odas-blue text-white shadow-md'
                    : 'bg-white text-odas-blue border-2 border-odas-soft hover:border-odas-blue'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Nombre de résultats */}
          <p className="text-gray-400 text-sm mb-6">
            {ressourcesFiltrees.length} ressource{ressourcesFiltrees.length > 1 ? 's' : ''} trouvée{ressourcesFiltrees.length > 1 ? 's' : ''}
          </p>

          {/* Liste ressources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ressourcesFiltrees.map((r, i) => (
              <div key={i} className="card group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-odas-soft rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-odas-blue transition-colors duration-300">
                    <FileText className="w-5 h-5 text-odas-blue group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-heading font-bold text-odas-teal uppercase tracking-wider">{r.categorie}</span>
                    <h3 className="font-heading font-bold text-odas-blue mt-0.5 mb-2">{r.titre}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{r.desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="badge bg-gray-100 text-gray-500">{r.type}</span>
                      {r.lien !== '#' ? (
                        <a
                          href={r.lien}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-odas-blue text-sm font-heading font-semibold hover:text-odas-dark transition-colors"
                        >
                          <Download className="w-4 h-4" /> Télécharger
                        </a>
                      ) : (
                        <span className="flex items-center gap-1 text-gray-300 text-sm font-heading font-semibold cursor-not-allowed">
                          <Download className="w-4 h-4" /> Bientôt disponible
                        </span>
                      )}
                    </div>
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
