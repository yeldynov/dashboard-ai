import Image from 'next/image'
import Menu from './Menu'
import Link from 'next/link'
import { DropdownButton } from './ProfileButton'
import MobileMenu from './MobileMenu'

const Navbar = async () => {
  return (
    <div className='flex items-center justify-between max-h-[79px] w-full px-4 lg:px-10 pt-4 gap-12'>
      <div className='flex items-center gap-3'>
        <div className='md:hidden flex items-center text-xs'>
          <MobileMenu />
        </div>
        <Link href='/'>
          <Image src='/logo.png' alt='' width={112} height={110} />
        </Link>
      </div>
      <div className='hidden md:flex items-center text-xs w-full'>
        <Menu />
      </div>

      {/* profile */}
      <DropdownButton />
    </div>
  )
}

export default Navbar
