import styled from 'styled-components'
import color from '../../../assets/color/color'

const FindFormContainer = styled.div`
    padding-bottom: 60px; 
    text-align: center;

    .cityfield{
        width: 500px;
        color: ${color.main};
    }
    
    ul{
        list-style: none;
        display: flex;
        color: ${color.main};
    }

    ul li:nth-child(n+2){
        width: 225px;
        margin-left: 40px;
        border: 1px solid ${color.main};
        border-radius: 5px;
        padding: 6px;
    }

    .search{
        font-size: 20px;
        font-weight: normal;
        color: ${color.main};
        width: 225px;
        margin-left: 40px;
        background-color: white;
        border: 1px solid ${color.main};
        border-radius: 5px;
        padding: 6px;
    }
    
    .search:hover {
        cursor:pointer;
    }

    //-----------------------------------------------[↓Price↓]-------------------------------------------------------

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #ffffff;
        //min-width: calc((100% / 2 - 10px) / 2 - 73px);
        z-index: 1;
      }

      .dropdown .strelka{
        font-size: 20px;
        color: ${color.main};
        position: absolute;
        right: 288px;
        top: -17px;
      }
      
      .dropdown .dropbtn{
        background-color:transparent;
        font-size: 1.3rem;
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
        margin-top: 7px;
        border-radius: 5px;
        background-color: ${color.main};
        color: white;
        width: 350px;
        height: 150px;
      }
      
      // .dropdown-content .price-range{
      //     margin-top: 20px;
      // }

      //-----------------------------------------------[↑Price↑]-------------------------------------------------------

      //-----------------------------------------------[↓TYPE↓]--------------------------------------------------------
      
      .dropdown-content-type {
        display: none;
        position: absolute;
        background-color: #ffffff;
        z-index: 1;
        margin-top: 7px;
        border-radius: 5px;
        background-color: ${color.main};
        color: white;
        width: 200px;
        height: 175px;
      }
      
      .dropdown:hover .dropdown-content-type {display: block;}
      
      .dropdown .strelka-type{
        font-size: 20px;
        color: ${color.main};
        position: absolute;
        right: 137px;
        top: -17px;
      }
      
      .dropdown-content-type .boxes ul{
        display: block;
        color: white;
        margin-top: 7px;
      }
      
      .dropdown-content-type .boxes ul li{
        width: 100%;
        margin-left: 20px;
        border: 0px;
        padding: 5px;
        text-align: left;
        font-weight: lighter;
      }

      .dropdown-content-type .boxes ul li span{
        margin-left: 20px;
      }
      
      .dropdown-content-type .boxes ul li input:hover{
        cursor: pointer;
      }
      
      //-----------------------------------------------[↑TYPE↑]--------------------------------------------------------
      
      //-----------------------------------------------[↓ROOM↓]--------------------------------------------------------
      
      .dropdown-content-room {
        display: none;
        position: absolute;
        background-color: #ffffff;
        z-index: 1;
        margin-top: 7px;
        border-radius: 5px;
        background-color: ${color.main};
        color: white;
        width: 200px;
        height: 175px;
      }
      
      .dropdown .strelka-room{
        font-size: 20px;
        color: ${color.main};
        position: absolute;
        right: 137px;
        top: -17px;
      }
      
      .dropdown:hover .dropdown-content-room {display: block;}
      
      .dropdown-content-room .boxes ul{
        display: flex;
        color: white;
        margin-top: 7px;
      }
      
      .dropdown-content-room .boxes ul li{
        width: 100%;
        margin-left: 12px;
        border: 0px;
        padding: 5px;
        text-align: left;
        font-weight: lighter;
      }
      
      //-----------------------------------------------[↑ROOM↑]--------------------------------------------------------
      
      //-----------------------------------------------[↓DATE↓]--------------------------------------------------------

      .dropdown-content-dates {
        display: none;
        position: absolute;
        background-color: #ffffff;
        z-index: 1;
        margin-top: 7px;
        border-radius: 5px;
        background-color: ${color.main};
        color: white;
        width: 200px;
        height: 175px;
      }
      
      .dropdown .strelka-dates{
        font-size: 20px;
        color: ${color.main};
        position: absolute;
        right: 137px;
        top: -17px;
      }
      
      .dropdown:hover .dropdown-content-dates {display: block;}

      //-----------------------------------------------[↑DATE↑]--------------------------------------------------------

      .dropdown:hover .dropdown-content {display: block;}
      
      `
      
      export default FindFormContainer
      
