import GetCategory from "@/cases/categories/components/GetCategy"
import HomeInicial from "@/cases/home/components/Home"
import GetProduct from "@/cases/products/components/GetProduct"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, Routes } from "react-router-dom"

function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

      <Header />

      <Routes>

        <Route path="/" element={<HomeInicial />} />

        <Route path="/produto/:id" element={<GetProduct />}/>

        <Route path="/categoria/:id" element={<GetCategory />}/>

      </Routes>
      
      <Footer />

      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
