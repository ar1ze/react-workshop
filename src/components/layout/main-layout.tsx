import { Outlet } from 'react-router'

import Header from './header'

const Content = () => {
  return (
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  )
}

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default MainLayout
