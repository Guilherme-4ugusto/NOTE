import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';

//Nossos Componentes

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
 const[mac, setMac] = useState();
 const [redirect, setRedirect] = useState(false);

 async function SaveMac(){
   if(!mac)
   alert('você precisa informar o número que apareceu no celular!!')
   else{
   await localStorage.setItem('@note/macaddress', mac);
   setRedirect(true);
   window.location.reload();
   }
  }

 return(
  <S.Container>
    {redirect && <Redirect to="/" />}
    <Header/>
    <S.Content>
      <S.Card>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>PARA SINCRONIZAR SUAS TAREFAS</p>
        <S.QrCodeArea>
          <Qr value='getmacaddress' 
              size={350}
              fgColor='#5119A0'
              level='M'             
          />
        </S.QrCodeArea>
        <S.ValidationCode>
           <span>Digite a numeração que apareceu no celular</span>
           <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
           <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
        </S.ValidationCode>
      </S.Card>
    </S.Content>
    <Footer/>
  </S.Container>

)
 
}

export default QrCode;
