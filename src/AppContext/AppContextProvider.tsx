"use client"

import { create } from "domain";
import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { createContext } from "react";

type ContextProps={
    OpenSearchModal:boolean
    OpencartModal:boolean
    handleOpenSearchModal:()=>void
    handleCloseSearchModal:()=>void
    handleOpenCartModal:()=>void
    handleCloseCartModal:()=>void

    
}
const AppContext=createContext<ContextProps>({
OpenSearchModal:false,
handleOpenSearchModal:()=>{},
OpencartModal:false,
handleCloseCartModal:()=>{},
handleOpenCartModal:()=>{},
handleCloseSearchModal:()=>{}

})


export const AppContextProvider=({children}:PropsWithChildren)=>{

    const [OpenSearchModal, setOpenSearchModal]=useState<boolean>(false)

    const [OpencartModal,setOpenCartModal]=useState<boolean>(false)

    const handleOpenSearchModal=()=>{
        setOpenSearchModal(!OpenSearchModal)
        
    }

    useEffect(()=>{
        const handleKeyDown=(e:KeyboardEvent)=>{
            if((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==="k"){
                e.preventDefault()
                setOpenSearchModal((prev)=>!prev)
            }
        }
        window.addEventListener("keydown",handleKeyDown)
        return()=>{
            window.removeEventListener("keydown",handleKeyDown)
        }
    })

    const handleCloseSearchModal=()=>{
        setOpenSearchModal(false)
    }
    const handleOpenCartModal=()=>{
        setOpenCartModal(true)
    }

    const handleCloseCartModal=()=>{
        setOpenCartModal(false)
    }
  
    return(
        <AppContext.Provider value={{
            handleOpenSearchModal,
            handleOpenCartModal,
            handleCloseCartModal,
            OpenSearchModal,
            OpencartModal,
            handleCloseSearchModal,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext)
}