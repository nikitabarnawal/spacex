import React from "react";
import { useRef, useEffect } from "react";

const InputWithLabel = ({
    id,
    type = "text",
    value,
    onInputChange,
    children,
    isFocused
}) => {
    const inputRef = useRef();

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label htmlFor={id}>{children}: </label>
            <input
                type={type}
                ref={inputRef}
                value={value}
                onChange={onInputChange}
            />
            <br /> <br />
        </>
    );
};

export default InputWithLabel;
