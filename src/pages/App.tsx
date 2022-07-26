import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// Import Components
import YouTube from '../components/cards';
import './App.css';

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={12} xl={12}>
          <Item>
            <YouTube />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
