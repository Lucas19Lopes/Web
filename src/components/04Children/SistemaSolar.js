import React from "react"

const SistemaSolar = ({children, galaxia}) => {
    return (
        <>
            <h2>Sistema Solar da Galáxia {galaxia}</h2>
            <hr />
            {
                React.Children.map(
                    children,
                    ( planeta ) => {
                        return React.cloneElement(planeta,{galaxia})
                    }
                )
            }
        </>
    )
}

export default SistemaSolar