import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  headerBgColor?: string
}

const BaseLayout = ({ children, headerBgColor = 'white' }: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className={`bg-${headerBgColor}`}>
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export { BaseLayout }
