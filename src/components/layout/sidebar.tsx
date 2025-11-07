import { Link, useLocation } from 'react-router'

interface NavItemProps {
  to: string
  label: string
}

const links = [
  { to: '/page-one', label: 'Page One' },
  { to: '/page-two', label: 'Page Two' },
]

const isActive = (to: string, locationPath: string) =>
  locationPath === to || (locationPath === '/' && to === '/page-one')

const NavItem = ({ to, label }: NavItemProps) => {
  const location = useLocation()
  const isActiveClass = isActive(to, location.pathname)
    ? 'text-link-active'
    : ''

  const className = `hover:bg-link-bg-hover block rounded-sm px-2 py-1 font-bold transition-colors duration-500 ease-out hover:text-indigo-400 ${isActiveClass}`

  return (
    <li>
      <Link className={className} to={to}>
        {label}
      </Link>
    </li>
  )
}

const NavList = () => {
  return (
    <ul className="flex flex-col gap-1 text-sm">
      {links.map((link) => (
        <NavItem key={link.to} to={link.to} label={link.label} />
      ))}
    </ul>
  )
}

const Sidebar = () => {
  return (
    <aside className="border-2 border-indigo-300 p-4">
      <NavList />
    </aside>
  )
}

export default Sidebar
