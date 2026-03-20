import Image from 'next/image'

export const metadata = {
  title: 'Notre Équipe',
  description: 'Découvrez l\'équipe pédagogique et les coachs de l\'Université Militante ODAS.',
}

const equipe = [
  { nom: 'Dr. Ginette Hounkanrin', role: 'Facilitatrice', organisation: 'Pathfinder International', pays: '🇧🇫 Burkina Faso', photo: '/equipe/ginette-hounkanrin.png', categorie: 'facilitation' },
  { nom: 'Mme Cécile Yougbaré', role: 'Facilitatrice', organisation: 'Médecins du Monde', pays: '🇫🇷 France', photo: '/equipe/cecile-yougbare.png', categorie: 'facilitation' },
  { nom: 'Mme Moinsalima Hassane', role: 'Facilitatrice', organisation: 'ANJSR', pays: '🇸🇳 Sénégal', photo: '/equipe/moinsalima-hassane.png', categorie: 'facilitation' },
  { nom: 'Dr. Melchie Ibula Bwanga', role: 'Facilitatrice', organisation: 'AJCAF-AS', pays: '🌍 Afrique', photo: '/equipe/melchie-ibula.png', categorie: 'facilitation' },
  { nom: 'Saskia Hüsken', role: 'Facilitatrice', organisation: 'Rutgers International', pays: '🇳🇱 Pays-Bas', photo: '/equipe/saskia-husken.png', categorie: 'facilitation' },
  { nom: 'Souwaiba Ibrahim', role: 'Facilitatrice', organisation: 'Ligue Nigérienne des Droits des Femmes', pays: '🇳🇪 Niger', photo: '/equipe/souwaiba-ibrahim.png', categorie: 'facilitation' },
  { nom: 'Dr. Béniel Agossou', role: 'Directeur', organisation: 'Le Centre ODAS', pays: '🌍 Afrique', photo: '/equipe/beniel-agossou.png', categorie: 'odas' },
  { nom: 'M. Noël Adanlao', role: 'Coordinateur de programme', organisation: 'Le Centre ODAS', pays: '🌍 Afrique', photo: '/equipe/noel-adanlao.png', categorie: 'odas' },
  { nom: 'Dr. Raqibat Idris', role: 'Éditrice', organisation: 'GFMER', pays: '🌍 Afrique', photo: '/equipe/raqibat-idris.png', categorie: 'edition' },
  { nom: 'Prof. Aldo Campana', role: 'Éditeur', organisation: 'GFMER', pays: '🇨🇭 Suisse', photo: '/equipe/aldo-campana.png', categorie: 'edition' },
]

function MembreCard({ membre }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border-2 border-odas-soft hover:border-odas-blue/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 w-full overflow-hidden bg-odas-soft">
        <Image src={membre.photo} alt={`Photo de ${membre.nom}`} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-odas-blue/80 to-transparent" />
        <div className="absolute bottom-3 left-3 text-sm">{membre.pays}</div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-odas-blue text-base leading-tight mb-1">{membre.nom}</h3>
        <p className="text-odas-teal text-sm font-heading font-semibold mb-1">{membre.role}</p>
        <p className="text-gray-400 text-xs">{membre.organisation}</p>
      </div>
    </div>
  )
}

export default function EquipePage() {
  const facilitateurs = equipe.filter(m => m.categorie === 'facilitation')
  const equipeOdas    = equipe.filter(m => m.categorie === 'odas')
  const editeurs      = equipe.filter(m => m.categorie === 'edition')

  return (
    <>
      <section className="pt-28 pb-12 bg-gradient-to-br from-odas-dark via-odas-blue to-odas-light">
        <div className="section-container text-center text-white">
          <span className="badge bg-white/15 border border-white/25 text-white mb-4">L'équipe</span>
          <h1 className="font-heading font-black text-4xl md:text-5xl leading-tight mb-4">
            Des expert·es au service<br /><span className="text-odas-yellow">de votre formation</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
            Facilitatrices, coordinateurs et éditeurs engagés pour la formation militante sur l&apos;avortement sécurisé en Afrique.
          </p>
        </div>
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#F8F8FF" />
        </svg>
      </section>

      <section className="py-16 bg-odas-bg">
        <div className="section-container">

          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-odas-yellow rounded-full" />
            <h2 className="font-heading font-black text-2xl text-odas-blue">Équipe Centre ODAS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {equipeOdas.map((m, i) => <MembreCard key={i} membre={m} />)}
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-odas-blue rounded-full" />
            <h2 className="font-heading font-black text-2xl text-odas-blue">Facilitatrices</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {facilitateurs.map((m, i) => <MembreCard key={i} membre={m} />)}
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-odas-teal rounded-full" />
            <h2 className="font-heading font-black text-2xl text-odas-blue">Éditeurs scientifiques</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editeurs.map((m, i) => <MembreCard key={i} membre={m} />)}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="section-container text-center">
          <h2 className="section-title mb-4">Vous aussi, rejoignez l&apos;aventure</h2>
          <p className="section-subtitle mb-8">Postulez à la Cohorte 4 et apprenez aux côtés de ces expert·es engagé·es.</p>
          <a href="/candidature" className="btn-primary">Candidater maintenant →</a>
        </div>
      </section>
    </>
  )
}
