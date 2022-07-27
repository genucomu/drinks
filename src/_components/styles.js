import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  margin: 16px 8px;
  padding: 16px;
  width: 350px;
  cursor: pointer;
`;


export const TitleAndIngredients = styled.div`
  text-align: left;
  ul {
    font-size: 12px;
    padding-left: 12px;
  }
  span {
    font-size: 14px;
    padding-left: 2px;
  }
`

export const Header = styled.div`
  display: flex;
  text-align: left;
  width: 380px;
  margin-bottom: 16px;
  color: white;
`

export const DetailContainer = styled.div`
  background-color: white;
  padding: 16px;
`

export const DetailsText = styled.div`
  display: grid ;
  text-align: left;
  max-width: 350px;
  font-size: 12px;
`