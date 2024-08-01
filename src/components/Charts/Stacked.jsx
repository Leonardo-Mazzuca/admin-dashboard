

import { Category, ChartComponent, Inject, Legend, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import React from 'react'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';


export const Stacked = ({
  height,
  width
}) => {

  const {currentMode} = useStateContext();
  return (
    <ChartComponent

      width={width}
      height={height}
      id='stack-chart'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{
        border: { width: 0}
      }}
      tooltip={{
        enable:true
      }}
      legendSettings={{
        background:'white'
      }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      
    >

      <Inject services={[Legend,Category,StackingColumnSeries,Tooltip]}  />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index) => (
          <SeriesDirective
            key={index}
            {...item}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );

}
