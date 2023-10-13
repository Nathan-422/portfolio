import { Navbar } from './components/Navbar/Navbar.tsx'
import About from './pages/about/About.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="font-san m-auto pt-6">
        <Routes>
          <Route path="/" element={<LittleHome />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

function LittleHome() {
  return (
    <>
      <h1 className="text-6xl">Home</h1>
      <p>Welcome to Nathan&apos;s router</p>
    </>
  )
}

function NoMatch() {
  return (
    <>
      <h1 className="text-6xl text-red-700">404</h1>
      <p>Sorry, the hampsters couldn&apos;t find that page</p>
    </>
  )
}
