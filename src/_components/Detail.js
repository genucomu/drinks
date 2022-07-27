import { DetailContainer, DetailsText, Header } from "./styles"
import {useNavigate, useLocation} from 'react-router-dom'
import { useCallback, useMemo, useState } from "react"

import {Tumb} from './Tumb'

import {executeMethod} from '../utils/utils'


export const Detail = ()=>{
  const naviegate = useNavigate()
  const location = useLocation()

  const handleBack = useCallback(()=>naviegate('/'), [naviegate])

  const [cocktailData, setCocktailData] = useState()
  const getCocktailData = useCallback(async (id)=>{
      const result = await executeMethod('get', '/api/json/v1/1/lookup.php?', {
        i: id
      })
      return result.drinks[0]
  }, [])

  const cocktailId = useMemo(()=>{
    const urlArray = location.pathname.split(':')
    return urlArray[urlArray.length - 1]
  }, [location])

  useMemo(async ()=>{
    if(cocktailId){
      const result = await getCocktailData(cocktailId)
      console.log(result)
      setCocktailData(result)
    }
  }, [cocktailId, getCocktailData])

  const ingredients = useMemo(()=>{
    if(cocktailData){
      const keys = Object.keys(cocktailData)
      const ingredientKeys = keys.filter(x=>x.includes('Ingredient'))
      let array=[];
      ingredientKeys.forEach(x=> {
        if(cocktailData[x] !== null){
          const prefix = 'strIngredient'
          const number = Number(x.substring(prefix.length))
          const fieldMeasure = `strMeasure${number}`
          array.push(`${cocktailData[x]} - ${cocktailData[fieldMeasure]}`)
        }
      })
      return array
      
    }
  }, [cocktailData])

  
  return <div style={{margin: '16px'}}>
    <Header>
      <div role="button" style={{width: '10%', cursor: 'pointer'}} onClick={handleBack}>{"<--"}</div>
      <div style={{width: '90%', textAlign: 'center'}}>{cocktailData?.strDrink}</div>
    </Header>
    <DetailContainer>
      <Tumb url={cocktailData?.strDrinkThumb} alt={cocktailData?.strDrink} width="350px" height="350px"/>
      <DetailsText>
      {ingredients?.map(x=>(<div key={x}>{x}</div>))}
      <br />
      <div>* How to prepare</div>
      <br />
      <div>{cocktailData?.strInstructions}</div>
      </DetailsText>
    </DetailContainer>
  </div>
}