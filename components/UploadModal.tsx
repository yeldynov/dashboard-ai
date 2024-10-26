import { XCircle } from 'lucide-react'
import Image from 'next/image'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export function UploadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  // Define the hooks at the top level of the component
  const onUpload = () => {
    console.log('Upload files logic...')
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('Files dropped:', acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  // Conditional rendering based on `isOpen`, but after hooks
  if (!isOpen) return null

  return (
    <div className='fixed z-20 inset-0 flex px-2 lg:px-0 items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 lg:w-[540px] flex flex-col relative'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl lg:text-2xl text-center font-medium'>
            Upload Photos to Gallery
          </h2>
          <button
            className='rounded-full text-gray-500 hover:text-black transition-colors'
            onClick={onClose}
          >
            <XCircle color='currentColor' size={24} />
          </button>
        </div>

        <div
          {...getRootProps()}
          className={`flex justify-center items-center bg-lightBlueGrey p-6 border-2 my-3 border-dashed rounded-lg cursor-pointer transition-colors ${
            isDragActive ? 'border-primaryBlue bg-blue-100' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className='text-primaryBlue'>Drop the files here ...</p>
          ) : (
            <div className='flex flex-col items-center justify-center gap-5'>
              <Image
                src='/icons/upload-big.svg'
                alt=''
                width={188}
                height={30}
                className='w-[69px] h-[60px] lg:w-fit lg:h-fit'
              />
              <p className='text-gray-500'>
                Drag and drop files or{' '}
                <span className='text-primaryBlue underline font-medium'>
                  Browse
                </span>
              </p>
              <p className='text-[10px] text-center text-gray-400 leading-[140%]'>
                Once you upload your photos, it will take some time as AI
                generates tags based on your images, making it easier for you to
                find them later.
              </p>
            </div>
          )}
        </div>

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
