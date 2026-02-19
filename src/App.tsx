import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NextHighSchool from './pages/lp/next-high-school'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lp/next-high-school" element={<NextHighSchool />} />
        <Route path="*" element={<Navigate to="/lp/next-high-school" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
