import React, { FC, useContext, useEffect } from 'react'
import { PossibleLangsContext } from 'src/context'
import { getLanguageCodes, getLanguageByCode } from 'src/internationalization'

import Landing from 'src/domain/home/landing'
import MainLayout from 'src/layout/main'

//types
import PageWithLayout from 'src/types/pageWithLayout'

interface Props {
  translations: unknown
  langCodes: string[]
}

const Home: FC<Props> = ({ translations, langCodes }) => {
  const { setPossibleLangs } = useContext(PossibleLangsContext)
  useEffect(() => {
    setPossibleLangs(langCodes)
  }, [])
  return (
    <div>
      <Landing />
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
  const translations = getLanguageByCode(params.lang)
  const codes = getLanguageCodes()

  return {
    props: {
      translations: {
        ...translations,
      },
      langCodes: [...codes],
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
