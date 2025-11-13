import { type LucideProps } from 'lucide-react'
import { NavLink } from 'react-router'

import { IconButton } from '@/components/common/icon-button'
import { GithubIcon } from '@/components/icons'
import { ThemeButton } from '@/components/theme'
import { type ButtonProps } from '@/components/ui/button'

const BrandLink = () => {
  return (
    <NavLink to="/" className="text-xl font-bold">
      React Workshop
    </NavLink>
  )
}

const HeaderActions = () => {
  const buttonProps: ButtonProps = {
    className: '[&_svg]:size-6',
  }
  const iconProps: LucideProps = {
    size: 48,
  }
  const githubIcon = <GithubIcon {...iconProps} />

  return (
    <div className="flex gap-2">
      <ThemeButton iconProps={iconProps} buttonProps={buttonProps} />
      <IconButton
        icon={githubIcon}
        href="https://github.com/ar1ze/react-workshop"
        {...buttonProps}
      />
    </div>
  )
}

const HeaderNavigation = () => {
  return (
    <div>
      <HeaderActions />
    </div>
  )
}

export const AppHeader = () => {
  return (
    <header className="flex justify-between p-4">
      <BrandLink />
      <HeaderNavigation />
    </header>
  )
}
