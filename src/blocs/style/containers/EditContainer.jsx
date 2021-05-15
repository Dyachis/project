import styled from 'styled-components'
import color from '../../../assets/color/color'

const Container = styled.section`
  padding: 60px 277px;

  form {
    display: flex;
    /* flex-direction: column; */
  }

  .search{
    font-size: 0px;
    opacity: 0;
  }
    
  .search:hover {
    cursor:pointer;
  }

  form ul{
    list-style: none;
  }

  form ul li{
    margin-top: 20px
  }

  form input{
    height: 25px;
  }

  form *[for^="form"]{
    width: 500px;
    display: flex;
    justify-content: space-between;
    color: black;
    /* border: 1px solid red; */
  }

  h1 {
    color: ${color.main};
    font-weight: normal;
    margin-bottom: 60px;
  }

  .city{
    margin-left: 100px;
  }

  .cityfield{
    height: 50px;
    /* margin: 20px 0; */
    width: 900px;
  }

  .cityfield div{
    flex-direction: linear;
  }
  
`

export default Container
