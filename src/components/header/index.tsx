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

function Header(): JSX.Element {
  const [showMenuDrawer, setShowMenuDrawer] = useState('-500%')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
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

  const TabsHeader = isUserLoggedIn ? (
    <TabImportant>Ingresar/Registrarse</TabImportant>
  ) : (
    <Tab>Salir</Tab>
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
        <ContainerTabs>{TabsHeader}</ContainerTabs>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
