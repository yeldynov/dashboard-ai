'use client'

import Image from 'next/image'

import { BrainCircuit, FolderPen } from 'lucide-react'
import { AlbumData } from '@/types'
import { AlbumsGallery } from '@/components/AlbumsGallery'

const data: AlbumData[] = [
  {
    id: 1,
    title: 'Hills Images',
    totalImages: 54,
    previewImages: [
      'https://plus.unsplash.com/premium_photo-1673264933061-f1ea43b13032?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlsbHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1471443290059-92acdee54040?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlsbHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1523149394814-4649a15b95fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlsbHxlbnwwfHwwfHx8MA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlsbHxlbnwwfHwwfHx8MA%3D%3D',
    ],
  },
  {
    id: 2,
    title: 'London Trip',
    totalImages: 14,
    previewImages: [
      'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1679470310712-82c0a39cd41d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZG9ufGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1671809692422-4893b9e09119?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9uZG9ufGVufDB8fDB8fHww',
    ],
  },
  {
    id: 3,
    title: 'Goa Trip',
    totalImages: 65,
    previewImages: [
      'https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1722450235254-05ed0d5bea91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1685271552630-9bc169185566?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29hfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1541738679621-172e4575a81d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29hfGVufDB8fDB8fHww',
    ],
  },
  {
    id: 4,
    title: 'My Dream House',
    totalImages: 24,
    previewImages: [
      'https://plus.unsplash.com/premium_photo-1683891068536-2467572c9a2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlYW0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1646240531468-2c263f1b19e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlYW0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlYW0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1623241187960-4a57f68560ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlYW0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    ],
  },
  {
    id: 5,
    title: 'Office Images',
    totalImages: 12,
    previewImages: [
      'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
    ],
  },
  {
    id: 6,
    title: 'My Family',
    totalImages: 51,
    previewImages: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      'https://images.unsplash.com/photo-1534081333815-ae5019106622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lzdGVyfGVufDB8fDB8fHww',
    ],
  },
]

const AlbumsPage = () => {
  function handleClick(id: number): void {
    console.log(id)
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
              <h2>Albums</h2>
            </div>
          </div>
          {/* top right */}
          <div className='flex gap-3'>
            <span className='flex items-center active hover:bg-gray-100 cursor-pointer gap-2 ring-1 lg:py-2 lg:px-4 p-2 bg-white rounded-full lg:rounded-3xl ring-gray-300 outline-none text-gray-500'>
              <FolderPen size={18} />{' '}
              <span className='hidden lg:flex'>Custom</span>
            </span>
            <span className='flex items-center hover:bg-gray-100 cursor-pointer gap-2 ring-1 lg:py-2 lg:px-4 p-2 bg-white rounded-full lg:rounded-3xl ring-gray-300 outline-none text-gray-500'>
              <BrainCircuit size={18} />{' '}
              <span className='hidden lg:flex'>Ai Generated</span>
            </span>
          </div>
        </div>
        {/* GALLERY */}
        <div className='lg:mt-6'>
          <AlbumsGallery data={data} onAlbumClick={handleClick} />
        </div>
      </main>
    </div>
  )
}

export default AlbumsPage
