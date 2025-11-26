import { AppContentLayout, AppFooter } from '@/components/app'

export const BlogPage = () => {
  return (
    <div className="flex min-h-full flex-col overflow-y-auto">
      <AppContentLayout className="flex-1">
        <p>Welcome to the Blog Page</p>
      </AppContentLayout>
      <AppFooter />
    </div>
  )
}
