import React, { useState } from 'react';

function Intervalo(){

    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [checkbox, setCheck] = useState(false);

    function minChange(event){
        let mm = event.target.value;
        setMin(mm);
        localStorage.setItem("min", mm);  
    }

    function maxChange(event){
        let mx = event.target.value;
        setMax(mx);
        localStorage.setItem("max", mx);  
    }

    function salvar(){
       
        let localMin = localStorage.getItem("min");
        let localMax = localStorage.getItem("max");

        if( localMax < localMin ){ 
            alert("O valor mínimo não pode ser maior que o máximo. Preencha os campos novamente!");
            window.location.reload();  
        } else {
            window.location.replace("/painel");   
            localStorage.setItem("lista", []);
        }
    }

    function handleInputChange(event) {
        const target = event.target.value;
        setCheck(!checkbox);
    }   

    return(
        <form className="Intervalo">
            <label htmlFor="min">
                Valor Mínimo &nbsp; 
                <input id="min" onChange={minChange} type="number"/>
            </label>
            <br/><br/>
            <label htmlFor="max">
                Valor Máximo &nbsp;
                <input id="max" onChange={maxChange} type="number"/>
            </label>
            <br/><br/>
            <label className="d-flex align-items-center justify-content-center">
                Marque aqui se o número gerado não puder ser repetido
                <input
                    type="checkbox"
                    onChange={handleInputChange} 
                    checked = {checkbox}
                    className="ml-1"
                />
            </label> 
            <br/><br/>
            <button onClick={salvar} className="btn btn-primary" type="button"> Salvar </button> 
        </form>
    );
}

export default Intervalo;