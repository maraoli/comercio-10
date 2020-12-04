import React, {useState} from 'react';
import PageDefault from '../../components/pageDefault/PageDefault'
import {Link , useHistory} from 'react-router-dom'
import api from '../../services/api'
import './Cadastro.css';

export default function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');    
    const [senha_1, setSenha_1] = useState('');
    const [senha_2, setSenha_2] = useState('');
    const [senha, setSenha] = useState(senha_1);

    const history = useHistory();

    async function handleCadastroSubmit(e){
        e.preventDefault();

        const data  = {
            nome,
            email,
            senha
        }

        console.log(data)

        // try{
        //     await api.post('/cadastrar', data)
        //     history.push('/')
        // }catch(erro){
        //     alert('Erro ao efetuar cadastro')
        // }
    }

    return(
        <PageDefault>        
            <div className="cadastro_container">
                <div className="cadastro_board">
                    <form onSubmit={handleCadastroSubmit}>
                        <fieldset>
                            <label>Nome:</label>
                            <input 
                                type="text"
                                value={nome}
                                onChange={e=> setNome(e.target.value)} 
                            />

                            <label>E-mail:</label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={e=> setEmail(e.target.value)} 
                            />

                            <div className="cadastro_senhas">
                                <div>
                                    <label htmlFor="cadastrar_senha_1">Senha:</label>
                                    <input 
                                        type="password"
                                        id="cadastrar_senha_1"
                                        value={senha_1}
                                        onChange={e=>{setSenha_1(e.target.value); setSenha(e.target.value)}} 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="cadastrar_senha_2">Confirmar senha:</label>
                                    <input 
                                        type="password"
                                        id="cadastrar_senha_2"
                                        value={senha_2}
                                        onChange={e=>setSenha_2(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button className="cadastro_button" type="submit">Cadastrar</button>
                        </fieldset>
                    </form>

                    <div className="cadastro_redirect">
                        <Link to="/login"><span>Já possuo cadastro</span></Link>
                    </div>
                </div>
            </div>
        </PageDefault>
    )
}