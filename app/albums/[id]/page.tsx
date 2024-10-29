// app/albums/[id]/page.tsx

'use client'
import { useRouter, useParams } from 'next/navigation'
import { AlbumData } from '@/types'
import Image from 'next/image'
import { useState } from 'react'

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

const SingleAlbumPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const router = useRouter()
  const { id } = useParams() // get album id from URL

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openModal = (image: any) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const album = data.find((album) => album.id === parseInt(id as string))

  if (!album) {
    return <p>Album not found</p>
  }

  return (
    <div className='p-8 bg-lightBlueGrey min-h-screen'>
      <h2 className='text-2xl font-bold mb-4'>{album.title}</h2>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {album.previewImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1} in album ${album.title}`}
            width={400}
            height={300}
            onClick={() => openModal(image)}
            className='object-cover w-full cursor-pointer h-full rounded-lg'
          />
        ))}
      </div>
      <button onClick={() => router.back()} className='mt-4 text-blue-500'>
        Go back
      </button>

      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='relative p-4 bg-white rounded-lg'>
            <Image
              src={selectedImage}
              alt='Selected Image'
              width={500}
              height={300}
              className='object-cover rounded-lg'
            />
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 bg-gray-700 text-white rounded-full p-1'
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleAlbumPage
