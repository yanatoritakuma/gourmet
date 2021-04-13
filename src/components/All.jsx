import React, { useContext } from "react";
import testimg from "../image/Gourmet.jpeg";
import styled from "styled-components";
import { InputContext } from "../provider/InputProvider";
import { Header } from "../organism/Header";
import { Footer } from "../organism/Footer";

export const All = () => {
  const { allState } = useContext(InputContext);
  
  return (
    <>
    <Header />
    <SH2>全て</SH2>
    <SUl>
      {
        allState.map((todo, i) => {
          return(
            <SLi key={i}>
              <img src={testimg} />
              <h3>{todo.name}</h3>
              <p>{todo.tel}</p>
              <p>{todo.detail}</p>
            </SLi>
          )
        })
      }
    </SUl>
    <Footer />
    </>
  )
}

const SH2 = styled.h2`
  margin: 0 auto;
  padding: 16px;
  text-align: center;
  background-color: skyblue;
  border-radius:10px;
  font-size:30px;
  width:18%;
`

const SUl = styled.ul`
  padding-bottom:100px;
`
const SLi = styled.li`
  margin: 20px auto;
  display:flex;
  justify-content: space-around;
  align-items: center;
  background-color: gray;
  width:50%;

  img{
    width:16%;
  }
  h3{
    font-size: 28px;
    width:50%;
  }
`