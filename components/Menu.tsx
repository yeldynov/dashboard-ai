'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  {
    icon: '/icons/home.svg',
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: '/icons/gallery.svg',
    label: 'My Gallery',
    href: '/gallery',
  },
  {
    icon: '/icons/scanning.svg',
    label: 'Face Tagging',
    href: '/face-tagging',
  },
  {
    icon: '/icons/albums.svg',
    label: 'Albums',
    href: '/albums',
  },
  // {
  //   icon: '/icons/ranking.svg',
  //   label: 'AI Keywords',
  //   href: '/ai-keywords',
  // },
]

const Menu = () => {
  const pathname = usePathname()

  return (
    <div className='text-sm'>
      <div className='flex gap-3 justify-between w-full'>
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center justify-center gap-4 py-2 text-blueGrey rounded-2xl lg:justify-start md:px-4 hover:ring-2 hover:ring-primaryBlue hover:text-primaryBlue ${
                isActive ? 'active' : ''
              }`}
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className='hidden lg:block'>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
