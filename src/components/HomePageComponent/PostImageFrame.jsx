import React from 'react'

export const PostImageFrame = () => {
    return (
        <div className='rounded-lg overflow-hidden flex items-center justify-center max-h-[500px] bg-red-500'>
            <img src="https://images.unsplash.com/photo-1566895291281-ea63efd4bdbc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDklM0ExNnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='object-contain max-h-[500px] w-full' />
        </div>
    )
}
