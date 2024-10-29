/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import { UploadModal } from './UploadModal'
import { useState } from 'react'
import { AlbumData } from '@/types'
import { Share2, Trash2 } from 'lucide-react'

export function AlbumsGallery({
  data,
  onAlbumClick,
}: {
  data: AlbumData[]
  onAlbumClick: (id: number) => void
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleUploadClick = () => {
    setIsModalOpen(true)
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {/* Upload Button */}
      <button
        onClick={handleUploadClick}
        className='h-[152px] lg:h-[300px] cursor-pointer flex flex-col border-dashed border-primaryBlue border-2 rounded-xl items-center justify-center'
      >
        <div className='flex items-center justify-center w-[24px] h-[24px] lg:w-[74px] lg:h-[74px] bg-lightBlueGrey rounded-md'>
          <Image src='/icons/upload.svg' alt='' width={40} height={40} />
        </div>
        <p className='text-gray-400 px-5 text-[10px] lg:text-lg text-center pt-2 lg:pt-[13px]'>
          Create New Album
        </p>
      </button>
      <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Album Cards */}
      {data.map((album: AlbumData, index: number) => (
        <div
          key={index}
          onClick={() => onAlbumClick(album.id)}
          className='relative h-[152px] lg:h-[300px] w-full rounded-lg cursor-pointer overflow-hidden bg-white shadow-md'
        >
          <div className='grid grid-cols-2 hover:brightness-75 grid-rows-2 h-[80%]'>
            {album.previewImages.slice(0, 4).map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`album-preview-${i}`}
                className='object-cover h-full w-full'
              />
            ))}
          </div>

          {/* Footer with name and total images */}
          <div className='absolute bottom-0 w-full bg-white p-2 lg:p-4 flex justify-between items-center shadow-sm'>
            <span className='text-darkGray text-[10px] lg:text-xl font-medium'>
              {album.title}
            </span>
            <span className='text-gray-500 text-sm'>+{album.totalImages}</span>
          </div>

          {/* Action buttons */}
          <div className='absolute top-2 right-2 flex flex-col space-y-2'>
            <button className='bg-white hover:brightness-75 p-2 rounded-full shadow'>
              <Trash2 color='red' size={20} />
            </button>
            <button className='bg-white hover:brightness-75 p-2 rounded-full shadow'>
              <Share2 color='gray' size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
