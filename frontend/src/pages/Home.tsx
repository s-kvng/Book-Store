import axios from "axios"
import { MdOutlineAddBox,  } from "react-icons/md"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


import Spinner from "../components/Spinner"
import { Books } from "../models/Book"
import Button from "../components/Button"
import ShowTable from "../components/ShowTable"


const Home = () => {
  const [books, setBooks] = useState<Books[]>([])
  const [isLoading , setIsLoading] = useState<boolean>(false)
  const [count , setCount ] = useState<number>(0)
  const [ showTable , setShowTable ] = useState<string>("table")

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
      <div className=" flex justify-center items-center gap-x-5">
        <Button onClick={()=> setShowTable('table')} types='button' name="Table" className=" bg-violet-600 hover:bg-violet-500"/>
        <Button types='button' name="Card" className=" bg-violet-600 hover:bg-violet-500"/>
      </div>
      <div className="flex justify-between items-center my-5 ">
        <h1 className=" font-bold text-3xl">Books List</h1>
        <div className="flex justify-center items-center">
        <Link to={"http://localhost:5173/books/create"} className=""><MdOutlineAddBox size={30} color="blue" /></Link>
        </div>
      </div>
      <h1 className=" mb-3">No of Books: {count}</h1>

      {isLoading ? 
      <div className=" flex justify-center items-center pt-16">
        <Spinner/>
      </div> : (
      <ShowTable books={books} />
      ) }
    </div>
  )
}

export default Home