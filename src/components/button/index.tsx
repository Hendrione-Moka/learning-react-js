import React from "react";

type ButtonProps = {
    value: string;
    handleClick: () => void;
};

const Button: React.FC<ButtonProps> = (props) => <button onClick={props.handleClick}>{props.value}</button>;

export default Button;