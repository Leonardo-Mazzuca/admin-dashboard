import React from 'react'
import {GridComponent,
  ColumnsDirective,ColumnDirective, Toolbar,Page,Search,Inject,
} from '@syncfusion/ej2-react-grids'

import {employeesData,employeesGrid} from '../data/dummy'
import {Header} from '../components'

export const Employees = () => {
  return (

    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header 
        title="Employees"
        category={"Page"}
      />
      <GridComponent
  
        dataSource={employeesData}
        toolbar={['Search']}
        width={'auto'}
        allowPaging
      >

        <ColumnsDirective>
        {employeesGrid.map((item,index)=> (
          <ColumnDirective 
            key={index}
            {...item}
          />
        ))}
        </ColumnsDirective>
        <Inject
        
          services={[Page,Search,Toolbar]}
        />
      </GridComponent>
    </div>

  )
}
