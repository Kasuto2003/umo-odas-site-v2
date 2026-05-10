// Layout dashboard — La navbar et le footer sont intégrés dans page.js directement
// On supprime le layout global (Navbar + Footer) pour cette page
export const metadata = {
  title: 'Mon espace — Université Militante ODAS',
  description: 'Votre espace formation UMO ODAS : cours, webinaires, ressources et communauté.',
}

export default function DashboardLayout({ children }) {
  return <>{children}</>
}
