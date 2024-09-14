import { createContext, useState, useContext } from "react";


export const Mycontext = createContext()


export const MyProvider = ({ children }) => {

    const [count, setCount] = useState(0)

    const [userData, setUserData] = useState([])

    const SignUp = (firstName, lastName, email, password) => {
        const newUser = {firstName, lastName, email, password}

        setUserData([...userData, newUser])
    }

    const all = {count, setCount, userData, setUserData, SignUp  }

    return (
        <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
    )
}


export const useAuth = () => useContext(Mycontext);