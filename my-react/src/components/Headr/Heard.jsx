import { useAuth } from "../../hooks/useAuth"

export const Header = () => {
    const {user, setUser} = useAuth()

    return (
        user ? (
            <>
            <h2>Welcome, {user.name}!</h2>
            <button onClick={() => setUser(null)}>Logout</button>
            </>
          ) : (
            <button
            onClick={() => 
            setUser({
              name: 'Vlad'
            }) }
            >
              Login
            </button>
          )
    )
}