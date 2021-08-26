const TaskModel = require('../model/TaskModel')
const { isPast} = require('date-fns');

const TaskValidation = async (req, res, next) =>{
    
    const{macaddress, type, title, description, when } = req.body;

    if(!macaddress)
    return res.status(400).json({error: 'macaddress é obrigatorio!'});
    else if(!type)
    return res.status(400).json({error: 'tipo é obrigatorio!'});
    else if(!title)
    return res.status(400).json({error: 'título é obrigatorio!'});
    else if(!description)
    return res.status(400).json({error: 'descrição é obrigatorio!'});
    else if(!when)
    return res.status(400).json({error: 'data e hora são obrigatorias!'}); 
    else{
    let exists;

    if(req.params.id){
        exists = await TaskModel.findOne(
            { 'when': {'$eq': new Date(when)},
              'macaddress': {'$in': macaddress},
              '_id': {'$ne': req.params.id}
            });
    }else{
        if(isPast(new Date(when)))
          return res.status(400).json({error: 'escolha uma data e hora futura!'});
        exists = await TaskModel.findOne(
            { 'when': {'$eq': new Date(when)},
              'macaddress': {'$in': macaddress}
            });
    }

    if (exists){
        return res.status(400).json({error: 'já existe uma tarefa nesse dia e horario!'});
    }
    
    next();
 }
}

module.exports = TaskValidation;

