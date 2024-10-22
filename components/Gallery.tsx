import Image from 'next/image'

/* eslint-disable @next/next/no-img-element */
export function Gallery() {
  const data = [
    {
      imageLink:
        'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
    },
    {
      imageLink:
        'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
    },
    {
      imageLink:
        'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
    },
    {
      imageLink:
        'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
    },
    {
      imageLink:
        'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
    },
  ]

  return (
    <div className='grid grid-cols-3 gap-2 lg:gap-4 md:grid-cols-5'>
      <div className='h-[152px] lg:h-[348px] cursor-pointer flex flex-col border-dashed border-primaryBlue border-2 rounded-xl items-center justify-center'>
        <div className='flex items-center justify-center w-[24px] h-[24px] lg:w-[74px] lg:h-[74px] bg-lightBlueGrey rounded-md'>
          <Image src='/icons/upload.svg' alt='' width={40} height={40} />
        </div>
        <p className='text-gray-400 px-5 text-[10px] lg:text-lg text-center pt-2 lg:pt-[13px]'>
          Upload New Photo
        </p>
      </div>
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className='h-[152px] lg:h-[348px] w-full max-w-full rounded-lg object-cover object-center'
            src={imageLink}
            alt='gallery-photo'
          />
        </div>
      ))}
    </div>
  )
}
