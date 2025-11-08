import { NavLink, useLocation } from 'react-router'

import { type NavigationLink } from '@/config/navigation'

const NavigationItem = ({ to, label }: NavigationLink) => {
  const location = useLocation()
  const isActiveClass =
    location.pathname === to ? 'bg-link-bg-hover text-link-active' : ''

  const className = `
    hover:bg-link-bg-hover 
    block rounded-sm px-2 py-1.5 font-bold 
    transition-colors duration-500 ease-out
    hover:text-indigo-400 
    ${isActiveClass}`

  return (
    <li>
      <NavLink className={className} to={to}>
        {label}
      </NavLink>
    </li>
  )
}

interface NavigationListProps {
  links: Array<NavigationLink>
}

const NavigationList = ({ links }: NavigationListProps) => {
  return (
    <ul className="flex flex-col text-sm">
      {links.map((link) => (
        <NavigationItem key={link.to} to={link.to} label={link.label} />
      ))}
    </ul>
  )
}

export default NavigationList
