import { Link } from 'react-router-dom'

export interface INavbarProps {}

export function Navbar() {
  const routes = [
    { text: 'Home', route: '/' },
    { text: 'About', route: '/about' },
    { text: 'Contact', route: '/contact' },
  ]

  const links = routes.map((route) => (
    <Link key={crypto.randomUUID()} to={route.route}>
      {route.text}
    </Link>
  ))

  return (
    <div className="bg-green-700">
      <div className="max-w-5xl mx-auto">
        <nav className=" text-white flex flex-row justify-end content-center space-x-4 px-6 py-3">
          {links}
        </nav>
      </div>
    </div>
  )
}
