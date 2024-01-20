import React from 'react'

type Props =   {
    className: string,
    name: string,
    types: "button" | "reset" | "submit" | undefined,
    onClick?: ()=> void
}

const Button: React.FC<Props>  = ({ className = "" , name , types, onClick}) => {
  return (
    <button onClick={onClick} type={types}  className={`border-none rounded-lg px-5 py-3 cursor-pointer ` + className} >{name}</button>
  )
}

export default Button