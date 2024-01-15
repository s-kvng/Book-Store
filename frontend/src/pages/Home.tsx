import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Button from "../components/Button"
import Spinner from "../components/Spinner"

const Home = () => {
  const [books, setBooks] = useState<Object[]>([])
  const [isLoading , setIsLoading] = useState<boolean>(false)

  useEffect(()=>{

    setIsLoading(true)
    axios.get('http//:localhost:3000')
    .then((res)=>{
      console.log(res.data)
      setBooks([{}, {}])
      setIsLoading(false) 
    })
    .catch((err)=>{
      console.log(err.message)
      setIsLoading(false)
    })


  }, [])

  return (
    <div className="  p-5">
      <div className="flex justify-between items-center my-5">
        <h1 className=" font-bold text-3xl">Books List</h1>
        <div className="">
        <Button className=" bg-sky-600 hover:bg-sky-300 text-xl" name="Table"/>
        </div>
      </div>

      {isLoading ? <Spinner/> : (
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
                <td className="border border-slate-700 rounded-md text-center">23</td>
                <td className="border border-slate-700 rounded-md text-center">Python</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">Python</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">Python</td>
                <td className="border border-slate-700 rounded-md">
                  <div className=" flex justify-center gap-x-3">
                  <Link to={`books/edit/:id`}>
                    ed
                  </Link>
                  <Link to={`books/edit/:id`}>
                    sh
                  </Link>
                  <Link to={`books/edit/:id`}>
                    del
                  </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) }
    </div>
  )
}

export default Home