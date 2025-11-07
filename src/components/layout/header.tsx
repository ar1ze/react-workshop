import { Moon, Sun } from 'lucide-react'

const Logo = () => {
  return <div className="text-lg font-bold">React Workshop</div>
}

const Nav = () => {
  return (
    <div className="flex gap-2">
      <Sun />
      <Moon />
    </div>
  )
}

const Header = () => {
  return (
    <header className="flex justify-between border-2 border-purple-300 p-4">
      <Logo />
      <Nav />
    </header>
  )
}

export default Header
