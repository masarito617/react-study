import {useDispatch, useSelector} from "react-redux";
import {inputTask, addTask, resetTask, asyncAddTask} from "../actions/TodoApp";

function TodoApp() {
    const dispatch = useDispatch();
    const task = useSelector(state => state.task);
    const tasks = useSelector(state => state.tasks);

    return (
      <div>
        <h1>TODO☆アプリ</h1>
        <button onClick={() => dispatch(resetTask())}>リセット</button>
        <br/>
        <input placeholder="タスクを入力するクマ"
               onChange={(e) => dispatch(inputTask(e.target.value))} />
        <button onClick={() => dispatch(asyncAddTask(task))}>追加</button>
        <ul>
            {
                tasks.map((item, i) => {
                    return <li key={i}>{item}</li>;
                })
            }
        </ul>
      </div>
    );
}
export default TodoApp;
