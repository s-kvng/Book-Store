import React, { useEffect, useState } from "react"
import { useNavigate,  useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import Button from "../components/Button"
import axios from "axios"


const UpdateBook = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [title,setTitle] = useState<string>("")
  const [author , setAuthor ] = useState<string>("")
  const [publishYear ,setPublishYear] = useState<string>("")
  const [ isLoading , setIsLoading] = useState<boolean>(false)

  useEffect(()=>{
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      const {title , author , publishYear} = res.data.data
      console.log(title , author , publishYear)
      setAuthor(author)
      setTitle(title)
      setPublishYear(publishYear)
    })
  },[])

  const handleSubmit = (e: React.FormEvent): void =>{
    e.preventDefault()
    setIsLoading(true)

    const data = {
      title,
      author,
      publishYear
    }

    axios.put(`http://localhost:5555/books/${id}`, data)
    .then(()=>{
      navigate("/")
      setIsLoading(false)
    })
    .catch(()=>{
      alert("Book not updated")
      setIsLoading(false)
    })

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
              <input type="number"
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

export default UpdateBook