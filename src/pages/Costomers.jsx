

import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective
  ,Inject,Page,Selection,Edit,Toolbar,Sort,Filter
 } from '@syncfusion/ej2-react-grids'

import {customersData,customersGrid} from '../data/dummy'
import {Header} from '../components'

export const Costomers = () => {

  return (

    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header 
      title="Customers"
      category={"Page"}
    />
    <GridComponent

      dataSource={customersData}
      toolbar={['Delete']}
      width={'auto'}
      allowPaging
      allowSorting
      editSettings={{
        allowDeleting:true,
        allowEditing:true
      }}
      
    >

      <ColumnsDirective>
      {customersGrid.map((item,index)=> (
        <ColumnDirective 
          key={index}
          {...item}
        />
      ))}
      </ColumnsDirective>
      <Inject
      
        services={[Page,Toolbar,Edit,Selection,Sort,Filter]}
      />
    </GridComponent>
  </div>

  )

}
