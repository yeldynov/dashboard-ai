import {
  XCircle,
  Calendar,
  MapPin,
  Camera,
  Tag,
  CheckCircle,
  ChevronDown,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

import ReactStars from 'react-rating-stars-component'
import { PhotoData } from '@/types'

interface PhotoDetailsModalProps {
  photoDetails: PhotoData
  onClose: () => void
}

const PhotoDetailsModal: React.FC<PhotoDetailsModalProps> = ({
  photoDetails,
  onClose,
}) => {
  if (!photoDetails) return null

  return (
    <div className='fixed inset-0 flex px-2 lg:px-0 items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg shadow-lg lg:w-[60vw] flex flex-col'>
        {/* Slogan Section */}
        <div className='bg-lightBlueGrey flex items-center justify-between p-4 rounded-t-lg text-center'>
          <h2 className='text-left text-[10px] lg:text-base text-darkGray'>
            Just trying to blend in with my surroundings... but I think I
            overdid it on the pink! #FashionChameleon
          </h2>
          <div className='flex gap-5'>
            <Button className='rounded-3xl lg:flex hidden bg-primaryBlue'>
              Analyze
            </Button>
            <button className=' rounded-full p-2' onClick={onClose}>
              <XCircle color='gray' size={24} />
            </button>
          </div>
        </div>
        <Button className='rounded-3xl mt-2 w-fit mx-auto lg:hidden flex bg-primaryBlue'>
          Analyze
        </Button>
        <div className='flex flex-1 flex-col lg:flex-row'>
          {/* Left part: big photo */}
          <div className='lg:w-1/2 h-[190px] lg:h-[600px] p-4 m-4 flex relative'>
            <Image
              className='w-full h-full object-cover rounded-3xl'
              src={photoDetails.imageLink}
              alt='Selected photo'
              fill
            />
          </div>

          {/* Right part: details */}
          <div className='lg:w-1/2 p-4 pl-2 flex flex-col'>
            <div className='flex justify-between w-full mb-4 items-center'>
              <Image src='/images/above.png' alt='' width={375} height={20} />
            </div>
            <div className='flex items-center mb-2 rounded-xl border p-3 justify-between'>
              <div className='flex gap-3 items-center text-gray-400'>
                <Calendar />
                <span>Uploaded:</span>
              </div>
              <p className='font-medium text-darkGray'>
                {photoDetails.details.uploaded}
              </p>
            </div>

            <div className='flex items-center mb-2 rounded-xl border p-3 justify-between'>
              <div className='flex gap-3 items-center text-gray-400'>
                <Calendar />
                <span>Captured:</span>
              </div>
              <p className='font-medium text-darkGray'>
                {photoDetails.details.captured}
              </p>
            </div>

            <div className='flex items-center mb-2 rounded-xl border p-3 justify-between'>
              <div className='flex gap-3 items-center text-gray-400'>
                <MapPin />
                <span>Location:</span>
              </div>
              <p className='font-medium text-darkGray'>
                {photoDetails.details.location}
              </p>
            </div>

            <div className='flex items-center mb-2 rounded-xl border p-3 justify-between'>
              <div className='flex gap-3 items-center text-gray-400'>
                <Camera />
                <span>Device Type:</span>
              </div>
              <p className='font-medium text-darkGray'>
                {photoDetails.details.deviceType}
              </p>
            </div>

            <div className='flex items-center mb-2 rounded-xl border p-3 justify-between'>
              <div className='flex gap-3 items-center text-gray-400'>
                <Tag />
                <span>Tagged People:</span>
              </div>
              <p className='font-medium text-darkGray'>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown color={'gray'} size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {photoDetails.details.taggedPeople.map((person, index) => (
                      <DropdownMenuItem key={index}>{person}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </p>
            </div>

            <div className='flex items-center mb-2 rounded-xl border p-3 justify-between'>
              <div className='flex gap-3 items-center text-gray-400'>
                <CheckCircle />
                <span>Aesthetic Rating:</span>
              </div>

              {/* Rating as stars */}
              <div className='flex items-center'>
                <div className='flex gap-1'>
                  <ReactStars
                    count={5}
                    value={photoDetails.details.aestheticRating}
                    size={24}
                    color={'lightgray'}
                    activeColor='#ffd700' // Yellow color for active stars
                    edit={false} // Makes the stars read-only
                    isHalf={true} // Enables half stars
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center mb-2 rounded-xl border p-3 justify-between'>
              <div className='flex gap-3 items-center text-gray-400'>
                <Tag />
                <span>Object Labels:</span>
              </div>
              <p className='font-medium text-darkGray'>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown color={'gray'} size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {photoDetails.details.objectLabels.map((person, index) => (
                      <DropdownMenuItem key={index}>{person}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </p>
            </div>

            <div className='flex items-center mb-2 rounded-xl border p-3 justify-between'>
              <div className='flex gap-3 items-center text-gray-400'>
                <Tag />
                <span>Leading Attributes:</span>
              </div>
              <p className='font-medium text-darkGray'>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown color={'gray'} size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {photoDetails.details.leadingAttributes.map(
                      (person, index) => (
                        <DropdownMenuItem key={index}>
                          {person}
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </p>
            </div>

            <div className='flex items-center mb-2 rounded-xl border p-3 justify-between'>
              <div className='flex gap-3 items-center text-gray-400'>
                <Tag />
                <span>Leading Patterns:</span>
              </div>
              <p className='font-medium text-darkGray'>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown color={'gray'} size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {photoDetails.details.leadingPatternsAttributes.map(
                      (person, index) => (
                        <DropdownMenuItem key={index}>
                          {person}
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoDetailsModal
