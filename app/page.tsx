import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-6">SmartApp AI Builder 🚀</h1>
        <p className="text-xl mb-8">Build apps with AI - Web, Mobile, Desktop</p>
        <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Dashboard
        </Link>
      </div>
    </div>
  )
}
