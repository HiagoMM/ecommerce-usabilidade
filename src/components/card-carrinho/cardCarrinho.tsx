import React from 'react';
import { Container } from "./CardCarrinho.styles";
import Capacete from '../../assets/capacete.jpg';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Link from '@material-ui/core/Link';



const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  
const CardCarrinho: React.FC = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <>
            <Container>
                <div>
                    <img src={Capacete} className="imagem-objeto"/>
                </div>
                <div className="card-detalhes">
                    <div>
                    <h3>Pro Tork Capacete R8 Fosco Tamanho 58 Cinza/Rosa</h3>
                    <p>R$ 120,00</p>
                    </div>
                    <p>Frete gratis</p>
                    <div className="box-quantidade">
                        <FormControl className={classes.margin}>
                            <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                            >
                            <MenuItem value={1}>Qtd: 1</MenuItem>
                            <MenuItem value={2}>Qtd: 2</MenuItem>
                            <MenuItem value={3}>Qtd: 3</MenuItem>
                            <MenuItem value={4}>Qtd: 4</MenuItem>
                            <MenuItem value={5}>Qtd: 5</MenuItem>
                            <MenuItem value={6}>Qtd: 6</MenuItem>
                            <MenuItem value={7}>Qtd: 7</MenuItem>
                            <MenuItem value={8}>Qtd: 8</MenuItem>
                            <MenuItem value={9}>Qtd: 9</MenuItem>
                            <MenuItem value={10}>10+</MenuItem>
                            </Select>
                        </FormControl>

                    
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                            className="link"
                            >
                            Excluir 
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CardCarrinho;