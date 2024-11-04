import styled, {css} from "styled-components";
import {MyAnimations} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string,
    primary?: boolean,
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    //border: none;
    //background-color: ${props => props.color || "#fb3f78"};
    padding: 10px 20px;
    //color: snow;
    //font-size: 2rem;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;
    
    

    &:hover {
        background-color: aqua;
        // animation: ${MyAnimations} 2s ease-in-out;
    }

    //outline
    ${props => props.outlined && css<StyledBtnPropsType>`
        
        border: 2px solid ${props => props.color || "#fb3f78"};
        color: ${props => props.color || "#fb3f78"}
        background-color: transparent;

        &:hover {
            background-color: ${props => props.color || "#fb3f78"};
            color: snow;
                // animation: ${MyAnimations} 2s ease-in-out;
        }
    `} 
    
    //primary
    ${props => props.primary && css<StyledBtnPropsType>`
        
        background-color: ${props => props.color || "#fb3f78"};
        color: snow;

        &:hover {
            background-color: aqua;
            color: snow;
            border: 2px solid ${props => props.color || "red"};;
        }
        
    `}
`