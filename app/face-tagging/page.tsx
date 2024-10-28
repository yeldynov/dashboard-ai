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

import { ArrowDownAZ, CircleCheckBig, Trash2 } from 'lucide-react'
import { FaceTaggingGallery } from '@/components/FaceTaggingGallery'
import FaceTaggingUpdateModal from '@/components/FaceTaggingUpdateModal'

const data: { imageLink: string; name: string }[] = [
  {
    imageLink:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Liam Brown',
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    name: 'Emma Clark',
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    name: 'Noah Williams',
  },

  {
    imageLink:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Ethan Davis',
  },

  {
    imageLink:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    name: 'Sophia Garcia',
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'James Wilson',
  },
  {
    imageLink:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Amelia Lee',
  },
]

const FaceTaggingPage = () => {
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([])
  const [selectedPhotoDetails, setSelectedPhotoDetails] = useState<null | {
    imageLink: string
    name: string
  }>(null)

  const handleSelectAll = () => {
    if (selectedPhotos.length === data.length) {
      setSelectedPhotos([]) // Deselect all if already selected
    } else {
      const allIndexes = data.map((_, index) => index)
      setSelectedPhotos(allIndexes) // Select all
    }
  }

  const handlePhotoClick = (photo: { imageLink: string; name: string }) => {
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
              <Image src='/icons/scanning.svg' alt='' width={24} height={24} />
              <h2>Face Tagging</h2>
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
          </div>
        </div>
        {/* GALLERY */}
        <div className='lg:mt-6'>
          <FaceTaggingGallery
            data={data}
            selectedPhotos={selectedPhotos}
            setSelectedPhotos={setSelectedPhotos}
            onPhotoClick={handlePhotoClick}
          />

          {selectedPhotoDetails && (
            <FaceTaggingUpdateModal
              name={selectedPhotoDetails.name}
              onClose={closeModal}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default FaceTaggingPage
