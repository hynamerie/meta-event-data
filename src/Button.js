function Button() {
    const clickHandler =
    () => console.log('clicked');

    const clickHandler2 =
    () => console.log('mouse over');

    return (
        <div>
            <p>Inspect then Console to see results</p>
            <button onClick={clickHandler}>
                Click me           
            </button>

            <br></br>
            
            <button onMouseOver={clickHandler2}>
                Mouse over me
            </button>
        </div>
    );
}

export default Button;