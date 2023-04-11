import React, { useState } from 'react'

const MenuModal = ({ open }) => {
	const [options, setOptions] = useState([
		'Settings', 'Profile', 'Log out'
	])
	return (
		<div className={`${open ? '' : 'hidden'} absolute right-3 top-16 bg-white flex flex-col justify-around items-start`}>
			{options.map((opt, idx) => (
				<span className='border-b-2 pb-2 px-3'>{opt}</span>
			))}
		</div>
	)
}

export default MenuModal