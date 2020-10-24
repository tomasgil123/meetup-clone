import React, { FC } from 'react'

import Events from 'src/domain/search/events'
import SearchLayout from 'src/layout/search'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Search: FC = () => {
  return (
    <div>
      <Events />
    </div>
  )
}

;(Search as PageWithLayout).layout = SearchLayout

export default Search
