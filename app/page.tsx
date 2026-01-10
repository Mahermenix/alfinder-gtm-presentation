import { Sidebar } from '@/components/sidebar'
import { HomeDashboard } from '@/components/home-dashboard'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Sidebar />
      <main className="lg:ml-72">
        <HomeDashboard />
      </main>
    </div>
  )
}
