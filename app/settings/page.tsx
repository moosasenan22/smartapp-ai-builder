'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase'
import { updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth'
import Navigation from '@/components/Navigation'

export default function Settings() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [newEmail, setNewEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        router.push('/login')
      } else {
        setUser(currentUser)
        setNewEmail(currentUser.email || '')
      }
    })
    return () => unsubscribe()
  }, [router])

  const handleChangeEmail = async () => {
    if (!user || !newEmail) return
    try {
      await updateEmail(user, newEmail)
      setMessage('✅ Email updated successfully')
    } catch (error: any) {
      setMessage('❌ ' + error.message)
    }
  }

  const handleChangePassword = async () => {
    if (!user || !currentPassword || !newPassword) return
    try {
      const credential = EmailAuthProvider.credential(user.email!, currentPassword)
      await reauthenticateWithCredential(user, credential)
      await updatePassword(user, newPassword)
      setMessage('✅ Password updated successfully')
      setCurrentPassword('')
      setNewPassword('')
    } catch (error: any) {
      setMessage('❌ ' + error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

        {message && (
          <div className="mb-4 p-3 bg-blue-100 text-blue-800 rounded">{message}</div>
        )}

        {/* Change Email */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Change Email</h2>
          <input
            type="email"
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleChangeEmail}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Email
          </button>
        </div>

        {/* Change Password */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleChangePassword}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Update Password
          </button>
        </div>

        <div className="text-sm text-gray-600">
          <p>• You must enter your current password to change it.</p>
          <p>• Use a strong password (minimum 6 characters).</p>
        </div>
      </div>
    </div>
  )
}
