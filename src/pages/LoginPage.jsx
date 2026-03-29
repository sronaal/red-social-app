import { Icon } from '@iconify/react'

export const LoginPage = () => {
    return (
        <div className='flex h-screen w-full'>
            {/** Lado Izquierdo */}

            <section className='hidden md:flex  bg-[#00b0f0] w-1/2 flex-col justify-center items-center overflow-hidden'>
                <div className='px-8'>
                    <span className='flex items-center gap-2'>
                        <Icon icon="proicons:code" className='w-20 h-20 text-white font-bold' />
                        <h1 className='text-5xl font-bold text-white'>OnlyDevs</h1>
                    </span>
                    <p className='text-white text-xl mt-4'>Conecta con desarrolladores de todo el mundo</p>
                </div>
            </section>
            {/** Lado Derecho */}
            <section className='w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 py-8'>

                <div className='w-full max-w-md'>
                    <h1 className='text-2xl font-medium mb-6 text-center'>Iniciar Sesión</h1>
                    <form>
                        <div className='mb-4'>
                            <input type="text" className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aff0]' placeholder='Correo electrónico o nombre de usuario' />
                        </div>
                        <div className='mb-4'>
                            <input type="password" className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aff0]' placeholder='Contraseña' />
                        </div>
                        <button type="submit" className='w-full bg-[#00aff0] text-white py-3 rounded-lg hover:bg-[#0099cc] transition-colors'>Iniciar Sesión</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
