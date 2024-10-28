/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import { UploadModal } from './UploadModal'
import { useState } from 'react'
import { PhotoData } from '@/types'

export function Gallery({
  data,
  selectedPhotos,
  setSelectedPhotos,
  onPhotoClick,
}: {
  data: PhotoData[]
  selectedPhotos: number[]
  setSelectedPhotos: React.Dispatch<React.SetStateAction<number[]>>
  onPhotoClick: (photo: PhotoData) => void
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
    <div className='grid grid-cols-3 gap-2 lg:gap-4 md:grid-cols-5'>
      <button
        onClick={handleUploadClick}
        className='h-[152px] lg:h-[348px] cursor-pointer flex flex-col border-dashed border-primaryBlue border-2 rounded-xl items-center justify-center'
      >
        <div className='flex items-center justify-center w-[24px] h-[24px] lg:w-[74px] lg:h-[74px] bg-lightBlueGrey rounded-md'>
          <Image src='/icons/upload.svg' alt='' width={40} height={40} />
        </div>
        <p className='text-gray-400 px-5 text-[10px] lg:text-lg text-center pt-2 lg:pt-[13px]'>
          Upload New Photo
        </p>
      </button>
      <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {data.map((photo: PhotoData, index: number) => (
        <div
          key={index}
          onMouseDown={() => startPress(index)}
          onMouseUp={cancelPress}
          onMouseLeave={cancelPress}
          onClick={() => onPhotoClick(photo)}
          className={`relative h-[152px] lg:h-[348px] w-full max-w-full rounded-lg object-cover object-center cursor-pointer ${
            selectedPhotos.includes(index) ? 'border-4 border-primaryBlue' : ''
          }`}
        >
          <img
            className='h-full w-full object-cover rounded-lg'
            src={photo.imageLink}
            alt='gallery-photo'
          />
          {selectedPhotos.includes(index) && (
            <div className='absolute top-2 right-2  rounded-full p-1'>
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
