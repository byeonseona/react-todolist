import React from "react";
import styled from "styled-components";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./theme";

const Header = styled.div`
  height: 60px;
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.point};
  cursor : pointer;
`;

const Body = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.point};
  cursor : pointer;
`;



export default function App() {

  const [darkMode, setDarkMode] = React.useState(false);
  const darkModeHandler = (e) => {
    setDarkMode(!darkMode);
  };
  
  return (
    <>
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        <Header>
          <>다크 모드</>
          <>
            {darkMode ? (
              <IoMoonSharp size={24} onClick={darkModeHandler} />
            ) : (
              <IoSunnyOutline size={24} onClick={darkModeHandler} />
            )}
          </>
        </Header>
        <Body>
          <h1>Dark Mode</h1>
        </Body>
      </ThemeProvider>
    </>
  );
}
