import Navbar from "./components/nav-bar/Navbar.tsx";
import HomePage from "./pages/home/home.tsx";

function App() {

  return (
    <>
    <div className='bg-slate-800 text-slate-50 w-screen h-screen'>
    <h3 className="">App Component</h3>
      <div className='flex justify-evenly'>
        <Navbar/>
        <HomePage/>
      </div>
    </div>
    </>
  )
}

export default App
