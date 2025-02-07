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
    'sm-sp-none': 'hidden sm:block',
    'sm-pc-none': 'sm:hidden',
    'md-sp-none': 'hidden md:block',
    'md-pc-none': 'md:hidden',
    'lg-sp-none': 'hidden lg:block',
    'lg-pc-none': 'lg:hidden',
  }

  return <br className={classMap[type]} />
}

export { Break }
