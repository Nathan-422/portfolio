import Navbar from "./components/nav-bar/Navbar.tsx";
import HomePage from "./pages/home/home.tsx";

function App() {
  return (
    <>
    <div className='bg-slate-100 text-slate-800 w-screen h-screen flex flex-col align'>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center space-y-6">
        <HomePage></HomePage>
        <div className="bg-white text-black mx-auto max-w-md p-4 rounded-md shadow-sm hover:shadow-md transition duration-500 ease-in-out">I'm Nathan, an video editor transitioning to web development. I've worked for about 8 years in media production, but my days of chasing freelance work have run their course. </div>
	<div className="bg-white text-black mx-auto max-w-md p-4 rounded-md shadow-sm hover:shadow-md transition duration-500 ease-in-out">I got into launchcode's (a non-profit I'm passionate about!) web dev bookcamp in the fall of 2022 and finished 6 months later with a basic knowledge of developing SPA webapps with Angular, and backend APIs with Springboot. After the bootcamp I built a web app called Taste Buddies with a team of six in an Agile style over two months.</div> 
        <div className="bg-white text-black mx-auto max-w-md p-4 rounded-md shadow-sm hover:shadow-md transition duration-500 ease-in-out">Taste Buddies is a whimsical web app built out of the prompt: "how about tinder but for restaurants". The app allows you and a group to pick a time and area and swipe through restaurants until you all match.</div>
        <div className="bg-white text-black mx-auto max-w-md p-4 rounded-md shadow-sm hover:shadow-md transition duration-500 ease-in-out"></div>
        <div className="bg-white text-black mx-auto max-w-md p-4 rounded-md shadow-sm hover:shadow-md transition duration-500 ease-in-out"></div>
      </div>
    </div>
    </>
  )
}

export default App
