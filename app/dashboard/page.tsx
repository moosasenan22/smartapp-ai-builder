import Navigation from '@/components/Navigation'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <p className="text-gray-600">3 active</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">AI Requests</h2>
            <p className="text-gray-600">50 this month</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Storage</h2>
            <p className="text-gray-600">2.5 GB used</p>
          </div>
        </div>
      </div>
    </div>
  )
}
