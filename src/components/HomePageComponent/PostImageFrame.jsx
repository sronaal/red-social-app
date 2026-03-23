import { useRef } from "react"
import { useImageExtracColor } from "../../hooks/useImageExtracColor"

export const PostImageFrame = ({ src }) => {

    const imgRef = useRef(null)
    const bgColor = useImageExtracColor(imgRef, src)

    return (
        <div className='rounded-lg overflow-hidden flex items-center justify-center max-h-[500px]' style={{ backgroundColor: bgColor }}>
            <img ref={imgRef} src={src}
                crossOrigin="anonymous"
                className='object-contain max-h-[500px] w-full' />
        </div>
    )
}
