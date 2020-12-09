/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable global-require */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  HeaderWrapper,
  Container,
  MenuLeft,
  MenuRight,
  Logo,
  ContainerTabs,
  Tab,
  TabImportant,
} from './headerComponents'
import { MenuDrawer, GrayOverlay } from './menuDrawer'
import Loader from 'src/components/loader'

interface Props {
  isUserLoggedIn: boolean
  isUserLoading: boolean
}

function Header({ isUserLoggedIn, isUserLoading }: Props): JSX.Element {
  const [showMenuDrawer, setShowMenuDrawer] = useState('-500%')
  const router = useRouter()

  const onOpenMenuDrawer = (): void => {
    setShowMenuDrawer('-0%')
  }

  const onCloseMenuDrawer = (): void => {
    setShowMenuDrawer('-500%')
  }

  const onGoHome = (): void => {
    router.push({
      pathname: '/',
    })
  }

  //Como hacemos para agregar el lang?

  const handleLoginSignup = async (typeAction: string): Promise<void> => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login?typeAction=${typeAction}`)
  }

  const handleLogout = async (): Promise<void> => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`)
  }

  const onGoToProfile = (): void => {
    router.push({
      pathname: '/en/my-profile/events',
    })
  }

  //for the time being the text of this buttons will be hardcoded
  //since passing the translations from every page to the layout implies too much work

  const TabsHeader = isUserLoggedIn ? (
    <>
      <TabImportant onClick={onGoToProfile}>My profile</TabImportant>
      <Tab onClick={handleLogout}>Logout</Tab>
    </>
  ) : (
    <>
      <TabImportant onClick={(): Promise<void> => handleLoginSignup('login')}>Login</TabImportant>
      <Tab onClick={(): Promise<void> => handleLoginSignup('signup')}>Sign Up</Tab>
    </>
  )

  return (
    <HeaderWrapper>
      <Container>
        <GrayOverlay showOverlay={showMenuDrawer} onClose={onCloseMenuDrawer} />
        <MenuDrawer translate={showMenuDrawer} isUserLoggedIn={isUserLoggedIn} />
        <MenuLeft onClick={onOpenMenuDrawer}>
          <svg viewBox="0 0 24 24">
            <path
              fill="#272727"
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </MenuLeft>
        <Logo onClick={onGoHome}>Eventander</Logo>
        <MenuRight />
        <ContainerTabs>
          {isUserLoading ? <Loader secondary={true} /> : <>{TabsHeader}</>}
        </ContainerTabs>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
