
export interface WithRedColorProps {
    color: string;
}

interface CoreProps {
    
}

const withRedColor = <P extends WithRedColorProps>(WrappedComponent: React.ComponentType<P>) : React.FC<CoreProps & Omit<P, keyof WithRedColorProps>>=> {
    const ResultComponent = ({ ...props} : CoreProps) => {
        return (
            <WrappedComponent 
                {...(props as P)}
                color={"red"}
                />
        );
    };

    return ResultComponent;
};

export default withRedColor;