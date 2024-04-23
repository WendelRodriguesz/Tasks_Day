import React from "react";
import Button from "../button"

class Form extends React.Component {
    render(){
        return (
            <form>
                <div>
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
                <div>
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
                <Button/>
            </form>
        )
    }
}
export default Form;