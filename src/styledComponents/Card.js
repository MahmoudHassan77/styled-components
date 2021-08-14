import React from 'react';
import styled,{keyframes} from 'styled-components';



const FedIn = keyframes`
    from{
        transform:translateY(-20px);
        opacity:0;
    }
    to{
        transform: translateY(0);
        opacity: ;

    }
`

const StyledCard = styled.div`
    width:450px;
    height:500px;
    display: flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    background-color:${({theme})=>theme.colors.backgroundColor};
    border-radius:20px;
    animation: ${FedIn} 2s ease-in;
    box-shadow:${({theme})=>`10px 10px 13px ${theme.colors.shadowBottom}, -10px -10px 13px ${theme.colors.shadowTop}`} ;
`

const Card = (props) => {
    return (
        <StyledCard {...props}>
            {props.children}
        </StyledCard>
    )
}
export default Card
