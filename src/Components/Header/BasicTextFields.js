import React, { useContext } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { userContext } from '../../App';
const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        color: '#FFF'
      }
    },
    MuiFormLabel:{
      root:{
        color:'#000',
        '&.Mui-focused':{
          color:"#FFF"
        }
      }
    } 
  }
})
export default function BasicTextFields() {
const [search,setSearch]=useContext(userContext);

const changeItem = (e)=>{
    setSearch(e.target.value);
}
  return (
    <ThemeProvider theme={theme}>
      <form noValidate autoComplete="off">
        <TextField onChange={changeItem} id="standard-basic" label="Search!" />
      </form>
    </ThemeProvider>
  );
}