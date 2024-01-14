import axios from "axios"
import { useState, useEffect } from "react"

const Home = () => {
  const [books, setBooks] = useState([])
  const [isLoading , setIsLoading] = useState(false)

  useEffect(()=>{

    setIsLoading(true)
    axios.get('http//:localhost:5172')
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err.message)
    })


  }, [])

  return (
    <div>Home</div>
  )
}

export default Home