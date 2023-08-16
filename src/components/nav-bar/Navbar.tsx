export interface INavbarProps {
}

export default function Navbar () { 
    return (
    <nav className="bg-slate-600 text-white flex flex-row justify-end space-x-4 px-6 py-3">
        <a className="" href='about'>About</a>
        <a className="" href='contact'>Contact</a>
    </nav>
	)
}
