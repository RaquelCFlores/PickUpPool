import React, { useState} from 'react';
import { db } from '../../firebase';
import './RegisterPicker.css'

export const RegisterPicker = (props) => {

    const[name, setName] = useState('');
    const[ine, setIne] = useState('');
    const[placas, setPlacas] = useState('');
    const[phone, setPhone] = useState('');

    const registerPick = async (e) =>{
        e.prevetDefault();
        const newPicker = {
            name : name,
            ine: ine,
            placas: placas,
            phone: phone, 
            commit: ''
        };
        try{
            await db.collection('pickerInformation').add(newPicker);
            console.log('Datos guardados exitosamente');
        }
        catch(error){
            console.log('Datos no guardados', error)
        }
    };

    return(
        <div className="registerPicker">
            <h1 className='titlePicker'>REGISTRATE COMO PICKER</h1>
                <div className="registerDivFormP">
                    <form className="registerPickerForm" > 
                        <label>{props.user.email}</label>
                        <label htmlFor="name">Nombre completo*</label>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="registerPickerInput" />
                        <label htmlFor="key">Clave Electoral*</label>
                        <input value={ine} onChange={(e) => {setIne(e.target.value)}} type="text" className="registerPickerInput" />
                        <label htmlFor="key">No. de placas*</label>
                        <input value={placas} onChange={(e) => {setPlacas(e.target.value)}} type="text" className="registerPickerInput" />
                        <div className="radioButtom">
                            <div className="radioButtomOne">
                                <input type="radio" name="bicicleta"/>Bicicleta
                                <input type="radio" name="automovil"/>Automóvil
                            </div>
                            <div className="radioButtomTwo">
                                <input type="radio" name="motocicleta"/>Motocicleta
                                <input type="radio" name="caminando"/>Caminando
                            </div>
                        </div>
                        <label htmlFor="telephone">Teléfono*</label>
                        <input value={phone} onChange={(e) => {setPhone(e.target.value)}} type="number" className="registerPickerInput" />
                        <button onClick={registerPick} value="regPicker" className="registerPickerButton" >UNIRME</button>
                    </form>
                    </div>
        </div>
    );
}
