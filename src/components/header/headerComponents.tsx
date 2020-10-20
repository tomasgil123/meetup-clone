/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import styled from 'styled-components'
import { space, breakpoints, boxShadow, colors } from 'src/tokens'

const HeaderWrapper = styled.header`
  position: inherit;
  top: 0px;
  left: 0px;
  background-color: ${colors.base.white};
  z-index: 101;
  font-size: ${space.s4};
  box-shadow: ${boxShadow.shadow};
  transition: box-shadow 500ms ease-in-out;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${space.s2};
  padding-bottom: ${space.s2};
  width: 100%;
  @media (min-width: ${breakpoints.md}) {
    align-items: center;
    justify-content: flex-start;
    padding-left: ${space.s12};
    padding-right: ${space.s12};
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-left: ${space.s24};
    padding-right: ${space.s24};
  }
`

const TitleLogo = styled.span`
  color: ${colors.base.white};
  font-weight: 900;
  font-size: ${space.s6};
  cursor: pointer;
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s8};
  }
`

const Logo = styled.div`
  flex: 2;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${space.s6};
  color: ${colors.base.primaryOrange};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s8};
    flex: 1;
    justify-content: flex-start;
    max-width: 300px;
    text-align: left;
  }
`

const MenuLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  & svg {
    height: ${space.s10};
    width: ${space.s10};
    color: ${colors.text.primary};
  }
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`

const MenuRight = styled.div`
  flex: 1;
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`

const ContainerTabs = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${space.s3};
`

const ContainerImageLogo = styled.div`
  cursor: pointer;
`

const Tab = styled.div`
  display: none;
  color: ${colors.text.primary};
  @media (min-width: ${breakpoints.md}) {
    display: inherit !important;
    padding-left: ${space.s5};
    padding-right: ${space.s5};
  }
`

const TabImportant = styled.div`
  display: none;
  color: ${colors.base.white};
  @media (min-width: ${breakpoints.md}) {
    display: inherit !important;
    border-radius: 4px;
    background-color: ${colors.base.primaryOrange};
    padding: ${space.s2};
  }
`

export {
  HeaderWrapper,
  Container,
  Logo,
  MenuLeft,
  MenuRight,
  ContainerTabs,
  Tab,
  TitleLogo,
  ContainerImageLogo,
  TabImportant,
}
