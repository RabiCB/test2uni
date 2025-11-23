import { urls } from "./constants"

export const hitServerApi = async(url:string) => {
    const response = await fetch(`${urls.server}${url}`)


    
  
    if(!response.ok){
        throw new Error("Failed to fetch from server API")
    }

    
 return response.json()

} 