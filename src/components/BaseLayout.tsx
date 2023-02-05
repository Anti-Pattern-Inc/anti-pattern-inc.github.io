import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export { BaseLayout }
