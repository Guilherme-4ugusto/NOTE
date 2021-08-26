import styled from 'styled-components';

export const Container = styled.div`

 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 max-width: 1200px;
 flex-wrap: wrap; 
 width: 280px;
 height: 400px;
 margin: 50px;
 box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
 border-radius: 15px;
 background: rgba(255,255,255,0.1);
 overflow: hidden;
 border-top: 1px solid rgba(255, 255, 255, 0.5);
 border-left: 1px solid rgba(255, 255, 255, 0.5);
 backdrop-filter: blur(5px);
 flex-direction: column;
 cursor: pointer;
 transition: 0.3s;

 &:hover{
    background: ${props => props.done ? 'rgba(0,255,0, 0.3)' : 'rgba(255, 255, 255, 0.5)'};
    transition: 0.3s;
    transform: translatey(-2%);
 }
 
 
 
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #281259;
`

export const BottonCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #D91470;
    margin-top: 80px;
    
    strong {
        font-weight: bold;
    }
`
