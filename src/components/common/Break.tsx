import React from 'react'

type BreakProps = {
  type:
    | 'sm-sp-none'
    | 'sm-pc-none'
    | 'md-sp-none'
    | 'md-pc-none'
    | 'lg-sp-none'
    | 'lg-pc-none'
}

const Break: React.FC<BreakProps> = ({ type }) => {
  const classMap = {
    'sm-sp-none': 'sm:hidden',
    'sm-pc-none': 'hidden sm:block',
    'md-sp-none': 'md:hidden',
    'md-pc-none': 'hidden md:block',
    'lg-sp-none': 'lg:hidden',
    'lg-pc-none': 'hidden lg:block',
  }

  return <br className={classMap[type]} />
}

export { Break }
