'use client'
//import StoreProvider from "@/redux/provider/StoreProvider"
import AuthProvider from "@/components/AuthProvider"
import { Provider } from 'react-redux'
import {store} from '@/redux/store'

const Providers = ({ children }) => {
  return (
    <AuthProvider>
     <Provider store={store}>
      {children}
      </Provider>
    </AuthProvider>
  )
}

export default Providers
