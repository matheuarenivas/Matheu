import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'
import { AtvPage } from '@/features/projects/pages/AtvPage'
import { ProjectTwoPage } from '@/features/projects/pages/ProjectTwoPage'
import { ProjectThreePage } from '@/features/projects/pages/ProjectThreePage'
import { ProjectFourPage } from '@/features/projects/pages/ProjectFourPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/atv" element={<AtvPage />} />
        <Route path="/project-2" element={<ProjectTwoPage />} />
        <Route path="/project-3" element={<ProjectThreePage />} />
        <Route path="/project-4" element={<ProjectFourPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
