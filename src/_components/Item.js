import { Tumb } from './Tumb'
import {Container, TitleAndIngredients} from './styles'
import { useCallback } from 'react'
import {useNavigate} from 'react-router-dom'

export const Item = ({ strDrink, strDrinkThumb, idDrink }) => {
  const randomNumber = Math.random(10).toFixed()
  const navigate = useNavigate();

  const handleOnClick = useCallback(()=>{
    navigate(`/cocktail:${idDrink}`)
  }, [idDrink, navigate])

  return  <Container role="button" onClick={handleOnClick}>
            <TitleAndIngredients>
              {strDrink}
              <ul>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
              </ul>
              <span>y {randomNumber} ingredientes mas</span>  
            </TitleAndIngredients>
            <Tumb url={strDrinkThumb} alt={strDrink} />
          </Container>

}