import { useState } from "react"
import { App } from "./App"
import { cars as Carsdata } from "../cars/cars"
import styles from "../styles/Catalog.module.css"
import { Home } from "./Home"



export function Catalog() {
    const [cars, setCars] = useState(Carsdata)

   return <div>
        <div>
        <App setCars={setCars} />
        </div>
        <div className={styles.car}>
               {cars.length ? cars.map(car =>  (
                  <Home key={car.id} car={car} />
               )) : <p> Not Cars </p>}
        </div>
    </div>
}