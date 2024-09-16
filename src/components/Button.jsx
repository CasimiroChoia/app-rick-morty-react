import style from "./Button.module.css";
export default function Button({ onClick, text }) {
    return <button className={style.Button} onClick={() => onClick()}>{text}</button>
}