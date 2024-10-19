import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'

export function HowCarousel() {
  const steps = [
    {
      img: '/images/step1.png',
      title: 'Step 01 - Upload',
      content:
        'You just upload your images, and VIXC automatically creates tags based on the uploaded photos, like the below tags:-',
    },
    {
      img: '/images/step2.png',
      title: 'Step 02 - Search',
      content:
        'Now you can search with phrases like, “Get me all the pictures from my trip to London in December 2023.”',
    },
    {
      img: '/images/step3.png',
      title: 'Step 03 - Group',
      content:
        'The system will return 100 pictures. You can select all with one click and create a custom group called "London"',
    },
    {
      img: '/images/step4.png',
      title: 'Step 04 - Download',
      content:
        'When you download, you\'ll receive a zipped folder named "London" containing 100 pictures.',
    },
  ]

  return (
    <Carousel className='w-full max-w-xs'>
      <div className='flex justify-between'>
        <h2>How it works</h2>
        <CarouselControls />
      </div>
      <CarouselContent>
        {steps.map((step, index) => (
          <CarouselItem key={index}>
            <div className='p-0 flex flex-col gap-2'>
              <h3 className='font-medium text-primaryBlue'>{step.title}</h3>
              <p className='text-sm text-gray-400'>{step.content}</p>
              <Image
                className='self-center'
                src={step.img}
                alt=''
                width={220}
                height={120}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
