import HomeInicial from "@/cases/home/components/HomeInicial"
import GetProduto from "@/cases/products/components/GetProduto"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, Routes } from "react-router-dom"

function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>

      <Routes>

        <Route path="/" element={<HomeInicial />} />

        <Route path="/produto/:id" element={<GetProduto />}/>

      </Routes>

    </QueryClientProvider>
  )
}

export default App
