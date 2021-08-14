import styled,{createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    html{
        font-family: sans-serif;
        background-color:${({theme})=>theme.colors.backgroundColor};
    }
`

export const MainTheme = {
    colors:{
        HeaderColor: "#1bd28e",
        textColor:"#3ca4eb",
        backgroundColor:"#fff",
        shadowTop:"#ffffff",
        shadowBottom: "#cbced1"
    }
};
export const DarkTheme = {
    colors:{
        HeaderColor: "#1bd28e",
        textColor:"#fff",
        backgroundColor:"#34393e",
        shadowTop:"#41484e",
        shadowBottom: "#1c1f22"
    },

};

export const H1 = styled.h1`
    font-weight:bold;
    margin:${({margin})=>margin};
    color: ${({theme})=>theme.colors.HeaderColor};
`;

