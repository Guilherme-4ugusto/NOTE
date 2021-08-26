import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width: 100%;
    min-height: 714px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Card = styled.div`
    width: 65%;
    height: 667px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255,255,255,0.1);
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 40px;
        color: #D91470;
        margin: 0px;
    }

    p{
        font-size: 30px;
        color: white;
        margin: 10px; 
    }
`

export const QrCodeArea = styled.div`
    background: white;
    width: 380px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ValidationCode  = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    span{
      text-transform: uppercase; 
      font-weight: bold;    
      color: #D91470;  
    }

    input{
        font-size: 18px;
        padding: 10px;
        outline: none;
        text-align: center;
    }

    button{
        font-weight: bold;
        background: #D91470; 
        color: #FFF;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 10px;
        &:hover{
        background: #FF0479; 
    }
    }

`