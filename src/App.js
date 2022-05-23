import Portraits from './lib/components/Portraits';
import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import {
  Stack,
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
  ToggleButtonGroup, 
  ToggleButton, 
  Box, 
  Switch, 
  AppBar, 
  Button, 
  CssBaseline, 
  Grid, 
  Toolbar, 
  Typography, 
  Link, 
  GlobalStyles, 
  Container, 
  IconButton } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import './App.css';

const light = createTheme({
  mode: "light",
  palette: {
    primary: {
      light: '#474b52',
      main: '#20232a',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9affff',
      main: '#61dafb',
      dark: '#10a8c8',
      contrastText: '#000',
    },
  },
})

const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#474b52',
      main: '#20232a',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9affff',
      main: '#61dafb',
      dark: '#10a8c8',
      contrastText: '#000',
    },
  },
})

const portraits = [
  {
    leftPortrait: {
      img: "1.png",
      name: "Charlie Boyer",
      skills: [
        {
          img: "Agilité.svg",
          name: "Agilité"
        },
        {
          img: "Architecture.svg",
          name: "Architecture"
        }
      ]
    },
    rightPortrait: {
      img: "2.png",
      name: "Charlotte Colliou",
      skills: [
        {
          img: "Data.svg",
          name: "Data"
        }
      ]
    }
  },
  {
    leftPortrait: {
      img: "3.png",
      name: "Jeanne Marcade",
      skills: [
        {
          img: "Design.svg",
          name: "Design"
        }
      ]
    },
    rightPortrait: {
      img: "4.png",
      name: "William JEZEQUEL",
      skills: [
        {
          img: "DevOps.svg",
          name: "DevOps"
        }
      ]
    }
  }

]

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="left" {...props}>
       {' Released under the '}
       <Link color="inherit" href="https://opensource.org/licenses/MIT">
        MIT License
        </Link>{' '}.<br/>
      {'Made with ❤️ by '}
      <Link color="inherit" href="https://oss.zenika.com/">
        Zenika
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations', 'Privacy policy', 'Terms of use'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  }
];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const [isCopyNpmCommandChecked, setIsCopyNpmCommandChecked] = useState(false);
  const copyNpmCommand = (e) => {
    navigator.clipboard.writeText("npm install react-portraits")
    if(!isCopyNpmCommandChecked) {
      setIsCopyNpmCommandChecked(true)
    }
  }

  const [alignment, setAlignment] = useState('center');
  const handleAlignment = (event, newAlignment) => {
    if(!newAlignment) return;
    setAlignment(newAlignment);
  }

  const [animationState, setAnimationState] = useState('running');
  const handleAnimationState = (event, newState) => {
    if(!newState) return;
    setAnimationState(newState);
  }

  const [fontSizeValue, setFontSizeValue] =  useState(20);
  const updateFontSize = (event, newFontSize) => {
    setFontSizeValue(newFontSize)
  }

  const [portraitFrameSize, setPortraitFrameSize] = useState(250);
  const updatePortraitFrameSize = (event, newFrameSize) => {
    setPortraitFrameSize(newFrameSize)
  }

  const [descriptionWidth, setDescriptionWidth] = useState(200);
  const updateDescriptionWidth = (event, descriptionWidth) => {
    setDescriptionWidth(descriptionWidth)
  }

  const [skillsWidth, setSkillsWidth] = useState(55);
  const updateSkillsWidth = (event, skillsWidth) => {
    setSkillsWidth(skillsWidth)
  }

  const [textOnly, setTextOnly] = useState(false);
  const updateTextOnly = (event) => {
    setTextOnly(event.target.checked)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light }>
      <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <img style={{width: "50px", padding: "5px" }} src="react-portraits.svg" alt="Logo"/>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            React portraits
          </Typography>
          <nav>
          <IconButton target="_blank" href="https://github.com/zenika-open-source/react-portraits" color="inherit" aria-label="github link">
            <GitHubIcon />
          </IconButton>
          <IconButton target="_blank" href="https://twitter.com/zenikaoss" color="inherit" aria-label="twitter link">
            <TwitterIcon />
          </IconButton>
          <MaterialUISwitch checked={isDarkTheme} onChange={changeTheme} sx={{ m: 1 }} />
          </nav>
        </Toolbar>
      </AppBar>
      <Container style={{textAlign: 'center'}} disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          React Portraits
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Wow, look at this component library. A magnificent team:
        </Typography>
        <Button style={{marginTop: '15px' , textTransform: 'none'}} href="https://github.com/zenika-open-source/react-portraits" target="_blank" color="secondary" variant="text" disableRipple startIcon={<GitHubIcon />}>
          Star on GitHub
        </Button>
        <Button style={{marginTop: '15px', marginLeft: '15px' , textTransform: 'none'}} color="secondary" variant="contained">
          Get started
        </Button>
        <br/>
        <Button size="large" style={{marginTop: '15px', textTransform: 'none'}} onClick={copyNpmCommand}  disableRipple color='secondary' variant="outlined" endIcon={isCopyNpmCommandChecked ? <CheckIcon /> : <ContentCopyIcon />}>
          npm install react-portraits
        </Button>
      </Container>
      <Container className='main-container' maxWidth="md" component="main">
      <Grid container spacing={8}>
        <Grid item xs={12} md={9}>
          <Box component="div" style={{width: "max-content"}} sx={{ p: 2, border: '1px dashed grey' }}>
          
          {/* *-*-*-*-*-*-*-*-*-* PORTRAITS COMPONENT *-*-*-*-*-*-*-*-*-* */}

            <Portraits 
              portraits={portraits} 
              width={portraitFrameSize} 
              descriptionWidth={descriptionWidth}
              animationState={animationState}
              skillsWidth={skillsWidth} 
              fontSize={fontSizeValue} 
              align={alignment} 
              textOnly={textOnly}
            />

          {/* *-*-*-*-*-*-*-*-*-* *-*-*-*-*-*-*-*-*-* *-*-*-*-*-*-*-*-*-* */}

          </Box>
        </Grid>
        <Grid item xs={12} md={3}>




          <Box sx={{ width: 300, margin: "auto", textAlign: "start" }}>

            <Typography gutterBottom>Animation state</Typography>

            <ToggleButtonGroup
              value={animationState}
              exclusive
              onChange={handleAnimationState}
              aria-label="text alignment"
            >
              <ToggleButton value="running" aria-label="left aligned">
                <PlayArrowIcon /> Play
              </ToggleButton>
              <ToggleButton value="paused" aria-label="centered">
                <PauseIcon /> Pause
              </ToggleButton>
            </ToggleButtonGroup>

            {/* play interval */}

            {/* portrait duration */}

            {/* portrait frame size */}

            <Typography gutterBottom>Portraits width</Typography>

            <Slider
              color="secondary"
              size="small"
              min={10}
              max={500}
              value={portraitFrameSize}
              aria-label="Frame size"
              valueLabelDisplay="auto"
              onChange={updatePortraitFrameSize}
            />

            {/* description width */}

            <Typography gutterBottom>Description width</Typography>

            <Slider
              color="secondary"
              size="small"
              min={10}
              max={500}
              value={descriptionWidth}
              aria-label="Frame size"
              valueLabelDisplay="auto"
              onChange={updateDescriptionWidth}
            />

            {/* skills width */}

            <Typography gutterBottom>Skills width</Typography>

            <Slider
              color="secondary"
              size="small"
              min={10}
              max={500}
              value={skillsWidth}
              aria-label="Frame size"
              valueLabelDisplay="auto"
              onChange={updateSkillsWidth}
            />

            {/* font size */}

            <Typography gutterBottom>Font size</Typography>

            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <TextDecreaseIcon />
              <Slider 
                color="secondary" 
                min={5} 
                max={50} 
                aria-label="Font size" 
                step={5}
                marks 
                value={fontSizeValue} 
                onChange={updateFontSize} />
              <TextIncreaseIcon />
            </Stack>


            <FormGroup>
              {/* text only */}
              <FormControlLabel control={<Checkbox onChange={updateTextOnly} value={textOnly} color='secondary'/>} label="text only" />
              {/* show play button */}
              <FormControlLabel control={<Checkbox color='secondary' defaultChecked />} label="show play button" />
              {/* show index */}
              <FormControlLabel control={<Checkbox color='secondary'/>} label="show index" />
            </FormGroup>

            {/* display description : start - between - end */}

            <ToggleButtonGroup
              color="secondary"
              style={{marginTop: '15px'}}
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <FormatAlignJustifyIcon />
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRightIcon />
              </ToggleButton>
            </ToggleButtonGroup>

          </Box>

        </Grid>
      </Grid>



      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid style={{textAlign: 'end'}} container spacing={4} justifyContent="end">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
      </React.Fragment>
    </ThemeProvider >
  );
}

export default App;
