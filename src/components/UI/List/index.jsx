import React from "react";
import styled from "styled-components";
import Card from "../Card";

const ListElement = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  justify-content: center;
  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    &>div{
      max-width: 350px;
      &:nth-child(2n){
        margin: 0 0 0 auto;
      }
    }
  }
`;

function List ({list, type}) {
  return(
    <ListElement>
      {
        list.map(item => {
          return <Card key={item.id} {...item} type={type}/>
        })
      }
    </ListElement>
  );
}

export default List;