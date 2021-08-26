import React, {useMemo} from 'react';
import {format} from 'date-fns';
import * as S from './styles';
import typeIcons from '../../utils/typeicons';

function TaskCard({type, title, when, done}) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));
  return (
    <S.Container done={done}>
        <S.TopCard done={done}>
            <img src={typeIcons[type]} alt = "Icone da Tarefa"/>
            <h3>{title}</h3>
        </S.TopCard>
        <S.BottonCard>
          <strong>{date}</strong>
          <span>{hour}</span>
        </S.BottonCard>
    </S.Container>
  )
}

export default TaskCard;