import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    height:100vh;
`

const AppContainer = (props) => {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}

export default AppContainer
