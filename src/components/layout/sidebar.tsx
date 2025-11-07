const NavList = () => {
  return (
    <ul className="flex flex-col gap-1 text-sm">
      <li>Page One</li>
      <li>Page Two</li>
      <li>Page Three</li>
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
