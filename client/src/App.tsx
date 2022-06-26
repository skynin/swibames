import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './App.css';

import { Grommet, Button, Footer, Text, Box, Image } from 'grommet';
import { grommet, dark, ThemeType } from 'grommet/themes';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import MainSection from './components/MainSection';
import GridResponsive from './components/GridResponsive';
import { ABOUT_ROUTE } from './utils/consts';
import HeaderMenu from './components/HeaderMenu';

const THEMES : { [key: string]: ThemeType }= {
  grommet,
  dark,
  // hpe,
  // aruba,
  // hp,
  // dxc,
};

function App() {

  const [themeName, setThemeName] = useState('grommet');

  // const navigate = useNavigate()

  return (
    <Grommet theme={THEMES[themeName || 'grommet']}>
      <HeaderMenu/>

      <GridResponsive gridType={'app'}>
        <LeftSide gridArea="lSection"/>
        <MainSection gridArea="mSection"/>
        <RightSide gridArea="rSection"/>
      </GridResponsive>

      <Footer background="brand" pad="medium">
        <Box direction="row" gap="xsmall">
          <Box height="32px" width="32px" border="all">
            <Image fit="cover" src="/logo192.png"/>
          </Box>
          <Text>Skynin Wit Games <b>v0.1.0</b></Text>
        </Box>
        <Button label="О сайте"/>
      </Footer>
  </Grommet>
  );
}

export default App;

//<Button label="О сайте" onClick={()=>navigate(ABOUT_ROUTE)}/>
