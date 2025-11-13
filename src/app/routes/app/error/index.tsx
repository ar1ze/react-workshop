import { Link } from 'react-router'

import { ContentLayout } from '@/components/layout'
import { Button } from '@/components/ui/button'

export const ErrorPage = () => {
  return (
    <ContentLayout className="flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-destructive mb-2 text-4xl font-bold">404</h1>
      <h2 className="text-foreground mb-4 text-2xl font-semibold">
        Page Not Found
      </h2>
      <p className="text-muted-foreground mb-6">
        The page you're looking for doesn't exist.
      </p>

      <Button asChild={true} variant="outline">
        <Link to="/">Go back home</Link>
      </Button>
    </ContentLayout>
  )
}
