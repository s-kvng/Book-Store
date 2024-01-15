import React from 'react'

type Props =   {
    className: string,
    name: string
}

const Button: React.FC<Props>  = ({ className , name }) => {
  return (
    <div className={`border-none rounded-lg px-5 py-3 cursor-pointer ` + className} >{name}</div>
  )
}

export default Button