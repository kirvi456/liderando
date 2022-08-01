import React, { useState } from 'react'

import { Paper, Stack, Typography, Divider, IconButton, Tooltip } from '@mui/material'
import { InteresResult, InteresResults } from '../../models/Results'

import Calculator  from '../../assets/svg/calculator.svg';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { NumberToFixed } from '../../utils/formats';


type ResultsProps = {
    results : InteresResults
}

export const Results : React.FC<ResultsProps> = ({results}) => {

    const[index, setIndex] = useState<number>(0);

    const current : InteresResult = results[index];

    if(results.length === 0) return (
        <Stack spacing={2} alignItems='center'> 
            <Typography variant='h5'>
                Calculos y Resultados
            </Typography>
            <img
                src={Calculator}
                alt='calculation svg'
                style={{
                    width: '300px',
                    maxWidth: '90%',
                }}
            />
        </Stack>
    )

    const cantidadInicial   = NumberToFixed( results[0].capital );
    const interesResultante = NumberToFixed( results[ results.length - 1 ].capitalTotal - results[0].capital );
    const cantidadTotal     = NumberToFixed( results[ results.length - 1 ].capitalTotal );
    const balanceNeto       = NumberToFixed( results[ results.length - 1 ].capitalTotal * 0.9 );



    return (
        <Stack spacing={1}>
            <Typography variant='h5' textAlign='center'>
                Calculos y Resultados
            </Typography>
            <Stack direction='row' spacing={1} justifyContent='end'>

                <Tooltip title="Primero" placement="top">
                    <IconButton size="small" color="primary" onClick={() => { setIndex(0)}}>
                        <KeyboardDoubleArrowLeftIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Anterior" placement="top">
                    <IconButton size="small" color="primary" onClick={() => { index > 0 && setIndex(i => i - 1)}}>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Siguiente" placement="top">
                    <IconButton size="small" color="primary"  onClick={() => { index < results.length - 1 && setIndex(i => i + 1)}}>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Último" placement="top">
                    <IconButton size="small" color="primary" onClick={() => { setIndex(results.length - 1)}}>
                        <KeyboardDoubleArrowRightIcon />
                    </IconButton>
                </Tooltip>
            </Stack>
            <Paper key={'result_' + index} elevation={8} sx={{p: 2}}>
                <Stack spacing={0.5}>
                    <Stack direction='row' spacing={1}>
                        <CalendarTodayOutlinedIcon />
                        <Typography variant='h6'> 
                            { current.tipoPeriodo }
                        </Typography>
                    </Stack>
                    <Divider />
                    <Typography>
                        <strong>Capital Acumulado: </strong> { Number(current.capital.toFixed(2)).toLocaleString("en-US", { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }
                    </Typography>

                    <Typography>
                        <strong>Calculo Interes: </strong> { Number(current.interes.toFixed(2)).toLocaleString("en-US", { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }
                    </Typography>

                    <Typography>
                        <strong>Capital Total: </strong> { Number(current.capitalTotal.toFixed(2)).toLocaleString("en-US", { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }
                    </Typography>
                </Stack>
            </Paper>
                
            <Stack spacing={1} >
                <Paper elevation={8} sx={{p: 1.5}}>
                    <Typography textAlign='end'> 
                        <strong>Cantidad Inicial: </strong> { cantidadInicial }
                    </Typography>
                </Paper>
                <Paper elevation={8} sx={{p: 1.5}}>
                    <Typography textAlign='end'>
                        <strong>Interes Resultante: </strong> { interesResultante }
                    </Typography>
                </Paper>
                <Paper elevation={8} sx={{p: 1.5}}>
                    <Typography textAlign='end'>
                        <strong>Cantidad Total: </strong> { cantidadTotal }
                    </Typography>
                </Paper>
                <Divider />
                <Paper elevation={20} sx={{p: 1.5, bgcolor: 'primary.main'}}>
                    <Typography textAlign='end'>
                        <strong>Balance Neto: </strong> { balanceNeto }
                    </Typography>
                </Paper>
            </Stack>
        </Stack>
    )
}
