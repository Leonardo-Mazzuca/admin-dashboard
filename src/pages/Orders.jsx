import React from 'react'
import {GridComponent,
  ColumnsDirective,ColumnDirective, Resize, Sort, ContextMenu,Page,ExcelExport,PdfExport,Edit,Inject,
  Filter
} from '@syncfusion/ej2-react-grids'

import {ordersData,contextMenuItems,ordersGrid} from '../data/dummy'
import {Header} from '../components'

export const Orders = () => {
  return (

    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header 
        title="Orders"
        category={"Page"}
      />
      <GridComponent
        id='grid-column'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >

        <ColumnsDirective>
        {ordersGrid.map((item,index)=> (
          <ColumnDirective 
            key={index}
            {...item}
          />
        ))}
        </ColumnsDirective>
        <Inject
        
          services={[Page,Resize,Sort,ContextMenu,Filter,ExcelExport,PdfExport,Edit]}
        />
      </GridComponent>
    </div>

  )
}
