import { Footer } from 'components/layouts/Footer'
import { Header } from 'components/layouts/Header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  headerBgColor?: string
}

const BaseLayout = ({ children, headerBgColor = 'white' }: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <div className={`bg-${headerBgColor}`}>
          <Header />
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export { BaseLayout }
