import { Outlet } from 'react-router'

import { MainNavigation } from '../navigation/main-navigation'
import { Header } from './header'
import { Sidebar } from './sidebar'

const Content = () => {
  return (
    <main className="border-2 border-blue-300 p-4">
      <Outlet />
    </main>
  )
}

const Section = () => {
  return (
    <section className="grid h-full grid-cols-[16rem_1fr]">
      <Sidebar>
        <MainNavigation />
      </Sidebar>
      <Content />
    </section>
  )
}

export const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] content-center">
      <Header />
      <Section />
    </div>
  )
}
