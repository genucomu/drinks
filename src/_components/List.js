import { useCallback, useEffect, useState } from "react"
// import {executeMethod} from '../utils/utils'
import {response} from '../utils/response'
import { Item } from "./Item"

export const List = ()=>{

  const [list, setList] = useState()
  const getCocktails = useCallback(async ()=>{
    // cors error getting cocktails list from localhost
    // const response =  await executeMethod('get', 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
    // console.log(response)
    return setList(response.drinks)
  }, [])

  useEffect(()=>{
    getCocktails()
  }, [getCocktails])

  return !list
          ?<div>Loading...</div> 
          :<div>
            {list.map((x, idx)=><Item {...x} key={idx}/>)}
          </div>
}