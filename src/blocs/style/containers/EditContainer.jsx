import styled from 'styled-components'
import color from '../../../assets/color/color'

const Container = styled.section`
  padding: 60px 277px;

  form {
    border-radius: 5px;
    width: 550px;
    display: flex;
    background-color: ${color.main}
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
    margin: 35px 0 0 20px;
  }

  form ul li:last-child{
    margin: 27px 0 0 20px;
  }

  form ul li label{
    font-size: 33px;
  }

  form input{
    height: 30px;
    width: 250px;
    border-radius: 5px;
    border: 0px;
    font-size: 17px;
    padding: 0 0 0 5px;
  }

  form *[for^="form"]{
    width: 500px;
    display: flex;
    justify-content: space-between;
    color: white;
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
    margin-bottom: 20px;
    width: 900px;
  }

  .cityfield div{
    flex-direction: linear;
  }

  .fileinp {
    height: 65px;
    width: 200px;
    background-color: white;
    opacity: 0;
}
`

export default Container
