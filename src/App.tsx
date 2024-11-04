import React from 'react';
import './App.css';
import {StyledBtn} from "./components/Button.styled";
import {Menu} from "./components/Menu.styled";
import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="">Menu Item 1</a></li>
                    <li><a href="">Menu Item 2</a></li>
                    <li><a href="">Menu Item 3</a></li>
                </ul>
            </Menu>
            <Box>
                {/*<StyledBtn color="green">Link</StyledBtn>*/}
                {/*<StyledBtn color="red" fontSize={"20px"}>Link</StyledBtn>*/}
                {/*<StyledBtn>Link</StyledBtn>*/}
                {/*<StyledBtn>Link</StyledBtn>*/}

                <StyledBtn color={myTheme.colors.primary} primary>Link</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} outlined>Link</StyledBtn>
            </Box>


        </div>
    );
}

const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media ${myTheme.media.mobile} {
        flex-direction: column;
    }

`
export default App;

