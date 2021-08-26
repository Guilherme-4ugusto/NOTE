import styled from 'styled-components';

export const Container = styled.div`
 width: 260px;
 height: 60px;
 padding: 10px;
 background: ${props => props.actived? 'rgba(62, 155, 232, 1.0)' : 'rgba(62, 155, 232, .5)'};
 border-top: 1px solid rgba(62, 155, 232, .7);
 border-left: 1px solid rgba(62, 155, 232, .7);

 cursor: pointer;

 border-radius: 10px;

 
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 

 img{
     width: 30px;
     height: 30px;
    
 }
 
 span{
     color: white;
     font-weight: bold;
     font-size: 30px;
     align-self:  flex-end;
     margin-right: 3px;
 }

 &:hover{
    background: rgba(62, 155, 232, 1.0);
 }



 
`