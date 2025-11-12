import { create } from 'zustand'

interface Project {
  id: string
  name: string
  description: string
  createdAt: Date
}

interface ProjectsState {
  projects: Project[]
  setProjects: (projects: Project[]) => void
  addProject: (project: Project) => void
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  addProject: (project) => set((state) => ({ 
    projects: [...state.projects, project] 
  }))
}))
