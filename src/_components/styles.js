import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  margin: 16px 8px;
  padding: 16px;
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