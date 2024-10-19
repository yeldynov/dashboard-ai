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
    <div className='w-full min-h-screen p-8 bg-lightBlueGrey'>
      <main className='flex flex-col gap-8'>
        {/* top */}
        <div className='flex gap-6'>
          {/* top left */}
          <div className='gap-6 card w-3/4'>
            <div className='flex items-center justify-between w-full'>
              <h2>Search, Categorize and Group your photos effortlessly!</h2>
              <Link className='flex gap-4 text-blue-400' href='/gallery'>
                View All
                <Image
                  src='/icons/arrow-right.svg'
                  alt=''
                  width={6}
                  height={8}
                />
              </Link>
            </div>
            <div className='flex justify-between gap-[14px]'>
              <Image src='/images/image1.png' alt='' width={177} height={248} />
              <Image src='/images/image2.png' alt='' width={177} height={248} />
              <Image src='/images/image3.png' alt='' width={177} height={248} />
              <Image src='/images/image4.png' alt='' width={177} height={248} />
              <div className='w-[177px] h-[248px] cursor-pointer flex flex-col border-dashed border-primaryBlue border-2 rounded-xl items-center justify-center'>
                <div className='flex items-center justify-center w-[44px] h-[44px] bg-lightBlueGrey rounded-md'>
                  <Image
                    src='/icons/upload.svg'
                    alt=''
                    width={20}
                    height={20}
                  />
                </div>
                <p className='text-gray-400 px-5 text-center pt-[13px]'>
                  Upload New Photo
                </p>
              </div>
            </div>
          </div>
          {/* top right */}
          <div className='card w-1/4'>
            <HowCarousel />
          </div>
        </div>
        {/* bottom */}
        <div className='flex gap-6'>
          {/* bottom 1 */}
          <div className='gap-2 card h-[400px] w-1/4'>
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
          <div className='card flex flex-1 justify-between h-[400px] px-0 items-center'>
            <div className='flex items-center justify-between gap-4 '>
              <h2>Daily Summary</h2>
              <div className='flex items-center'>
                {dailyBarChartlegendItems.map((item, index) => (
                  <div key={index} className='flex items-center mr-5'>
                    <span
                      className='inline-block w-3 h-3 mr-2 rounded-full'
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className='text-sm'>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <DailyBarChart />
          </div>
          {/* bottom 3 */}
          <div className='card w-1/4'>
            <div className='flex items-center justify-between w-full'>
              <h2>Usage Details</h2>
              <Link className='flex gap-4 text-blue-400' href='/gallery'>
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
