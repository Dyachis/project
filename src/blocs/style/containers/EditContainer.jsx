import styled from 'styled-components'
import color from '../../../assets/color/color'

const Container = styled.section`
  padding: 60px 277px;

  form {
    display: flex;
    flex-direction: column;
  }

  form input{
    height: 25px;
  }

  form *[for^="form"]{
    width: 500px;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: ${color.main};
    font-weight: normal;
    margin-bottom: 60px;
  }

  .cityfield{
    height: 50px;
    margin: 20px 0;
    width: 500px;
  }

  .cityfield div{
    flex-direction: linear;
  }
  
`

export default Container
