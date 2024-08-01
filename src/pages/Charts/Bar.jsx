

import React from 'react'

import { ChartComponent,
  SeriesCollectionDirective,SeriesDirective,
  Inject,DateTime,Legend,ColumnSeries,Category,DataLabel,Tooltip } from '@syncfusion/ej2-react-charts'

import { barPrimaryXAxis,barCustomSeries,barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'

import { Header } from '../../components'

export const Bar = () => {

  const {
    currentMode
  } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg'>

      <Header
        category={'Bar'}
        title={'Inflation Rate in milions'}
      />


      <ChartComponent
        id='bar-chart'
        height='420px'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{
          border:{width:0}
        }}
        tooltip={{
          enable:true,
        }}
        legendSettings={{ background: 'white' }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >

        <Inject 
          services={[DateTime,Legend,ColumnSeries,Category,DataLabel,Tooltip]}
        />

        <SeriesCollectionDirective>
          {barCustomSeries.map((item,index)=> (
            <SeriesDirective
              key={index}
              {...item}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>

    </div>



  )

}

