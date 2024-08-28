import Image from 'next/image'
import React from 'react'
import logo from '../../Assets/planto_lo.svg'
import { Barra, Lupa, Shopi } from '../Icons'
import Tooltip from '../Tooltip'

const Nav = () => {
  return (
    <header>
      <div className='px-8 py-4 flex items-center justify-between'>
        <Image className='cursor-pointer' src={logo} width={50} height={200} alt='img' />
        <div className='flex items-center gap-5 cursor-pointer'>
          <Tooltip texto='search' Position='left'>
          <Lupa />
          </Tooltip>
          <Tooltip texto='shop' Position='left'>
          <Shopi />
          </Tooltip>
          <Tooltip texto='Menú' Position='left'>
            <Barra />
          </Tooltip>
        </div>
      </div>
    </header>
  )
}

export default Nav;