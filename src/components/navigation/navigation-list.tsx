import { NavLink, useLocation } from 'react-router'

import { type NavigationLink } from '@/config/navigation'

const isActive = (to: string, locationPath: string) =>
  locationPath === to || (locationPath === '/' && to === '/page-one')

const NavigationItem = ({ to, label }: NavigationLink) => {
  const location = useLocation()
  const isActiveClass = isActive(to, location.pathname)
    ? 'text-link-active'
    : ''

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
