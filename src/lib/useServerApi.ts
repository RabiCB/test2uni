import { urls } from "./constants"

export const hitServerApi = async(id:string) => {
    const data = await fetch(`${urls.localhost }${id}`)

  
 const res = await data.json()



 return res
} 