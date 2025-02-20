import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/product"


export const StoreContext = createContext("null");

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId) => {
        if(!cartItem[itemId]) {
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for(const item in cartItem) {
            if (cartItem[item]>0){
                let itemInfo = food_list.find((product)=>product.id===item)
              totalAmount += itemInfo.price * cartItem[item];
            }
        }
        return totalAmount;
    }
    const ContextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider; 


/* import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/product";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
        }));
    };

    const removeFromCart = (itemId) => {
        if (cartItem[itemId]) {
            setCartItem((prev) => {
                const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
                if (updatedCart[itemId] <= 0) delete updatedCart[itemId];
                return updatedCart;
            });
        }
    };

    useEffect(() => {
        console.log(cartItem);
    }, [cartItem]);

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider; */



