import styled from 'styled-components'
import color from '../../../assets/color/color'

const FindFormContainer = styled.div`
    padding-bottom: 60px; 
    text-align: center;
    z-index: 10;

    .cityfield{
        width: 300px;
         color: ${color.main};
    }
    
    ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        color: ${color.main};
    }

    ul li:nth-child(n+2){
        width: 150px;
        height: 50px;
        margin-left: 20px;
        border: 1px solid ${color.main};
        border-radius: 5px;
        padding: 12px;
    }

    .search{
        font-size: 0px;
        opacity: 0;
    }

    .inp{
      margin-left: 20px;
    }
    
    .search:hover {
        cursor:pointer;
    }

    //-----------------------------------------------[↓Price↓]-------------------------------------------------------

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #ffffff;
        z-index: 1;
      }

      .dropdown .strelka{
        font-size: 20px;
        color: ${color.main};
        position: absolute;
        right: 233px;
        top: -17px;
      }
      
      .dropdown .dropbtn{
        padding: 3px;
        background-color:transparent;
        font-size: 16px;
        font-family: sans-serif;
        font-weight: 100;
        color: ${color.main};
        border: none;
        text-align: start;
        position: relative;
      }
      
      .dropdown .dropbtn{
        text-align: center;
      }
      
      .dropdown-content {
        margin-top: 12px;
        border-radius: 5px;
        background-color: ${color.main};
        color: white;
        width: 300px;
        height: 125px;
      }

      //-----------------------------------------------[↑Price↑]-------------------------------------------------------
      
      //-----------------------------------------------[↓ROOM↓]--------------------------------------------------------
      
      .dropdown-content-room {
        display: none;
        position: absolute;
        background-color: #ffffff;
        z-index: 1;
        margin-top: 12px;
        border-radius: 5px;
        background-color: ${color.main};
        color: white;
        width: 300px;
        height: 60px;
      }
      
      .dropdown .strelka-room{
        font-size: 20px;
        color: ${color.main};
        position: absolute;
        right: 230px;
        top: -17px;
      }
      
      .dropdown:hover .dropdown-content-room {display: block;}

      .dropdown-content-room .container {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        display: inline-block;
        position: relative;
        cursor: pointer;
        color: ${color.main};
        padding: 6px;
        margin: 9px;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .dropdown-content-room .container:hover{
        opacity: 0.85;
      }

      .dropdown-content-room .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      //-----------------------------------------------[↑ROOM↑]--------------------------------------------------------

      .dropdown:hover .dropdown-content {display: block;}
      
      `

export default FindFormContainer

