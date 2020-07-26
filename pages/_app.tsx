import { AppPropsType } from 'next/dist/next-server/lib/utils'
import 'styles/app.css'

export default function MyApp({ Component, pageProps }: AppPropsType) {
  return <Component {...pageProps} />
}
