import React, { Component } from 'react';

import ItemContato from './ItemContato';
import email from '../img/email.png';
import fone from '../img/fone.png';
import endereco from '../img/endereco.png';
import git from '../img/icon.ico';
import curriculo from '../img/curriculum.png';

export default class Contato extends Component {
    render() {
        return (
            <div>
                <h3>Contato</h3>
                <ItemContato
                    icone={endereco}
                    descricao="Endereço"
                    contato="Rua 8 de novembro, 22" />
                <ItemContato
                    icone={fone}
                    descricao="Telefone"
                    contato="(67) 4444-3333" />
                <ItemContato
                    icone={email}
                    descricao="E-mail"
                    contato="will@email.com" />
                <ItemContato
                    icone={git}
                    descricao="github"
                    contato="https://github.com/william-oliveira-da-silva" />
                <ItemContato
                    icone={curriculo}
                    descricao="curriculo"
                    contato="https://wwws.cnpq.br/cvlattesweb/pkg_cv_estr.inicio" />
            </div>
        );
    }
}
