import { AppContentLayout, AppFooter } from '@/components/app'

export const HomePage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <AppContentLayout className="flex-1">
        <p>Welcome to the React Workshop</p>
      </AppContentLayout>
      <AppFooter />
    </div>
  )
}
