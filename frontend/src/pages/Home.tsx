import axios from "axios"
import { AiOutlineEdit} from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


import Spinner from "../components/Spinner"
import { Books } from "../models/Book"


const Home = () => {
  const [books, setBooks] = useState<Books[]>([])
  const [isLoading , setIsLoading] = useState<boolean>(false)
  const [count , setCount ] = useState<number>(0)

  useEffect(()=>{

    setIsLoading(true)
    axios.get('http://localhost:5555/books')
    .then((res)=>{
      console.log(res.data)
      setCount(res.data.count)
      setBooks(res.data.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err.message)
      
    })


  }, [])

  return (
    <div className="  p-5">
      <div className="flex justify-between items-center my-5">
        <h1 className=" font-bold text-3xl">Books List</h1>
        <div className="">
        <Link to={"http://localhost:5173/books/create"} className=" bg-sky-600 hover:bg-sky-300 text-xl py-2 px-3 rounded-lg"><MdOutlineAddBox/></Link>
        </div>
      </div>
      <h1 className=" mb-3">No of Books: {count}</h1>

      {isLoading ? 
      <div className=" flex justify-center items-center pt-16">
        <Spinner/>
      </div> : (
        <>
          <table className=" w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className=" border border-slate-600 rounded-md">No</th>
              <th className=" border border-slate-600 rounded-md">Title</th>
              <th className=" border border-slate-600 rounded-md max-md:hidden">Author</th>
              <th className=" border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
              <th className=" border border-slate-600 rounded-md ">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book)=>(
              <tr>
                <td className="border border-slate-700 rounded-md text-center">{book._id}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.author}</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
                <td className="border border-slate-700 rounded-md">
                  <div className=" flex justify-center gap-x-3">
                  <Link to={`books/details/${book._id}`}>
                    <BsInfoCircle color="blue"/>
                  </Link>
                  <Link to={`books/edit/${book._id}`}>
                  <AiOutlineEdit color="orange"/>
                  </Link>
                  <Link to={`books/delete/${book._id}`}>
                    <MdOutlineDelete color="red"/>
                  </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      ) }
    </div>
  )
}

export default Home