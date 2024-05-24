import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    return <div>
        <AuthContext.Provider value={{ user, setUser}} >
            {children}
        </AuthContext.Provider>
    </div>
}