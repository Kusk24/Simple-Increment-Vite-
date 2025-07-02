//Calculator App
import { useState } from 'react'
import  './App.css'

function App() {
    const VAT_RATE = 0.07;
    const [vat, setVat] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);


    function handleChanges(event){
        let v = parseFloat(event.target.value);
        setPrice(v);
        let vatcalculated = v * VAT_RATE;
        setVat(vatcalculated);
    }

    function calculate(){
        let vatcalculated = price * VAT_RATE;
        setTotal(price + vatcalculated);
    }

    return (
        <>
        <h2>VAT Calculator</h2>
        <div className ="card">
            Price:
            <input 
            type = "number"
            placeholder ="Enter price"
            onChange = {handleChanges} />
            <button onClick={calculate}>Calculate VAT</button>
            <div>
                Price : {price} <br/>
                VAT Rate : {(VAT_RATE*100).toFixed(2)}%<br/>
                VAT : {vat.toFixed(2)} <br/>
                Total : {total.toFixed(2)}
            </div>
        </div>
        </>
    )
}

export default App
