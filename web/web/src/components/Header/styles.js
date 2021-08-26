import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 height: 125px;
 background: #5119A0;
 margin: 0px;
 padding: 0px;
 
 display: flex;
`
export const LeftSide = styled.div`
    width: 50%;
    height: 125px;

    display: flex;
    align-items: center;

    img{
        margin-left: 20px;
        width: 300px;
        height: 100px;

    }
`
export const RightSide = styled.div`
    width: 50%;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a{
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;
        &:hover{
          color: #D91470;  
        }

    }


    #notification{
        background: none;
        border: none;
        outline: none;
        cursor: pointer; 
        
        img{
            width: 25px;
            height: 30px;
        }
        
        span{
            background: white;
            color:#D91470;
            padding: 3px 7px;
            position: relative;
            top: -20px;
            right: 12px;
            border-radius: 50%;
        }

        &:hover{
          opacity: 0.5;
        }
    }

    .dividir::after{
        content: "|";
        margin: 0 10px;
        color: white;
    }

    button{
      font-size: 16px;
      border: none;
      outline: none;
      background: none;
      color: white;
      font-weight: bold;
      cursor: pointer;
      &:hover{
          color: #D91470;  
      }
    }

`