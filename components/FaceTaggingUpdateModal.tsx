'use client'

import { XCircle } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'

interface FaceTaggingUpdateModalProps {
  name: string
  onClose: () => void
}

const FaceTaggingUpdateModal: React.FC<FaceTaggingUpdateModalProps> = ({
  name: initialName,
  onClose,
}) => {
  const [name, setName] = useState(initialName)

  if (!name) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-lg p-6 lg:p-8 flex flex-col'>
        {/* Header */}
        <div className=' flex items-center justify-between p-4 rounded-t-lg'>
          <h2 className='text-left text-sm lg:text-base text-darkGray font-semibold'>
            Edit Name
          </h2>
          <button
            className='rounded-full p-1 hover:bg-gray-200'
            onClick={onClose}
          >
            <XCircle color='gray' size={24} />
          </button>
        </div>

        {/* Name Input */}
        <div className='my-4 flex flex-col'>
          <label
            className='text-darkGray text-sm lg:text-base mb-2'
            htmlFor='name'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border border-gray-300 rounded-lg p-2 lg:p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primaryBlue'
          />
        </div>

        {/* Buttons */}
        <div className='mt-4 flex justify-end gap-4'>
          <Button
            variant={'activePagination'}
            onClick={onClose}
            className='rounded-3xl px-4 py-2 lg:px-6 lg:py-3'
          >
            Cancel
          </Button>
          <Button
            onClick={onClose}
            className='rounded-3xl bg-primaryBlue px-4 py-2 lg:px-6 lg:py-3'
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FaceTaggingUpdateModal
