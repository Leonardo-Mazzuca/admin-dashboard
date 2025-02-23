import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import './App.css'

import {Navbar,Footer,Sidebar,ThemeSettings} from './components'

import { Kanban,Ecommerce,Area,Bar,
    Calendar,ColorMapping,ColorPicker,Pyramid, Editor,Orders,
Financial,Employees,Pie,Costomers,Stacked,Line } from './pages'
import { useStateContext } from './context/ContextProvider'

const App = () => {

 
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode
} = useStateContext()

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>

            <div className='flex relative dark:bg-main-bg-dark'>

                <div style={{zIndex:1000}} className='fixed right-4 bottom-4'>
                    <TooltipComponent
                    
                        content="Settings"
                        position='top'
                    >
                        <button
                            type='button'
                            className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'
                            style={{
                                background: currentColor,
                                borderRadius: '50%'
                            }}
                            onClick={()=>setThemeSettings(true)}
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>

                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ) : (

                    <div className='w-0 dark:bg-secondary-dark-bg'>
                         <Sidebar />
                    </div>

                )}

                <div className={`
                dark:bg-main-dark-bg bg-main-bgmin-h-screen 
                 ${activeMenu ? 'md:ml-72' : 'flex-2'}
                  w-full
                `}>

                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>

                        <Navbar />

                    </div>

             

                <div>
                    
                    {themeSettings &&
                        <ThemeSettings
                        
                        />
                    }

                    <Routes>
                        {/* Darhboard */}
                        <Route path='/' element={<Ecommerce />} />
                        <Route path='/ecommerce' element={<Ecommerce />}/>

                         {/* pages */}
                        <Route path='/orders' element={<Orders />}/>
                        <Route path='/employees' element={<Employees/>}/>
                        <Route path='/customers' element={<Costomers />}/>
                    
                        {/* apps */}
                        <Route path='/calendar' element={<Calendar />}/>
                        <Route path='/kanban' element={<Kanban />}/>
                        <Route path='/editor' element={<Editor />}/>
                        <Route path='/color-picker' element={<ColorPicker />}/>

                        {/* charts */}
                        <Route path='/line' element={<Line />}/>
                        <Route path='/area' element={<Area />}/>
                        <Route path='/bar' element={<Bar />}/>
                        <Route path='/pie' element={<Pie />}/>
                        <Route path='/financial' element={<Financial />}/>
                        <Route path='/color-mapping' element={<ColorMapping />}/>
                        <Route path='/pyramid' element={<Pyramid />}/>
                        <Route path='/stacked' element={<Stacked />}/>
        
                    </Routes>   

                </div>

                </div>

            </div>
    
        </BrowserRouter>
    </div>
  )
}

export default App