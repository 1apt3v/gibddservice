import React, { useEffect } from 'react';

const InputComponent = ({ value, setInputValue, ...props }) => {

    const changeInput = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <input className={props.className} type="text" placeholder={props.placeholder} value={value} onChange={changeInput} />
    );
};

// export default connect(mapStateToProps, { setInputValue })(InputComponent);
export default InputComponent;