import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
              // Puedes agregar opciones predeterminadas como tiempos de reintento o manejo de errores
            retry: 1,
            refetchOnWindowFocus: false,

        }
    }
})

export default queryClient;