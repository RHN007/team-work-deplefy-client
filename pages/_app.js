
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AuthProvider from '../context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {

  return <ThemeProvider enableSystem={true} attribute="class">
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
    <AuthProvider>
    <div>
      <div className="header lg:px-[108px]">
        <Header></Header>
      </div>
      <Component {...pageProps} />
      <ToastContainer />
      <div className="bg-black text-white dark:bg-slate-900 lg:px-[108px]">
        <Footer></Footer>
      </div>
    </div>
  </AuthProvider>
      </Hydrate>
    </QueryClientProvider>
  </ThemeProvider>
}


