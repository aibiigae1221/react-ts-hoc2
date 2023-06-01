import { WithRedColorProps } from "./withRedColor";

interface GreeterProp extends WithRedColorProps{
    name: string;
}

const Greeter = (props : GreeterProp) => {
    return (
        <>
            <h1>Hello, {props.name}</h1>
            <p>color: {props.color}</p>
        </>
    );
};

export default Greeter;