import { Navbar } from "./components/nav-bar/Navbar.tsx";
import { Card } from "./components/card/Card.tsx";

const contents = [
	{content: "I'm Nathan, a video editor transitioning to web development. I've worked for about 8 years in media production, but my days of chasing freelance work have run their course."},
	{content: "I got into launchcode's (a non-profit I'm passionate about!) web dev bookcamp in the fall of 2022 and finished 6 months later with a basic knowledge of developing SPA webapps with Angular, and backend APIs with Springboot. After the bootcamp I built a web app called Taste Buddies with a team of six in an Agile style over two months."},
	{content: "Taste Buddies is a whimsical web app built out of the prompt: \"tinder but for restaurants\". The app allows you and a group to pick a time and area and swipe through restaurants until you find a match."},
]

export default function App() {
  return (
    <>
    <div className='bg-slate-100 text-slate-800 w-screen h-full min-h-screen flex flex-col align'>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center space-y-6">
        {contents.map((item) => {
          return (
            <Card 
            {...item}
            key={crypto.randomUUID()}>
              {item.content}
            </Card>	
          )
        })}
    </div>
  </div>
  </>
  )
}
