import React from "react";
import Button from "../button"
import style from'./form.module.scss'

class Form extends React.Component {
    render(){
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Titulo:
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você vai fazer?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo:
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="24:00:00"
                    required
                />
                </div>
                <Button
                    text= "Adicionar" // passa por parametro o texto do botão
                    
                />
            </form>
        )
    }
}
export default Form;