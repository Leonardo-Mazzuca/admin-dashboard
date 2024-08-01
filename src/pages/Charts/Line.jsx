
import React from 'react'

import {Header,LineChart} from '../../components'

export const Line = () => {


  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg'>

      <Header
        category={'Chart'}
        title={'Inflation Rate'}
      />

      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )


}
