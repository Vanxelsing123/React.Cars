import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CarService } from "../../services/car.service"
import { Home } from "../Home"

export const CarDetail = () => {
    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if (!id) return

        const fetchData = async () => {
            const data = await CarService.getById(id)       
            
            setCar(data)
        }

        fetchData(id)
    }, [id])

    if(!car?.name) return <p>Car not found!</p>

    return <div>
        <Link to="/"> Back </Link>
        <Home car={car} />
    </div>
} 