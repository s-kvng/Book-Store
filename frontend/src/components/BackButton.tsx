import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    destination: string
}
const BackButton: React.FC<Props> = ({ destination}) => {
  return (
    <div className='flex'>
        <Link to={destination} className=' bg-sky-500 text-white px-4 py-1 w-fit rounded-lg'>
            Back
        </Link>
    </div>
  )
}

export default BackButton