import React from 'react';
import styled,{css} from 'styled-components';


const StyledFlex = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-wrap: wrap;
flex-direction:${({direction})=>direction};
width:${({width})=>width};
& > *{
    margin: 30px 30px;
}
${({screenSize})=>css`
${()=>screenSize === "lg" && `font-size:0.7rem; color:red;` }
${()=>screenSize === "sm" && `font-size:0.4rem; color:yellow;` }
`}

`


const Flex = (props) => {
    return (
        <StyledFlex {...props}>
            {props.children}
        </StyledFlex>
    )
}

export default Flex
