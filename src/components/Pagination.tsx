import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  totalPages: number
  currentPage: number
  documentType: string
}

const Pagination = ({ totalPages, currentPage, documentType }: Props) => {
  const router = useRouter()
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const previousPage = () => {
    if (!isFirstPage) {
      router.push(`/${documentType}/${currentPage - 1}`)
    }
  }

  const nextPage = () => {
    if (!isLastPage) {
      router.push(`/${documentType}/${currentPage + 1}`)
    }
  }

  return (
    <nav className="pt-20 text-center">
      <ul className="inline-flex items-center -space-x-px">
        {!isFirstPage && (
          <li>
            <button
              onClick={previousPage}
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        )}
        {Array.from({ length: totalPages }, (_, index) => {
          const isActivePage = currentPage === index + 1
          const className = `px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
            isActivePage ? 'bg-blue-100' : 'bg-white'
          }`

          return (
            <li key={index}>
              <Link
                href={`/${documentType}/${index + 1}`}
                className={className}
              >
                {index + 1}
              </Link>
            </li>
          )
        })}
        {!isLastPage && (
          <li>
            <button
              disabled={isLastPage}
              onClick={nextPage}
              className="block px-3 py-2 leading-tight text-gray-500 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export { Pagination }
