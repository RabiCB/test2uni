import { urls } from "./constants"

export const hitServerApi = async(id:string) => {
    const data = await fetch(`${urls.server }${id}`)

  
 const res = await data.json()



 return res
} 