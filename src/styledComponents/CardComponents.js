import React from 'react'
import styled,{css} from 'styled-components';

export const Image = styled.img`
    width: 100%;
    height: 50%;
    border-radius:20px 20px 0 0;
    object-fit: cover;
`
export const CardHeader = styled.div`
    width: 100%;
    height: 30%;
    text-align:center;
    padding:10px;
    color:${({theme})=>theme.colors.textColor};
`
export const CardFooter = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:${({theme})=>theme.colors.textColor};
`
export const ALink = styled.a.attrs(()=>(
    {target:"_blank"}
))`
    width:170px;
    height:58px;
    color:#fff;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration:none;
    font-size:20px;
    ${({backColor})=>css`{
        ${()=>backColor === "primary" && `background-color:gray;`}
        ${()=>backColor === "warning" && `background-color:#DDE617;`}
        ${()=>backColor === "success" && `background-color:#22CF0D;`}
    }`}
    &:hover{
        transform:skew(5deg, 5deg);;
    }
`
