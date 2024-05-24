import { Link } from "react-router-dom"
import styles from "../styles/Catalog.module.css"
import "../styles/index.css"

export function Home ({car}) {
    return (
        <div className="card">
        <div className={styles.imge}
        style={{
            backgroundImage: `url(${car.image})`
        }}>
        </div>
        <div className={styles.info}>
            <h2>{car.name}</h2>
            <p>{new Intl.NumberFormat(
                'ru-RU', {
                    style:
                    'currency',
                    currency: "USD",
                }).format(car.price)}</p>
            <Link to={`/car/${car.id}`} className='btn'> Read more</Link>
        </div>
    </div>
    )
}