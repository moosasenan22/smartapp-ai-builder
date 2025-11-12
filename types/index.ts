export interface User {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
}

export interface Project {
  id: string
  name: string
  description: string
  ownerId: string
  createdAt: Date
  updatedAt: Date
}

export interface AIMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}
