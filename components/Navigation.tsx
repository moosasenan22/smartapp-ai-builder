'use client'

import { Home, Folder, MessageSquare, Settings, User } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">SmartApp</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
              <Home className="w-5 h-5 mr-2" /> Dashboard
            </Link>
            <Link href="/projects" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
              <Folder className="w-5 h-5 mr-2" /> Projects
            </Link>
            <Link href="/chat" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
              <MessageSquare className="w-5 h-5 mr-2" /> AI Chat
            </Link>
            <Link href="/settings" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
              <Settings className="w-5 h-5 mr-2" /> Settings
            </Link>
          </div>

          <div className="flex items-center">
            <User className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  )
}
