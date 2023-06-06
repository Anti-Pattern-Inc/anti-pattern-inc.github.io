import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Location', '/news/1')
  context.res.statusCode = 302
  return { props: {} }
}

const RedirectToFirstPage = () => null

export default RedirectToFirstPage
