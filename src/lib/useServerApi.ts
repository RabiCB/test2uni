import { urls } from "./constants"

export const hitServerApi = async(uri:string) => {
    const data = await fetch(`${urls.server}${uri}`)

    console.log(data)
 const res = await data.json()



 return res
}