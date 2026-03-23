import { Icon } from '@iconify/react'
import React from 'react'
import { PostImageFrame } from './PostImageFrame'

export const PublicacionCard = () => {
    return (
        <div className='border-b border-gray-500/50 p-4'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocKxESgokM1qYOlI7E8eT7TeEr_0Sqw7QkJZsvmzJoQzpYXUpRvy=s288-c-no" alt="" className='w-12 h-12 rounded-full object-cover' />
                    <span className='font-bold '>
                        nombre de usuario
                    </span>

                </div>
                <div className='flex items-center gap-2 text-gray-500'>
                    <span className='text-sm whitespace-nowrap'>Hace 8h</span>
                    <button>
                        <Icon icon="mdi:dots-vertical" className="text-2xl" />
                    </button>
                </div>

            </div>
            <div className='mt-3'>
                <p className='mb-2'>Titulo</p>
                <div>
                    <PostImageFrame src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmC4lseasIb9oyTvHOQaySzYBooGkURHbaA&s"} />
                </div>
                <div className='flex justify-between mt-4'>
                    <button>
                        <Icon icon="mdi:heart-outline" className="text-3xl p-1 rounded-full text-gray-300 hover:bg-gray-600 cursor-pointer" />
                    </button>
                    <button>
                        <Icon icon="mdi:comment-outline" className="text-3xl p-1 rounded-full text-gray-300 hover:bg-gray-600 cursor-pointer" />
                    </button>
                    <button>
                        <Icon icon="mdi:share-outline" className="text-3xl p-1 rounded-full text-gray-300 hover:bg-gray-600 cursor-pointer" />
                    </button>
                </div>

            </div>
        </div>
    )
}
