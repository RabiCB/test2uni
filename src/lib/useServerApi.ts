import { urls } from "./constants"

export const hitServerApi = async(uri:string) => {
    const data = await fetch(`${urls.localhost }${uri}`)

  
 const res = await data.json()



 return res
} 