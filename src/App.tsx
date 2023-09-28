import { Navbar } from './components/nav-bar/Navbar.tsx'
import { Card } from './components/card/Card.tsx'
import About from './pages/about/About.tsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/home/Home.tsx'

const contents = [
  {
    content:
      "I'm Nathan, a video editor transitioning to web development. I've worked for about 8 years in media production, but my days of chasing freelance work have run their course.",
  },
  {
    content:
      "I got into launchcode's (a non-profit I'm passionate about!) web dev bookcamp in the fall of 2022 and finished 6 months later with a basic knowledge of developing SPA webapps with Angular, and backend APIs with Springboot. After the bootcamp I built a web app called Taste Buddies with a team of six in an Agile style over two months.",
  },
  {
    content:
      'Taste Buddies is a whimsical web app built out of the prompt: "tinder but for restaurants". The app allows you and a group to pick a time and area and swipe through restaurants until you find a match.',
  },
]

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container m-auto pt-6 px-1">
        <Routes>
          <Route path="/" element={<LittleHome />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
        {/* <div className="flex flex-col justify-center space-y-6">
        {contents.map((item) => {
          return (
            <Card 
            {...item}
            key={crypto.randomUUID()}>
              {item.content}
            </Card>	
          )
        })}
      </div> */}
      </div>
    </Router>
  )
}

function LittleHome() {
  return (
    <>
      <h1 className="text-6xl">Home</h1>
      <p>Welcome to Nathan's router</p>
    </>
  )
}

function NoMatch() {
  return (
    <>
      <h1 className="text-6xl text-red-700">404</h1>
      <p>Sorry, the hampsters couldn't find that page</p>
    </>
  )
}
