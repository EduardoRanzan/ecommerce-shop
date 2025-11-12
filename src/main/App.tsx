import HomeInicial from "@/cases/home/components/HomeInicial"
import GetProduto from "@/cases/products/components/GetProduto"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, Routes } from "react-router-dom"

function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">


      <Routes>

        <Route path="/" element={<HomeInicial />} />

        <Route path="/produto/:id" element={<GetProduto />}/>

      </Routes>

      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
