/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import { UploadModal } from './UploadModal'
import { useState } from 'react'
import { Edit, Search } from 'lucide-react'

export function FaceTaggingGallery({
  data,
  selectedPhotos,
  setSelectedPhotos,
  onPhotoClick,
}: {
  data: { imageLink: string; name: string }[]
  selectedPhotos: number[]
  setSelectedPhotos: React.Dispatch<React.SetStateAction<number[]>>
  onPhotoClick: (photo: { imageLink: string; name: string }) => void
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLongPress = (index: number) => {
    setSelectedPhotos((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  let pressTimer: NodeJS.Timeout | null = null

  const startPress = (index: number) => {
    pressTimer = setTimeout(() => handleLongPress(index), 200) // 200ms long press
  }

  const cancelPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer)
      pressTimer = null
    }
  }

  const handleUploadClick = () => {
    setIsModalOpen(true)
  }

  return (
    <div className='grid grid-cols-3 gap-2 lg:gap-4 md:grid-cols-4'>
      <button
        onClick={handleUploadClick}
        className='h-[152px] lg:h-[400px] cursor-pointer flex flex-col border-dashed border-primaryBlue border-2 rounded-xl items-center justify-center'
      >
        <div className='flex items-center justify-center w-[24px] h-[24px] lg:w-[74px] lg:h-[74px] bg-lightBlueGrey rounded-md'>
          <Image src='/icons/upload.svg' alt='' width={40} height={40} />
        </div>
        <p className='text-gray-400 px-5 text-[10px] lg:text-lg text-center pt-2 lg:pt-[13px]'>
          Upload New Photo
        </p>
      </button>

      <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {data.map((photo: { imageLink: string; name: string }, index: number) => (
        <div
          key={index}
          onMouseDown={() => startPress(index)}
          onMouseUp={cancelPress}
          onMouseLeave={cancelPress}
          className={`relative h-[152px] lg:h-[400px] w-full max-w-full rounded-lg object-cover object-center cursor-pointer ${
            selectedPhotos.includes(index) ? 'border-4 border-primaryBlue' : ''
          }`}
        >
          <div className='relative w-full h-full object-cover'>
            <img
              className='h-full w-full object-cover rounded-lg'
              src={photo.imageLink}
              alt='gallery-photo'
            />
            <div className='absolute top-2 right-2 bg-white rounded-full shadow-md p-1 w-6 h-6 lg:p-2 lg:w-8 lg:h-8 flex items-center justify-center'>
              <Search className='text-gray w-full h-full' />
            </div>
            {/* Footer with name and edit button */}
            <div className='absolute bottom-0 left-0 right-0 flex justify-between items-center p-2 lg:p-6 bg-white rounded-b-lg shadow-sm'>
              <span className='text-darkGray text-[10px] lg:text-xl font-medium'>
                {photo.name}
              </span>
              <button
                onClick={() => onPhotoClick(photo)}
                className='text-gray-500 font-medium hover:underline'
              >
                <div className=' bg-white rounded-full shadow-md p-1 w-5 h-5 lg:p-2 lg:w-10 lg:h-10 flex items-center justify-center'>
                  <Edit className='text-gray w-full h-full' />
                </div>
              </button>
            </div>
          </div>
          {selectedPhotos.includes(index) && (
            <div className='absolute top-2 left-2  rounded-full p-1'>
              <Image
                src='/icons/checkmark.svg'
                alt='checked'
                width={28}
                height={28}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
