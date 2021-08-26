import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import * as S from './styles';
import {format} from 'date-fns';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//Our components

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeicons';

function Task({match}) {
  const [redirect, setRedirect] = useState(false);
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const Swal = require('sweetalert2');


  async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`)
    .then(response => {
      setType(response.data.type)
      setDone(response.data.done)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format (new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format (new Date(response.data.when), 'HH:mm'))  
    })
  }

  async function Save(){
    //Data validation
    if(!title)
     Swal.fire({
      icon: 'error',
      title: 'Calma!',
      text: 'Você esqueceu de nos informar o título da tarefa!!',
     })
    else if(!description)
     Swal.fire({
      icon: 'error',
      title: 'Calma!',
      text: 'Você esqueceu de nos informar a descrição da tarefa!!',
     })
    else if(!type)
     Swal.fire({
      icon: 'error',
      title: 'Calma!',
      text: 'Você tem que selecionar um icone la encima para o tipo da sua tarefa!!',
     })
    else if(!date)
     Swal.fire({
      icon: 'error',
      title: 'Calma!',
      text: 'Precisamos saber para que dia é a tarefa!!',
     })
    else if(!hour)
     Swal.fire({
      icon: 'error',
      title: 'Calma!',
      text: 'Precisamos saber para que hora é a tarefa!!',
      })

    else if(match.params.id){
      await api.put(`/task/${match.params.id}`, {
        macaddress: isConnected,
        done,
        title,
        type,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() =>
        setRedirect(true)
      )
      Swal.fire({
        icon: 'success',
        title: 'Boa!',
        text: 'Atualizamos sua tarefa!!',
      })

    }
    else{
      await api.post('/task', {
        macaddress: isConnected,
        title,
        type,
        description,
        when: `${date}T${hour}:00.000`,
        done
      }).then(() =>
        setRedirect(true)
      )
      Swal.fire({
        icon: 'success',
        title: 'Boa!',
        text: 'Salvamos sua tarefa!!',
      })
    } 
  }

  async function Remove(){
    Swal.fire({
      title: 'Realmente deseja excluir a tarefa?',
      text: "Você não vai conseguir voltar atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/task/${match.params.id}`)
        .then(() => setRedirect(true))
        Swal.fire(
          'Deletada!',
          'Apagamos a tarefa para você!',
          'success'
        )
      }
    })
  }

  useEffect(() => {
    if(!isConnected)
    setRedirect(true);
    LoadTaskDetails();
  }, [])

  return (
    <S.Container>
      {redirect && <Redirect to="/" /> }
      <Header/>
       <S.Content>
        <S.Form>
          <S.TypeIcons>
            {
              TypeIcons.map((icon, index) => (
                index > 0 &&
                <button type="button" onClick={() => setType(index)}>
                  <img src={icon} alt="Tipo da tarefa" className={type && type != index && 'inative'}/>
                </button>
              ))
            }
          </S.TypeIcons>     
          <S.Input>
            <span>Título</span>
            <input type="text" placeholder="Título da tarefa..." 
            onChange={e => setTitle(e.target.value)} value={title}/>
          </S.Input>
          <S.TextArea>
            <span>Descrição</span>
            <textarea rows={5} placeholder="Detalhes da tarefa..." onChange={e => setDescription(e.target.value)} value={description}/>
          </S.TextArea>
          <S.Input>
            <span>Data</span>
            <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
          </S.Input>
          <S.Input>
            <span>Hora</span>
            <input type="time" onChange={e => setHour(e.target.value)} value={hour}/>
          </S.Input>
          <S.Options>
            <div>
              <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
              <span>CONCLUÍDO</span>

            </div>
            {match.params.id && <button type="button" onClick={Remove}>EXCLUIR</button> }       
          </S.Options>
          <S.Save>
            <button type="button" onClick={Save}>SALVAR</button>
          </S.Save>
        </S.Form>
       </S.Content>
      <Footer/>
    </S.Container>
  )
}

export default Task;
