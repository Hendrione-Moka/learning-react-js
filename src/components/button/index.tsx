import React from "react";

type ButtonProps = {
    value: string;
    handleClick: () => void;
};

const Button: React.FC<ButtonProps> = (props) => <button type="button" className="btn btn-primary" onClick={props.handleClick}>{props.value}</button>;

export default Button;