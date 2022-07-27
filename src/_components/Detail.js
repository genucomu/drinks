import { Header } from "./styles"
import {useNavigate, useLocation} from 'react-router-dom'
import { useCallback, useMemo } from "react"

import {executeMethod} from '../utils/utils'

export const Detail = ()=>{
  const naviegate = useNavigate()
  const location = useLocation()

  const handleBack = useCallback(()=>naviegate('/'), [naviegate])
  const getCocktailData = useCallback(async (id)=>{

      const result = await executeMethod('get', '/api/json/v1/1/lookup.php?', {
        i: id
      })
      return result.data
  }, [])
  const cocktailId = useMemo(()=>{
    const urlArray = location.pathname.split('/')
    return urlArray[urlArray.length - 1]
  }, [location])

  const cocktailData = useMemo(()=>{
    if(cocktailId){
      getCocktailData(cocktailId)
    }
    return undefined
  }, [cocktailId, getCocktailData])
  
  return <Header>
    <div role="button" onClick={handleBack}>{"<-"}</div>
    <div>{cocktailData?.title}</div>
  </Header>
}