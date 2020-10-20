/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable global-require */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import { space, colors } from 'src/tokens'

interface ContainerMenuDrawerProps {
  translateMenu: string
}

const ContainerMenuDrawer = styled.ul`
  top: 0px;
  left: 50px;
  position: absolute;
  z-index: 100;
  width: 250px;
  height: 110vh;
  box-shadow: 0 0 10px #85888c;
  margin: 0px 0 0 -50px;
  background-color: #f5f6fa;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(${(props: ContainerMenuDrawerProps): string => props.translateMenu}, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  padding-left: 0px;
`

const ContainerNavigation = styled.ul`
  padding-top: ${space.s6};
  padding-left: ${space.s6};
  padding-right: ${space.s6};
  li {
    list-style-type: none;
    padding: 10px 0;
    transition-delay: 2s;
  }
`

interface GrayOverlayElementProps {
  showOverlay: string
}

const GrayOverlayElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
  width: 100%;
  height: 100%;
  display: ${(props: GrayOverlayElementProps): string =>
    props.showOverlay === '-0%' ? 'inherit' : 'none'};
`

const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.base.borders};
  padding-top: ${space.s2};
  padding-bottom: ${space.s2};
`

const Logo = styled.div`
  img {
    height: auto;
    width: ${space.s48};
  }
`

interface GrayOverlayProps {
  showOverlay: string
  onClose: () => void
}

function GrayOverlay({ showOverlay, onClose }: GrayOverlayProps): JSX.Element {
  return <GrayOverlayElement showOverlay={showOverlay} onClick={onClose} />
}

const ImportantOption = styled.li`
  border-radius: 4px;
  background-color: ${colors.base.primaryOrange};
  text-align: center;
  color: ${colors.base.white};
  padding: ${space.s2} !important;
`

const Option = styled.li`
  text-align: center;
  padding: ${space.s2} !important;
`

interface MenuDrawerProps {
  isUserLoggedIn: boolean
  translate: string
}

function MenuDrawer({ translate, isUserLoggedIn }: MenuDrawerProps): JSX.Element {
  const navigationOptions = isUserLoggedIn ? (
    <ImportantOption>Ingresar/Registrarse</ImportantOption>
  ) : (
    <Option>Salir</Option>
  )

  return (
    <ContainerMenuDrawer translateMenu={translate}>
      <ContainerLogo>
        <Logo>
          <img src={require(`images/checamp_logo_horizontal.png`)} alt="checamp-logo" />
        </Logo>
      </ContainerLogo>
      <ContainerNavigation>
        <div style={{ position: 'relative' }}>{navigationOptions}</div>
      </ContainerNavigation>
    </ContainerMenuDrawer>
  )
}

export { MenuDrawer, GrayOverlay }
