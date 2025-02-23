

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import avatar from '../data/avatar.jpg'

import { Cart,Chat,Notification,UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';

export const NavButton = ({title, customFunc, icon, color, dotColor}) => (

  <TooltipComponent position='BottomCenter' content={title}>
    <button
      type='button'
      onClick={customFunc}
      style={{
        color
      }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span 
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
       style={{background:dotColor}}/>
      
       {icon} 
    </button>
  </TooltipComponent>
)

export const Navbar = () => {

  

  const {

    setActiveMenu,
    isClicked,
    currentColor,
    handleClick,
    screenSize,
    setScreenSize

  } = useStateContext()

  useEffect(()=> {

    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize',handleResize);

    handleResize()

    return window.removeEventListener('resize',handleResize)

  },[])

  useEffect(()=> {
      if(screenSize <= 900) {
        setActiveMenu(false)
      } else {
        setActiveMenu(true)
      }
  },[screenSize])
 
  return (

    <div className='flex justify-between p-2 md:mx-6 relative'>
      
      <NavButton 
        title={"Menu"}
        customFunc={()=> setActiveMenu(prev => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className='flex'>

        <NavButton 
          title={"Cart"}
          customFunc={()=> handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton 
          title={"Chat"}
          customFunc={()=> handleClick('chat')}
          color={currentColor}
          dotColor={'#03c9d7'}
          icon={<BsChatLeft />}
        />
        <NavButton 
          title={"Notification"}
          customFunc={()=> handleClick('notification')}
          color={currentColor}
          dotColor={'#03c9d7'}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent
          content="Profile"
          position='BottomCenter'
        >
          <div 
          className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          onClick={()=>handleClick('userProfile')}
          
          >
            <img 
              src={avatar}
              alt='User image'
              className='rounded-full w-8 h-8'
            />

            <p>

              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Macucu</span>
            </p>

            <MdKeyboardArrowDown 
              className='text-gray-400 text-14'
             />

          </div>

        </TooltipComponent>

        {isClicked.cart &&
        
          <Cart />
        
        }
        {isClicked.chat &&
        
          <Chat />
        
        }
        {isClicked.notification &&
        
          <Notification />
        
        }

        {isClicked.userProfile &&
        
          <UserProfile />
        
        }

      </div>
    </div>

  );

}
