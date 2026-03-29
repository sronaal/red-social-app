import { useMutation } from "@tanstack/react-query"
import { useAuthStore } from "../store/AuthStore"
import { toast } from "sonner"

export const useCrearUsuarioySesionMutate = () => {
    
    const {crearUserYLogin,credenciales} = useAuthStore()
    
    return useMutation({
        mutationKey: ["Iniciar con email testing"],
        mutationFn: async() => {
            await crearUserYLogin({
                email: credenciales.email,
                password: credenciales.password
            })
        },
        onError: (error) => {
            toast.error(`Error al iniciar sesión: ${error.message}` )
        },
        onSuccess: () => {
            toast.success("Sesión iniciada correctamente")
        }
    })

}