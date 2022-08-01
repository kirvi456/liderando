import { Paper, Stack, TextField, Box, Button, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { InteresInputs } from '../../models/Inputs'

import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

interface InputsFormProps {
    inputs: InteresInputs,
    handleInputChange: (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleCancelar: () => void
}


export const InputsForm : React.FC<InputsFormProps> = ({
    inputs,
    handleInputChange,
    handleSubmit,
    handleCancelar
}) => {

    

    return (
        <Paper elevation={10} sx={{overflow: 'hidden'}}>
            <Stack>
                <Box 
                    sx={{
                        bgColor: 'background-color: #2e2b85; background-image: linear-gradient(90deg, #2e2b85 0%, #0094da 100%);',
                        height: '8px'
                    }}
                />
                <Typography variant='h6' textAlign='center' sx={{m: '12px 0'}}>
                    Datos de Entrada
                </Typography>
                <form
                    onSubmit={(e) => { handleSubmit(e) }}
                >
                    <Stack sx={{padding: 2}} spacing={2}>
                        <TextField 
                            size='small'
                            type='number'
                            value={ inputs.capitalInicial }
                            onChange={ handleInputChange }
                            label="Capital Inicial" 
                            variant="outlined"
                            name='capitalInicial' 
                        /> 

                        <TextField 
                            size='small'
                            type='number'
                            value={ inputs.interes }
                            onChange={ handleInputChange }
                            label="Tasa de Interes" 
                            variant="outlined" 
                            name='interes' 
                        /> 

                        <TextField 
                            size='small'
                            type='text'
                            value={ inputs.periodos }
                            onChange={ handleInputChange }
                            label="Tipo de Periodo" 
                            variant="outlined" 
                            name='periodos'
                            select 
                        >
                            <MenuItem value='Dia'>Diario</MenuItem>
                            <MenuItem value='Semana'>Semanal</MenuItem>
                            <MenuItem value='Mes'>Mensual</MenuItem>
                            <MenuItem value='Trimestre'>Trimestre</MenuItem>
                            <MenuItem value='Año'>Anual</MenuItem>
                        </TextField> 

                        <TextField 
                            size='small'
                            type='number'
                            value={ inputs.noPeriodos }
                            onChange={ handleInputChange }
                            label="No. Periodos" 
                            variant="outlined" 
                            name='noPeriodos' 
                        /> 

                        <Button 
                            startIcon={<CalculateOutlinedIcon />}
                            type='submit'    
                            variant='contained'
                            fullWidth
                        >
                            Calcular
                        </Button>
                        <Button 
                            onClick={ handleCancelar }
                            fullWidth
                        >
                            Cancelar
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Paper>
    )
}
