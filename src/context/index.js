import { createContext, useState, useContext } from "react";


export const Mycontext = createContext()


export const MyProvider = ({ children }) => {

    const [count, setCount] = useState(0)

    const all = {count, setCount  }

    return (
        <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
    )
}


export const useAuth = () => useContext(Mycontext);