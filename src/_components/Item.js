import { Tumb } from './Tumb'
import {Container, TitleAndIngredients} from './styles'
export const Item = ({ strDrink, strDrinkThumb, idDrink }) => {
  const randomNumber = Math.random(10).toFixed()
  return <Container style={{ display: 'flex', justifyContent: 'space-between', width: '350px' }}>
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