import React, { FC, useContext, useEffect } from 'react'
import { PossibleLangsContext } from 'src/context'
import { getLanguageCodes, getLanguageByCode } from 'src/internationalization'

import Landing from 'src/domain/home/landing'
import MainLayout from 'src/layout/main'

//types
import PageWithLayout from 'src/types/pageWithLayout'
import { HomeLang } from 'src/types/screens'

interface Props {
  translations: HomeLang
  langCodes: string[]
  lang: string
}

const Home: FC<Props> = ({ translations, langCodes, lang }) => {
  //MainLayout is not a page component so it does not have static props, but it needs info which can only
  //be got that way (the different languages available)
  //we had to come with a way to send props from children to parent

  const { setPossibleLangs } = useContext(PossibleLangsContext)
  useEffect(() => {
    setPossibleLangs(langCodes)
  }, [])
  return (
    <div>
      <Landing lang={lang} translations={translations} />
    </div>
  )
}

;(Home as PageWithLayout).layout = MainLayout

export default Home

type Params = {
  params: {
    lang: string
  }
}

export async function getStaticProps({ params }: Params): Promise<unknown> {
  const translations = getLanguageByCode(params.lang).home
  const codes = getLanguageCodes()

  return {
    props: {
      translations: {
        ...translations,
      },
      langCodes: [...codes],
      lang: params.lang,
    },
  }
}

export async function getStaticPaths(): Promise<unknown> {
  const codes = getLanguageCodes()

  return {
    paths: codes.map((code) => {
      return {
        params: {
          lang: code,
        },
      }
    }),
    fallback: false,
  }
}
