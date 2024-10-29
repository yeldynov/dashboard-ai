'use client'
import { useState } from 'react'

import { Progress } from '@/components/ui/progress'
import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

import {
  ArrowDownAZ,
  ChevronDown,
  CircleCheckBig,
  DownloadCloud,
  EllipsisVertical,
  Trash2,
} from 'lucide-react'
import { Gallery } from '@/components/Gallery'
import PhotoDetailsModal from '@/components/PhotoDetailsModal'
import { PhotoData } from '@/types'

const data: PhotoData[] = [
  {
    imageLink:
      'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    details: {
      uploaded: '2024-09-01',
      captured: '2023-07-15',
      location: 'New York, USA',
      aestheticRating: 4.8,
      deviceType: 'Canon EOS 5D',
      taggedPeople: ['John Doe', 'Jane Smith'],
      objectLabels: ['Cityscape', 'Skyscraper'],
      leadingAttributes: ['Sharpness', 'Symmetry'],
      leadingPatternsAttributes: ['Grid lines', 'Rule of thirds'],
    },
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    details: {
      uploaded: '2024-08-21',
      captured: '2022-12-10',
      location: 'Tokyo, Japan',
      aestheticRating: 4.7,
      deviceType: 'Sony Alpha 7R IV',
      taggedPeople: ['Alex Kim'],
      objectLabels: ['Temple', 'Cherry Blossom'],
      leadingAttributes: ['Contrast', 'Color Palette'],
      leadingPatternsAttributes: ['Diagonal lines', 'Repetition'],
    },
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    details: {
      uploaded: '2024-07-12',
      captured: '2023-05-18',
      location: 'San Francisco, USA',
      aestheticRating: 4.6,
      deviceType: 'Nikon Z7',
      taggedPeople: ['Chris Green'],
      objectLabels: ['Bridge', 'Fog'],
      leadingAttributes: ['Composition', 'Depth'],
      leadingPatternsAttributes: ['Leading lines', 'Golden ratio'],
    },
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    details: {
      uploaded: '2024-06-30',
      captured: '2022-11-01',
      location: 'Paris, France',
      aestheticRating: 4.9,
      deviceType: 'iPhone 13 Pro Max',
      taggedPeople: ['Emily Clark'],
      objectLabels: ['Eiffel Tower', 'Sunset'],
      leadingAttributes: ['Lighting', 'Framing'],
      leadingPatternsAttributes: ['Symmetry', 'Fibonacci spiral'],
    },
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    details: {
      uploaded: '2024-10-11',
      captured: '2023-03-25',
      location: 'Berlin, Germany',
      aestheticRating: 4.5,
      deviceType: 'Google Pixel 6',
      taggedPeople: ['Sarah Lee'],
      objectLabels: ['Architecture', 'Street Art'],
      leadingAttributes: ['Texture', 'Contrast'],
      leadingPatternsAttributes: ['Rhythm', 'Abstract forms'],
    },
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
    details: {
      uploaded: '2024-09-22',
      captured: '2022-08-05',
      location: 'Sydney, Australia',
      aestheticRating: 4.4,
      deviceType: 'Sony Alpha 7S III',
      taggedPeople: ['Paul Wright'],
      objectLabels: ['Harbor', 'Boats'],
      leadingAttributes: ['Vibrance', 'Clarity'],
      leadingPatternsAttributes: ['Reflections', 'Curved lines'],
    },
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      uploaded: '2024-07-05',
      captured: '2023-02-14',
      location: 'Cape Town, South Africa',
      aestheticRating: 4.3,
      deviceType: 'Canon EOS R6',
      taggedPeople: ['Megan Johnson'],
      objectLabels: ['Beach', 'Waves'],
      leadingAttributes: ['Motion', 'Vivid colors'],
      leadingPatternsAttributes: ['Swirl', 'Radial symmetry'],
    },
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1727731482582-02da5b8afe89?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      uploaded: '2024-08-10',
      captured: '2022-06-20',
      location: 'Santorini, Greece',
      aestheticRating: 4.9,
      deviceType: 'FujiFilm X-T4',
      taggedPeople: ['Anna Brown'],
      objectLabels: ['Cliffs', 'Ocean'],
      leadingAttributes: ['Smoothness', 'Balance'],
      leadingPatternsAttributes: ['Geometric shapes', 'Negative space'],
    },
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
    details: {
      uploaded: '2024-09-15',
      captured: '2023-04-12',
      location: 'Rio de Janeiro, Brazil',
      aestheticRating: 4.8,
      deviceType: 'Samsung Galaxy S21',
      taggedPeople: ['David Garcia'],
      objectLabels: ['Mountains', 'Clouds'],
      leadingAttributes: ['Atmosphere', 'Depth'],
      leadingPatternsAttributes: ['Diagonal lines', 'Natural forms'],
    },
  },
]

const GalleryPage = () => {
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([])
  const [selectedPhotoDetails, setSelectedPhotoDetails] =
    useState<null | PhotoData>(null)

  const handleSelectAll = () => {
    if (selectedPhotos.length === data.length) {
      setSelectedPhotos([]) // Deselect all if already selected
    } else {
      const allIndexes = data.map((_, index) => index)
      setSelectedPhotos(allIndexes) // Select all
    }
  }

  const handlePhotoClick = (photo: PhotoData) => {
    setSelectedPhotoDetails(photo) // Open modal with selected photo
  }

  const closeModal = () => {
    setSelectedPhotoDetails(null) // Close the modal
  }

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
                <DropdownMenuItem>Group-Custom</DropdownMenuItem>
                <DropdownMenuItem>Modify-Date</DropdownMenuItem>
                <DropdownMenuItem>Modify-Location</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={handleSelectAll}
              className='flex items-center hover:bg-gray-100 cursor-pointer gap-2 ring-1 lg:py-2 lg:px-4 p-2 bg-white rounded-full lg:rounded-3xl ring-gray-300 outline-none text-gray-500'
            >
              <CircleCheckBig size={18} />{' '}
              <span className='hidden lg:flex'>
                {selectedPhotos.length === data.length
                  ? 'Deselect All'
                  : 'Select All'}
              </span>
            </button>

            <span className='flex items-center hover:bg-gray-100 cursor-pointer gap-2 ring-1 lg:py-2 lg:px-4 p-2 bg-white rounded-full lg:rounded-3xl ring-gray-300 outline-none text-gray-500'>
              <DownloadCloud size={18} />{' '}
              <span className='hidden lg:flex'>Download</span>
            </span>
            <span className='flex items-center hover:bg-gray-100 cursor-pointer gap-2 ring-1 lg:py-2 lg:px-4 p-2 bg-white rounded-full lg:rounded-3xl ring-gray-300 outline-none text-gray-500'>
              <Trash2 size={18} />{' '}
              <span className='hidden lg:flex'>Delete</span>
            </span>
            <span className='flex items-center hover:bg-gray-100 cursor-pointer gap-2 ring-1 lg:py-2 lg:px-4 p-2 bg-white rounded-full lg:rounded-3xl ring-gray-300 outline-none text-gray-500'>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <ArrowDownAZ size={18} />{' '}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>A-Z</DropdownMenuItem>
                  <DropdownMenuItem>Z-A</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
            <span className='flex lg:hidden items-center hover:bg-gray-100 cursor-pointer gap-2 ring-1 lg:py-2 lg:px-4 p-2 bg-white rounded-full lg:rounded-3xl ring-gray-300 outline-none text-gray-500'>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex lg:hidden'>
                  <EllipsisVertical size={18} />{' '}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Group-Custom</DropdownMenuItem>
                  <DropdownMenuItem>Modify-Date</DropdownMenuItem>
                  <DropdownMenuItem>Modify-Location</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </div>
        </div>
        {/* GALLERY */}
        <div className='lg:mt-6'>
          <Gallery
            data={data}
            selectedPhotos={selectedPhotos}
            setSelectedPhotos={setSelectedPhotos}
            onPhotoClick={handlePhotoClick}
          />

          {selectedPhotoDetails && (
            <PhotoDetailsModal
              photoDetails={selectedPhotoDetails}
              onClose={closeModal}
            />
          )}
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
