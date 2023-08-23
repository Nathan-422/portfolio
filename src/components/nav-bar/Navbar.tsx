export interface INavbarProps {
}

export function Navbar () { 
    const routes = [
        { id: 1, text: 'About', route: 'about', },
        { id: 2, text: 'Contact', route: 'contact', },
    ]

    const links = routes.map( route => 
        <a key={route.id} href={route.route}>
            {route.text}
        </a>
    )

    return (
    <nav className="bg-slate-600 text-white flex flex-row justify-end space-x-4 px-6 py-3 mb-6">
        {links}
    </nav>
	)
}
