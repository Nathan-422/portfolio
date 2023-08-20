import { Navbar } from "./components/nav-bar/Navbar.tsx";
import { HomePage } from "./pages/home/home.tsx";
import { CardComp } from "./components/card/Card.tsx";


  // variables are assigned
  const text = "I'm the default card text"
  const showPrimary = true
  const cardStyles = "bg-white text-black mx-auto max-w-md p-4 rounded-md shadow-sm hover:shadow-md transition duration-500 ease-in-out"

  // This if else can be done with a ternary {condition ? true : false} or a logical && syntax of {condition && trueContent}
  if (showPrimary) {
    <>
    <div className={cardStyles}>
      {/* TS can be accessed from currly braces */}
      {text} 
    </div>
    </>
  } else {
    <>
    <div className={cardStyles}>
      This text shouldn't be displayed!
    </div>
    </>
  }


function App() {
  return (
    <>
    <div className='bg-slate-100 text-slate-800 w-screen h-auto flex flex-col align'>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center space-y-6">
        <HomePage></HomePage>
        <CardComp contents={"I'm Nathan, a video editor transitioning to web development. I've worked for about 8 years in media production, but my days of chasing freelance work have run their course."} />
        <CardComp contents="I got into launchcode's (a non-profit I'm passionate about!) web dev bookcamp in the fall of 2022 and finished 6 months later with a basic knowledge of developing SPA webapps with Angular, and backend APIs with Springboot. After the bootcamp I built a web app called Taste Buddies with a team of six in an Agile style over two months." />
        <CardComp contents='Taste Buddies is a whimsical web app built out of the prompt: "tinder but for restaurants". The app allows you and a group to pick a time and area and swipe through restaurants until you find a match.' />
        <CardComp contents=""/>
    </div>
    </div>
    </>
  )
}

export default App
