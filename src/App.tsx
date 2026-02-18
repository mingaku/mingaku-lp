import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SchoolAiEnglish from './pages/lp/school-ai-english'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lp/next-high-school" element={<SchoolAiEnglish />} />
        <Route path="*" element={<Navigate to="/lp/next-high-school" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
