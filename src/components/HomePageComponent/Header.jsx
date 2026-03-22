import { Icon } from '@iconify/react'

export const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Inicio</h1>
            <button className="flex gap-2 items-center">
                <span className="font-semibold text-gray-500/80">200 usuarios</span>
                <Icon icon="mdi:dots-vertical" className="textl-2xl text-gray-400" />
            </button>
        </div>
    )
}
