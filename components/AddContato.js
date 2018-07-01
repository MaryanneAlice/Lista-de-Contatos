import { db } from './db';

export const addContato =  (nome, apelido, telefone_principal) => {
    db.ref('/contatos').push({
        nome: nome,
        apelido: apelido,
        telefone_principal: telefone_principal
    });
}