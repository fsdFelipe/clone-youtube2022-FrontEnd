import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from "./utils/theme";
import { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './page/Home';
import Video from './page/Home/Video';
import SignIn from './page/SignIn';
import Search from './page/Home/Search';

const Container = styled.div`
display : flex;
`;
const Main = styled.div`
flex :7;
background-color: ${({theme}) => theme.bg};
`;
const Wrapper = styled.div`
padding: 22px 96px;
`;

function App() {
const [darkMode, setDarkMode] = useState()

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      <Menu darkMode= {darkMode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path='/'>
              <Route index element={<Home type="random" />}/>
              <Route path='trends' element={<Home type="trend" />}/>
              <Route path='subscriptions' element={<Home type="sub" />}/>
              <Route path='search' element={<Search />}/>
              <Route path='signin' element={<SignIn />}/>
              <Route path='/video'>
                <Route path=':id' element={<Video />}/>
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
