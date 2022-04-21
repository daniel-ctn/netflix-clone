import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BellIcon, SearchIcon } from '@heroicons/react/solid'

import accountImg from 'public/images/account.png'

interface NavbarProps {}

const Navbar: FC = ({}: NavbarProps) => {
  return (
    <header>
      <div className="flex items-center justify-between space-x-2 md:space-x-10 px-8">
        <Image
          src="https://cdn.iphoneincanada.ca/wp-content/uploads/2021/11/Netflix.jpeg"
          width={200}
          height={100}
          alt="Netflix logo"
        />
        <ul className="items-center justify-between hidden md:flex space-x-4">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div>
        <SearchIcon className="hidden sm:inline w-6 h-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6"/>
          <Link href="/account">
              <Image src={accountImg} alt="account" className="rounded" width={32} height={32}/>
          </Link>
      </div>
    </header>
  )
}

export default Navbar
