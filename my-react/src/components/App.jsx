import styles from "../styles/create.module.css"
import  '../styles/App.css'
import { useContext, useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { CarService } from "../services/car.service"
import { VideoPlayer } from "./videoPlayer"
import { Header } from "./Headr/Heard"

const cleanCar = {
  price: "",
  image: "",
  name: "" 
}

export function App({setCars}) {
 const [list, setList] = useState(cleanCar)

 useEffect(() => {
   const fetchData = async () => {
      const data = await CarService.getAll()

      setCars(data)
   }
   
   fetchData()
 }, [])

 /*  const {mutate} = useMutation({
    mutationKey: ['create'],
    mutationFn: data => CarService.create(data),
    onSuccess: () => {
      reset()
    },

 }) */

 const createCar = e => {
    e.preventDefault()

  setCars(prev => [{id: prev.length * 1, ...list}, ...prev])

  setList(cleanCar)
 }

  return (
   <div>
     <h1>
      Cars Catalog
     </h1> 
    <Header />
    <VideoPlayer />

      <div className={styles.item} >
        <input className={styles.input} type="text" placeholder='car' 
         onChange={e => setList(prev => ({
          ...prev,
          name: e.target.value
      }))} value={list.name} />

        <input className={styles.input} type="number" placeholder='price' 
        onChange={e => setList(prev => ({
            ...prev,
            price: e.target.value
        }))} value={list.price}/>

        <input className={styles.input} placeholder='image' 
         onChange={e => setList(prev => ({
          ...prev,
          image: e.target.value
      }))} value={list.image}/>

        <button className={styles.btn} 
        onClick={e => createCar(e)} > Create 
        </button>
       </div>
   </div>
  ) 

}


