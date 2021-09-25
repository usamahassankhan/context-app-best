import React,{createContext,useState} from 'react'

const AuthContext=createContext();
const ContextProvider = ({children}) => {
    const [token,setToken]=useState("nice");
    return (
        <AuthContext.Provider
        value={{
            token,setToken
        }}
        >
        {children   }

          </AuthContext.Provider>

    )
}

export  {ContextProvider,AuthContext}
