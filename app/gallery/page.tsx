import { Progress } from '@/components/ui/progress'
import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { ChevronDown, CircleCheckBig, DownloadCloud } from 'lucide-react'
import { Gallery } from '@/components/Gallery'

const GalleryPage = () => {
  return (
    <div className='w-full min-h-screen p-[14px] lg:p-8 bg-lightBlueGrey'>
      <main className='flex flex-col gap-8'>
        {/* top */}
        <div className='flex items-center justify-between'>
          {/* top left */}
          <div className='flex gap-5'>
            <div className='flex items-center gap-3'>
              <Image src='/icons/gallery.svg' alt='' width={24} height={24} />
              <h2>My Gallery</h2>
            </div>
            <div className='hidden lg:flex flex-col items-center justify-between p-4 bg-white rounded-2xl shadow-lg'>
              <Progress className='w-[201px]' value={33} />
              <div className='flex w-full text-[10px] items-center justify-between text-gray-400'>
                <span>210 Photos</span>
                <span>12/1000 MB Upload</span>
              </div>
            </div>
          </div>
          {/* top right */}
          <div className='flex gap-3'>
            <DropdownMenu>
              <DropdownMenuTrigger className='hidden lg:flex'>
                <span className='flex items-center hover:bg-gray-100 cursor-pointer gap-1 ring-1 py-2 px-4 bg-white rounded-3xl ring-gray-300 outline-none text-gray-500'>
                  Action <ChevronDown size={18} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions List</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Action 1</DropdownMenuItem>
                <DropdownMenuItem>Action 2</DropdownMenuItem>
                <DropdownMenuItem>Action 3</DropdownMenuItem>
                <DropdownMenuItem>Action 4</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <span className='flex items-center hover:bg-gray-100 cursor-pointer gap-2 ring-1 lg:py-2 lg:px-4 p-2 bg-white rounded-full lg:rounded-3xl ring-gray-300 outline-none text-gray-500'>
              <CircleCheckBig size={18} />{' '}
              <span className='hidden lg:flex'>Select All</span>
            </span>

            <span className='flex items-center hover:bg-gray-100 cursor-pointer gap-2 ring-1 lg:py-2 lg:px-4 p-2 bg-white rounded-full lg:rounded-3xl ring-gray-300 outline-none text-gray-500'>
              <DownloadCloud size={18} />{' '}
              <span className='hidden lg:flex'>Download</span>
            </span>
          </div>
        </div>
        {/* GALLERY */}
        <div className='lg:mt-6'>
          <Gallery />
        </div>
        {/* Pagination */}
        <div className='flex self-end'>
          <Pagination>
            <PaginationContent className='gap-2'>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className='ring-1 ring-gray-300  hover:ring-primaryBlue font-medium'
                  href='#'
                  isActive
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className='ring-1 ring-gray-300 hover:ring-primaryBlue font-medium'
                  href='#'
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className='ring-1 ring-gray-300 hover:ring-primaryBlue font-medium'
                  href='#'
                >
                  9
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className='ring-1 ring-gray-300 hover:ring-primaryBlue font-medium'
                  href='#'
                >
                  10
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  )
}

export default GalleryPage
