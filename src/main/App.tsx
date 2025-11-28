import SignInForm from "@/cases/auth/components/signIn-form"
import SignUpForm from "@/cases/auth/components/signUp-form"
import { AuthContextProvider } from "@/cases/auth/contexts/auth.context"
import { CartProvider } from "@/cases/carrinho/components/CartProvider"
import LayoutCarrinho from "@/cases/carrinho/components/LayoutCarrinho"
import GetCategory from "@/cases/categories/components/GetCategy"
import HomeInicial from "@/cases/home/components/Home"
import GetProduct from "@/cases/products/components/GetProduct"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />

      <AuthContextProvider>

        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <CartProvider>

            <Header />

            <Routes>

              <Route path="/login" element={<SignInForm />}/>
              <Route path="/increver-se" element={<SignUpForm />}/>
              
              <Route path="/" element={<HomeInicial />} />

              <Route path="/produto/:id" element={<GetProduct />}/>

              <Route path="/categoria/:id" element={<GetCategory />}/>

              <Route path="/carrinho" element={<LayoutCarrinho />}/>


            </Routes>
            
            <Footer />
            
          </CartProvider>
        </ThemeProvider>

      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
