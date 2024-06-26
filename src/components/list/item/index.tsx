import { ITask } from "../../../types/task";
import Style from "./item.module.scss";

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

export default function Item(
    {
        task,
        time,
        selected,
        completed,
        id,
        selectTask
    }:
        Props) {
    return (
        <li
            className={`
                ${Style.item} ${selected ? Style.itemSelected : ''}
                ${completed ? Style.itemCompleted : ''}
        `}
            onClick={() => !completed && selectTask( //só pode selecionar se não tiver completado a tarefa.
                {
                    task,
                    time,
                    selected,
                    completed,
                    id
                }
            )}>
            <h3> {task} </h3>
            <span> {time} </span>
            {completed &&
                <span
                    className={Style.success}
                    aria-label='tarefa concluída'
                ></span>
            }
        </li>
    )
}