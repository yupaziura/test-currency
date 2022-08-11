import './Input.css';

const Input = (props) => {
    return (
        <>
            <div className="convert__inputs">
                <input placeholder='0' className='convert__input' type="number" onChange={(e)=>{props.calcInput(e.target.value); }} value={props.value} />
                <select className='convert__select' id="" defaultValue={props.defaultValue} onChange={(e)=>{props.calcSelect(e.target.value) }}>
                    <option value={props.usd}>USD</option>
                    <option value={props.uah}>UAH</option>
                    <option value={props.eur}>EUR</option>
                </select>
            </div>
        </>
    )
}

export default Input;