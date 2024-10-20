import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

import dynamic from 'next/dynamic'
import { HowCarousel } from '@/components/HowCarousel'

const DonutChart = dynamic(() => import('@/components/DonutChart'), {
  ssr: false,
})
const DailyBarChart = dynamic(() => import('@/components/DailyBarChart'), {
  ssr: false,
})

const dailyBarChartlegendItems = [
  { name: 'Gallery Photos Count', color: '#ff8976' },
  { name: 'Tagged Faces Count', color: '#805ad5' },
]

export default function Dashboard() {
  return (
    <div className='w-full min-h-screen p-[14px] lg:p-8 bg-lightBlueGrey'>
      <main className='flex flex-col gap-8'>
        {/* top */}
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* top left */}
          <div className='gap-1.5 lg:gap-6 card w-full lg:w-3/4'>
            <div className='flex items-center pb-6 justify-between w-full'>
              <h2 className='pr-2'>
                Search, Categorize and Group your photos effortlessly!
              </h2>
              <Link
                className='flex gap-3 text-sm text-nowrap lg:text-base text-blue-400'
                href='/gallery'
              >
                View All
                <Image
                  src='/icons/arrow-right.svg'
                  alt=''
                  width={6}
                  height={8}
                />
              </Link>
            </div>
            <div className='flex flex-row-reverse lg:flex-row justify-between gap-1.5 lg:gap-[14px]'>
              <Image
                src='/images/image1.png'
                alt=''
                width={177}
                height={248}
                className='w-[73px] h-[90px] sm:w-[120px] sm:h-[160px] md:w-[150px] md:h-[200px] lg:w-[177px] lg:h-[248px]'
              />
              <Image
                src='/images/image2.png'
                alt=''
                width={177}
                height={248}
                className='w-[73px] h-[90px] sm:w-[120px] sm:h-[160px] md:w-[150px] md:h-[200px] lg:w-[177px] lg:h-[248px]'
              />
              <Image
                src='/images/image3.png'
                alt=''
                width={177}
                height={248}
                className='w-[73px] h-[90px] sm:w-[120px] sm:h-[160px] md:w-[150px] md:h-[200px] lg:w-[177px] lg:h-[248px]'
              />
              <Image
                className='hidden xl:flex'
                src='/images/image4.png'
                alt=''
                width={177}
                height={248}
              />
              <div className='w-[73px] h-[90px] sm:w-[120px] sm:h-[160px] md:w-[150px] md:h-[200px] lg:w-[177px] lg:h-[248px] cursor-pointer flex flex-col border-dashed border-primaryBlue border-2 rounded-xl items-center justify-center'>
                <div className='flex items-center justify-center w-[24px] h-[24px] lg:w-[44px] lg:h-[44px] bg-lightBlueGrey rounded-md'>
                  <Image
                    src='/icons/upload.svg'
                    alt=''
                    width={20}
                    height={20}
                  />
                </div>
                <p className='text-gray-400 px-5 text-[10px] lg:text-base text-center pt-2 lg:pt-[13px]'>
                  Upload New Photo
                </p>
              </div>
            </div>
          </div>
          {/* top right */}
          <div className='card w-full lg:w-1/4'>
            <HowCarousel />
          </div>
        </div>
        {/* bottom */}
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* bottom 1 */}
          <div className='gap-2 card w-full lg:w-1/4'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex gap-2.5'>
                <h2>Trial Tier Quota</h2>
                <Image
                  src='/icons/info-circle.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <Badge className='bg-[#fef4f0] px-4 py-1.5 rounded-xl hover:bg-orange-100 text-orange-500 font-normal'>
              Trial Version Active
            </Badge>

            <DonutChart />
          </div>
          {/* bottom 2 */}
          <div className='card flex w-full lg:flex-1 justify-between px-0 items-center'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4 '>
              <h2>Daily Summary</h2>
              <div className='flex items-center'>
                {dailyBarChartlegendItems.map((item, index) => (
                  <div key={index} className='flex items-center mr-5'>
                    <span
                      className='inline-block w-3 h-3 mr-2 rounded-full'
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className='text-[10px] lg:text-sm'>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <DailyBarChart />
          </div>
          {/* bottom 3 */}
          <div className='card w-full lg:w-1/4'>
            <div className='flex items-center justify-between w-full'>
              <h2>Usage Details</h2>
              <Link
                className='flex gap-4 text-sm lg:text-base text-blue-400'
                href='/gallery'
              >
                View All
                <Image
                  src='/icons/arrow-right.svg'
                  alt=''
                  width={6}
                  height={8}
                />
              </Link>
            </div>
            <p className='text-[#919396] mt-[14px] mb-6'>
              See your Upload, Analyze, and Search limits usage for this billing
              cycle.
            </p>

            <div className='w-full flex flex-col gap-[34px]'>
              <div className='h-[58px] w-full px-4 py-[19px] flex justify-between rounded-xl bg-gradient-to-r from-[#3DB8FE] to-white'>
                <span className='text-white'>Search</span>
                <span>60%</span>
              </div>
              <div className='h-[58px] w-full px-4 py-[19px] flex justify-between rounded-xl bg-gradient-to-r from-[#FFBD44] to-white'>
                <span className='text-white'>Detection</span>
                <span>80%</span>
              </div>
              <div className='h-[58px] w-full px-4 py-[19px] flex justify-between rounded-xl bg-gradient-to-r from-[#FB896B] to-white'>
                <span className='text-white'>Storage</span>
                <span>90%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* TODO: chat absolute icon */}
    </div>
  )
}
