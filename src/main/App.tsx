import HomeInicial from "@/cases/home/HomeInicial"
import ListarProdutos from "@/cases/produto/Listarprodutos"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, Routes } from "react-router-dom"

function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>

      <Routes>

        <Route path="/" element={<HomeInicial />} />

        <Route path="/produto/:id" element={<ListarProdutos />}/>

      </Routes>

    </QueryClientProvider>
  )
}

export default App
