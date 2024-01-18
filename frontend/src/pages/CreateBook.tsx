import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import Button from "../components/Button"
import axios from "axios"

const CreateBook = () => {
const navigate = useNavigate()
  const [title,setTitle] = useState<string>("")
  const [author , setAuthor ] = useState<string>("")
  const [publishYear ,setPublishYear] = useState<string>("")
  const [ isLoading , setIsLoading] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent): void =>{
    e.preventDefault()
    setIsLoading(true)

    const data = {
      title,
      author,
      publishYear
    }

    axios.post("http://localhost:5555/books/create", data)
    .then(()=>{
      navigate("/")
      setIsLoading(false)
    })
    .catch(()=>{
      alert("New book was not added")
      setIsLoading(false)
    })
    console.log("Eat")
  }

  

  return (
    <div className="p-5">
    <div className=" mb-10">
      <BackButton destination="/"/>
      <h1 className=" text-2xl my-2">Create Book</h1>
    </div>
    { isLoading ? 
    <div  className="flex justify-center items-center pt-16">
      <Spinner/>
    </div> 
      :
      (
        <div className=" flex justify-center items-center ">
          <form onSubmit={handleSubmit} className=" flex flex-col border border-sky-500 rounded-lg p-5 w-full md:w-2/4 shadow-xl ">
            <div className="my-2 flex flex-col">
              <label htmlFor="title" className=" text-lg font-semibold">Title</label>
              <input type="text"
              name="title"
              className=" py-2 px-3 mt-1 border border-gray-400 rounded-lg focus:ring ring-red-500" 
              placeholder="title" 
              value={title} 
              onChange={(e)=>setTitle(e.target.value)} required/>
              
            </div>
            <div className="my-2 flex flex-col">
              <label htmlFor="author" className=" text-lg font-semibold">Author</label>
              <input type="text"
              name="author"
              className=" py-2 px-3 mt-1 border border-gray-400 rounded-lg " 
              placeholder="Author" 
              value={author} 
              onChange={(e)=>setAuthor(e.target.value)} required/>
            </div>
            <div className="my-2 flex flex-col">
              <label htmlFor="publishYear" className=" text-lg font-semibold">Publish Year</label>
              <input type="date"
              name="publishYear"
              className=" py-2 px-3 mt-1 border border-gray-400 rounded-lg " 
              value={publishYear} 
              placeholder="PublishYear"
              onChange={(e)=>setPublishYear(e.target.value)} required/>
            </div>
            <Button types="submit" name="Add book" className="bg-sky-500 hover:bg-sky-300 mt-5 text-center text-lg" />
          </form>
        </div>
      )
      }
    </div>
  )
}

export default CreateBook