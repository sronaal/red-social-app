import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";

export function useImageExtracColor(imgRef, src) {

    const [bgColor, setBgColor] = useState("#e5e7eb")

    useEffect(() => {
        const fac = new FastAverageColor()
        const img = imgRef.current

        if (!img) return;

        const handleLoad = async () => {
            try {
                const color = await fac.getColorAsync(img);
                setBgColor(color.hex)
            } catch (error) {
                console.warn("No se puedo obtener el color promedio, usando color grid por defecto")

            }
        }
        if (img.complete) {
            handleLoad()
        } else {
            img.addEventListener("load", handleLoad)
            return () => {
                img.removeEventListener("load", handleLoad)
            }
        }


    }, [src])

    return bgColor

} 