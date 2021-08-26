import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Content = styled.div`
    width: 100%;
    min-height: 714px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Form = styled.div`
    width: 65%;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255,255,255,0.1);
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    button{
        border: none;
        background: none;
        outline: none;
    }

    img{
        width: 60px;
        height: 60px;
        margin-top: 10px;
        cursor: pointer;

        &:hover{
         opacity: 0.7;
        }

    }

`
export const Input = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 16px;

    span{
      color: #fff;
      margin-bottom: 5px; 
      font-weight: bold; 
      font-size: 20px;
    }

    input{
        color: #fff;
        font-size: 16px;
        margin-top: 10px;
        border: none;
        background: none;
        border-bottom: 1px solid #D91470;
        outline: none;
    }
    input[type="date"]::-webkit-calendar-picker-indicator{
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: #D91470;
    margin-bottom: 3.5px;
    }

    input[type="time"]::-webkit-calendar-picker-indicator{
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: #D91470;
    margin-bottom: 3.5px;
    }
`
export const TextArea = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-left: 16px;

    span{
      color: #fff;
      margin-bottom: 5px; 
      font-weight: bold; 
      font-size: 20px;   
    }

    textarea{
        margin-top: 10px;
        border-radius: 10px;
        border-color: #D91470; 
        outline: none;
        color: #fff;
        font-size: 16px;
        background: none;
        resize: none;
    }

`
export const Options = styled.div`
    width: 90%;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;

    button{
        align-items: center;
        display: flex;
        font-size: 18px;
        font-weight: bold;
        color:#281259;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        color: #D91470;
        font-weight: bold;
        font-size: 18px;
    }

`

export const Save = styled.div`
width: 92%;
padding: 20px;
margin-left: 16.5px;

button{
    width: 100%;
    background: #D91470; 
    border: none;
    border-radius: 30px;
    outline: none;
    font-size: 20px;
    color: white;
    padding: 20px;
    cursor: pointer;
    &:hover{
     background: #FF0479; 
    }
}

`