import { useCallback, useEffect, useState } from "react"
import {executeMethod} from '../../utils/utils'
// import {response} from '../../utils/response'
import { Item } from '../../_components/Item'

export const List = ()=>{

  const [list, setList] = useState()
  const getCocktails = useCallback(async ()=>{
    // cors error getting cocktails list from localhost
    const response =  await executeMethod('get', '/api/json/v1/1/filter.php', {
      g: 'Cocktail_glass'
    })
    return setList(response.drinks)
  }, [])

  useEffect(()=>{
    getCocktails()
  }, [getCocktails])

  return !list
          ?<div>Loading...</div> 
          :<div className="Colored-div">
            {list.map((x, idx)=><Item {...x} key={idx}/>)}
          </div>
}