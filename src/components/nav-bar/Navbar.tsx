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
    <div className="bg-slate-600">
        <div className="max-w-5xl mx-auto">
            <nav className=" text-white flex flex-row justify-end content-center space-x-4 px-6 py-3">
                {links}
            </nav>
        </div>
    </div>
	)
}
