import './Info.css';

const Info = (props) => {
    return (
        <>
            <div className="currency__pair">
                <div className="currency__value">
                    <p>
                        {props.name}
                    </p>
                </div>
                <div className="currency__value">
                    <p>
                        {props.value}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Info;