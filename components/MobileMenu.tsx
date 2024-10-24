'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { Progress } from './ui/progress'

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
    icon: '/icons/profile.svg',
    label: 'Grouping',
    href: '/grouping',
  },
  {
    icon: '/icons/ranking.svg',
    label: 'AI Keywords',
    href: '/ai-keywords',
  },
]

const MobileMenu = () => {
  const pathname = usePathname()

  return (
    <div>
      <Drawer direction='left'>
        <DrawerTrigger asChild>
          <Image src='/icons/burger.svg' alt='' width={45} height={30} />
        </DrawerTrigger>
        <DrawerContent className='top-0 left-0 right-auto mt-0 rounded-none'>
          <div className='mx-auto p-5 pt-0 w-full overflow-y-scroll overflow-x-hidden h-screen'>
            <DrawerHeader className='w-full px-0'>
              <DrawerTitle className='flex mb-[42px] justify-between w-[280px]'>
                <Link href='/'>
                  <Image src='/logo.png' alt='' width={64} height={62} />
                </Link>
                <DrawerClose>
                  <Image src='/icons/close.svg' alt='' width={24} height={24} />
                </DrawerClose>
              </DrawerTitle>
            </DrawerHeader>
            <div className='flex gap-[38px] mb-10 flex-col justify-between w-fit'>
              {menuItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    href={item.href}
                    key={item.label}
                    className={`flex items-center gap-4 py-2 text-blueGrey rounded-2xl justify-start px-4 hover:ring-2 hover:ring-primaryBlue hover:text-primaryBlue ${
                      isActive
                        ? 'text-primaryBlue ring-2 bg-[#f6fbfe] ring-primaryBlue'
                        : ''
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={20}
                      height={20}
                    />
                    <span className=''>{item.label}</span>
                  </Link>
                )
              })}
            </div>
            <div className='border-t pt-5'>
              <div className='flex flex-col justify-between'>
                <Progress className='w-full' value={33} />
                <div className='flex w-full text-[10px] items-center justify-between text-gray-400'>
                  <span>210 Photos</span>
                  <span>12/1000 MB Upload</span>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter className='text-center text-gray-400'>
            Vixc version 0.2
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default MobileMenu
