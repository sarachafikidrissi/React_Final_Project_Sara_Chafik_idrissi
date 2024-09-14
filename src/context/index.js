import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


export const Mycontext = createContext()


export const MyProvider = ({ children }) => {

   

    const [userData, setUserData] = useState([])
    const [currentUser, setCurrentUser] = useState(null);  
    const navigate = useNavigate();

    const SignUp = (firstName, lastName, email, password) => {
        const newUser = {firstName, lastName, email, password}

        setUserData([...userData, newUser])
    }

    const login = (email, password) => {
        const user = userData.find((user) => user.email === email && user.password === password);

        if (user) {
            setCurrentUser(user);
            navigate('/'); // Navigate after successful login
        } else {
            alert('Invalid email or password');
        }
    };


    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {
        let newTab = [...cartItems];
        item.qty+= 1
        newTab.push(item);
        setCartItems(newTab.filter((e, index) => newTab.indexOf(e) === index));
    
      };

    const all = {userData, setUserData, SignUp, login, cartItems, setCartItems, addToCart  }

    return (
        <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
    )
}


export const useAuth = () => useContext(Mycontext);