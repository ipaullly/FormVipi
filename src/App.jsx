import { useState } from 'react'
import siteLogo from './assets/FormVipi.svg'
import menuIcon from './assets/solar_menu-dots-outline.svg'
import './App.css'
import MenuModal from './components/menu-modal.component'

function App() {
  const [chillPoints, setChillPoints] = useState([
    { name: 'The Zone', hype_level: 5, description: 'The food is good, the football is fire' },
    { name: 'The Zone', hype_level: 5, description: 'The food is good, the football is fire' },
    { name: 'The Zone', hype_level: 5, description: 'The food is good, the football is fire' },
    { name: 'The Zone', hype_level: 5, description: 'The food is good, the football is fire' },
    { name: 'The Zone', hype_level: 5, description: 'The food is good, the football is fire' },
    { name: 'The Zone', hype_level: 5, description: 'The food is good, the football is fire' },
    { name: 'The Zone', hype_level: 5, description: 'The food is good, the football is fire' },
    { name: 'The Zone', hype_level: 5, description: 'The food is good, the football is fire' }
  ])
  const [openMenu, setOpenMenu] = useState(false);
  const [options, setOptions] = useState([
    'Spots', 'Events', 'Sports'
  ])

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className='m-0 p-0 bg-gray-300 h-screen w-screen'>
      <div className='h-16 w-full flex flex-row justify-between p-3 relative'>
        <img src={siteLogo} alt='logo' className='' />
        <div onClick={() => handleMenu()}><img src={menuIcon} alt='menu' className='' /></div>
        <MenuModal open={openMenu} />
      </div>
      <div className='flex flex-row justify-between'>
        <div className='w-1/12 h-full bg-gray-300 flex flex-col'>
          {options.map((opt, idx) => (
            <span className='border-b-2 pb-2 px-3'>{opt}</span>
          ))}
        </div>
        <div className='p-3 flex flex-col w-full'>
          <h2 className='text-3xl p-3'>Hello Uid983</h2>
          <div className="grid grid-cols-4 gap-4 bg-red-300">
            {chillPoints.map((base, idx) => (
              <div key={idx} className='bg-yellow-300 rounded-sm p-3 flex flex-col items-start'>
                <span className='text-3xl italic'>{base.name}</span>
                <span>{base.hype_level}</span>
                <span className='text-lg'>{base.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
