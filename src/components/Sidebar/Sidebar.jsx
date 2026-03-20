import { Icon } from "@iconify/react"
import { NavLink } from "react-router-dom"

export const Sidebar = () => {

  const links = [
    {
      label: 'Inicio',
      icon: 'ic:baseline-home',
      to: '/'
    },
    {
      label: 'Notificaciones',
      icon: 'ic:baseline-notifications',
      to: '/notifaciones'
    },
    {
      label: 'Mensajes',
      icon: 'ic:baseline-message',
      to: '/mensajes'
    },
    {
      label: 'Colecciones',
      icon: 'ic:baseline-bookmark',
      to: '/colecciones'
    },
    {
      label: 'Subcripciones',
      icon: 'ic:baseline-subscriptions',
      to: '/subcripciones'

    },
    {
      label: 'Perfil',
      icon: 'ic:baseline-account-circle',
      to: '/perfil'
    },
    {
      label: 'Añadir tarjeta',
      icon: 'ic:baseline-credit-card',
      to: '/tarjeta'
    }
  ]


  return (
    <div className='h-screen p-2 bg-white dark:bg-bg-dark transition-all duration-300'>
      { /* Logo */}
      <div className=''>
        OnlyDevs
      </div>
      { /* Nav */}
      <nav className='flex-1 flex flex-col gap-2 items-center'>

        {
          links.map((item,index) => {
            return (
              <NavLink key={index} to={item.to} className={({isActive}) => `flex items-center gap-3 p-2 sm:px-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-primary/10 dark:hover:text-primary transition-all w-full justify-start ${
              isActive ? "text-blue-600 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}>
                <Icon icon={item.icon} width={24} height={24} />
                <span>{item.label}</span>
              </NavLink>
            )
          })
        }
      </nav>
    </div>
  )
}
