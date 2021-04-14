import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Painel(props){

    const [num, setNum] = useState(props.num); 
    const [lista, setLista] = useState(props.lista); 

    useEffect(() => { 
        document.title = lista;
        localStorage.setItem("lista", lista);
    }, [lista]);

    function sortear() 
    {   
        setNum(Math.ceil(Math.random()*100));  
        setLista([...lista, num]);
    }
    
    function Condicional(){ 
        if(lista.length === 0){
            return <h3>Ainda não houve nenhum número sorteado!</h3>
        } else if(lista.length === 1) {
            return <h3> Não há números anteriores!</h3>
        } else {
            return <div> 
                        <h3 className="numAnt">Últimos números sorteados:  {lista[lista.length-1]}  </h3> 
                        <h3 className="numAnt">{lista[lista.length-2]}  </h3>
                        <h3 className="numAnt">{lista[lista.length-3]}  </h3>
                        <h3 className="numAnt">{lista[lista.length-4]}  </h3>
                        <h3 className="numAnt">{lista[lista.length-5]}  </h3>
                    </div>           
        }
    }
    
    return(
        <div className="Painel">
            <h1>{num}</h1>
            <button onClick={sortear} className="btn btn-success btn-lg my-5" type="button">Sortear</button>
            <br/> <br/>
            <Condicional />
            <br/> <br/>
            <Link to="/"> Alterar Configurações</Link>
        </div>
    );
}

export default Painel;