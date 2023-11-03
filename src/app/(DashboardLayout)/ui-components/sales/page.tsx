'use client';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
  Paper,
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Forms = () => {
  return (
    <Grid container spacing={3}>

      <Grid item xs={12} lg={12}>

        <BaseCard title="Nuevo">
          <>
            <Grid item xs={12} lg={12} gap={2} display={'flex'}>

              <Grid item xs={6} lg={6}>
                <Stack spacing={3}>
                  <FormControl>
                    <TextField
                      id="client-basic"
                      label="Cliente"
                      variant="standard"
                    // defaultValue="Nirav Joshi"
                    />
                  </FormControl>

                </Stack>
              </Grid>

              <Grid item xs={6} lg={6}>
                <Stack spacing={3}>
                  <TextField
                    id="name-basic"
                    label="Código"
                    variant="outlined"
                  // defaultValue="Nirav Joshi"
                  />
                </Stack>
              </Grid>
            </Grid>


            {/*  <Stack spacing={3}>



              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Comprobante:</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="invoice"
                    control={<Radio />}
                    label="Factura"
                  />
                  <FormControlLabel
                    value="ticket"
                    control={<Radio />}
                    label="Boleta"
                  />
                </RadioGroup>
              </FormControl>

              <TextField id="client-basic" label="Cliente" variant="outlined" />

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Comprobante:</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </FormControl>

              <TextField
                id="igv-basic"
                label="IGV"
                type="number"
                variant="outlined"
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Seleccionar artículo</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Seleccionar artículo"
                >

                  <MenuItem value={10}>SOPA DE PASTA</MenuItem>
                  <MenuItem value={20}>AVENA</MenuItem>
                  <MenuItem value={30}>FRIJOL</MenuItem>
                  <MenuItem value={40}>ARROZ</MenuItem>
                  <MenuItem value={50}>GELATINA</MenuItem>
                  <MenuItem value={60}>ATÚN</MenuItem>
                  <MenuItem value={70}>SHAMPOO</MenuItem>

                </Select>
              </FormControl>

              <TextField
                id="outlined-multiline-static"
                label="Cantidad"
                type='number'
                variant="outlined"
              />

              <TextField
                id="er-basic"
                label="Precio de compra"
                type='number'
                variant="outlined"
              />

              <TextField
                id="er-basic"
                label="Precio de venta"
                type='number'
                variant="outlined"
              />

              <TextField
                id="er-basic"
                label="Descuento"
                type='number'
                variant="outlined"
              />

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Fecha de vencimiento:</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </FormControl>


            </Stack> */}
            <br />
            <Button>
              Guardar
            </Button>
          </>
        </BaseCard>

      </Grid>

      {/* <Grid item xs={12} lg={12}>
          <BaseCard title="Form Design Type">
            <Stack spacing={3} direction="row">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Stack>
          </BaseCard>
        </Grid> */}

    </Grid>
  );
};

export default Forms;