import React from "react";

export default function TodoItem(props) {
    const markDone = (e) => {
        props.onCheck(props.id, e.target.checked);
    };

    const remove = () => {
        props.removeItem(props.id)
    }

    return (
        <div className="todo">
            <div>
            <input type="checkbox" checked={props.isDone} onChange={markDone}></input>
            <label className={props.isDone ? 'done' : ''}>{props.text}</label>
            </div>
            <button onClick={remove}>x</button>
        </div>
    );
};
