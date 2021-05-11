import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { createWrapper } from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from '../store/index'



function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>

      <Component {...pageProps} />

      </PersistGate>

    </Provider>
  )
}


const makeStore = () => store

const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
