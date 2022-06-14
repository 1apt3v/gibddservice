import React, { useEffect } from 'react';

const InputComponent = ({ value, setInputValue, handleKeyPress, ...props }) => {

    const changeInput = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <input onKeyDown={handleKeyPress} autoFocus={true} className={props.className} type="text" placeholder={props.placeholder} value={value} onChange={changeInput} />
    );
};

// export default connect(mapStateToProps, { setInputValue })(InputComponent);
export default InputComponent;