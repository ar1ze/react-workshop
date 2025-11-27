import { AppFooter } from '@/components/app'
import { type BaseProps } from '@/components/shared/props'

export const LearnContentLayout = ({ children }: BaseProps) => {
  return (
    <section className="flex flex-1 flex-col px-4 pt-2 md:mx-8 lg:mx-auto lg:max-w-200 xl:max-w-240">
      {children}
      <AppFooter className="mt-auto border-t" />
    </section>
  )
}
