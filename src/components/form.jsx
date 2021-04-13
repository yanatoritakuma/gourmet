import React, { useState, useContext } from 'react'
import styled from "styled-components";
import { Header } from '../organism/Header'
import { Footer } from '../organism/Footer'
import { InputContext } from '../provider/InputProvider';

export const Form = () => {
  const {onClickAdd} = useContext(InputContext);

  const [ name, setName ] = useState("");
  const [ tel, setTel ] = useState("");
  const [ detail, setDetail ] = useState("");

  return (
    <>
    <Header />
    <SH2>登録画面</SH2>
    <SForm>
      <label>店名</label>
      <input placeholder="店名" name="name" value={name} onChange={(e) => {setName(e.target.value )}}/>
      <label>電話番号</label>
      <input placeholder="電話番号" name="tel" value={tel} onChange={(e) => {setTel(e.target.value )}}/>
      <label>メモ</label>
      <textarea placeholder="メモ" name="detail" value={detail} onChange={(e) => {setDetail(e.target.value)}} />
      <button type="button" onClick={() => onClickAdd(name,tel,detail) }>登録</button>
    </SForm>
    <Footer />
    </>
  )
}
const SH2 = styled.h2`
  font-size:40px;
  text-align:center;
`

const SForm = styled.form`
  margin: 60px auto;
  padding: 10px;
  display: block;
  background-color: #e6e6e6;
  width: 60%;
  label{
    margin-top:20px;
    margin: auto;
    display:block;
    font-size:24px;
    width:80%;
  }
  input{
    margin:0 auto;
    display: block;
    background-color: #FFF;
    width:80%;
    height:30px;
    border: 1px solid #aaa;
  }
  textarea{
    margin: 0 auto;
    display:block;
    background-color: #FFF;
    width:80%;
    height:120px;
    border: 1px solid #aaa;
  }
  button{
    margin: 20px auto;
    padding: 20px;
    display: block;
    background-color: #9CFAE4;
    border-radius:20px;
    box-shadow: 0 4px 0 #8ed1c2;
    &:hover{
      box-shadow: 0 0 0;
      transform: translateY(3px);
    }
  }
`