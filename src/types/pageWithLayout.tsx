import { NextPage } from 'next'
import MainLayout from 'src/layout/main'
import SearchLayout from 'src/layout/search'

type PageWithMainLayout = NextPage & { layout: typeof MainLayout }

type PageWithPostLayout = NextPage & { layout: typeof SearchLayout }

type PageWithLayout = PageWithMainLayout | PageWithPostLayout

export default PageWithLayout
