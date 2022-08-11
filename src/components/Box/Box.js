import './Box.css';

const Box = (props) => {

    const style = props.num === 1?

        {backgroundColor: 'rgb(50, 50, 50)',
            color: 'white',
            boxShadow:'5px 5px 20px rgb(50, 50, 50)'
        }
        :
        {border: '1px solid rgb(50, 50, 50)'};

    return (
        <>
            <div className="box" style={style} >
                {props.children}
            </div>
        </>
    )
}

export default Box;