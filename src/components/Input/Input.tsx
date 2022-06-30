import classes from "./Input.module.css";

const Input = () => {
    return (
        <div>
            <input className={classes.input}
                   type="number"
                   placeholder="Введите сумму"
                  // value={"100"}
            />
        </div>
    )
}
export default Input
