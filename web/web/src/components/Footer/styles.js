import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 height: 100px;
 background: #5119A0;
 margin: 0px;
 padding: 0px;
 position: relative;


 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

 span{
    color: #FFF;
 }

 #develop{
     margin-top: 3px;
     color: white;
     text-decoration: none;
     &:hover{
        color: #D91470;
     }
 }
 
`