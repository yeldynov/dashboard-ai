import { XCircle } from 'lucide-react'

export function UploadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  const onUpload = () => {
    console.log('Upload files logic...')
  }

  return (
    <div className='fixed z-20 inset-0 flex px-2 lg:px-0 items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 lg:w-[60vw] justify-between flex flex-col relative'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl text-center font-medium mb-4'>
            Upload Photos to Gallery
          </h2>
          <button className=' rounded-full p-2' onClick={onClose}>
            <XCircle color='gray' size={24} />
          </button>
        </div>
        <input type='file' className='mb-4' />
        <button
          className='mt-auto px-4 py-2 bg-primaryBlue text-white rounded-3xl'
          onClick={onUpload}
        >
          Upload Images
        </button>
      </div>
    </div>
  )
}
