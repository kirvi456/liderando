import React, { useState } from 'react'
import { Stack, Grid, Typography } from '@mui/material';
import { InputsForm } from './InputsForm';
import { InteresInputs, emptyInputs } from '../../models/Inputs';
import { InteresResults } from '../../models/Results';
import { Results } from './Results';
import { useNotification } from '../../hooks/useNotification';

export const Calculadora = () => {

    const [inputs, setInputs] = useState<InteresInputs>({...emptyInputs})
    const [results, setResults] = useState<InteresResults>([])

    const { openErrorNotification } = useNotification();

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        inputs[ e.target.name as 'periodos'] = e.target.value;
        setInputs({...inputs})
    }

    const validarFormulario = () : boolean => {
        if(!inputs.capitalInicial || inputs.capitalInicial === ''){
            openErrorNotification('[ERROR]: Se debe espeficar el capital inicial.');
            return false;
        }
        const CI = parseFloat(inputs.capitalInicial); 
        if( isNaN( CI ) || CI <= 0 ){            
            openErrorNotification('[ERROR]: El capital inicial debe ser mayor a 0.');
            return false;
        }


        if(!inputs.interes || inputs.interes === ''){
            openErrorNotification('[ERROR]: Se debe espeficar el interes.');
            return false;
        }
        const I = parseFloat(inputs.interes); 
        if( isNaN( I ) || I <= 0 ){            
            openErrorNotification('[ERROR]: El interes debe ser mayor a 0.');
            return false;
        }

        if(!inputs.noPeriodos || inputs.noPeriodos === ''){
            openErrorNotification('[ERROR]: Se debe espeficar el número de periodos.');
            return false;
        }
        const P = parseInt(inputs.noPeriodos); 
        if( isNaN( P ) || P <= 0 ){            
            openErrorNotification('[ERROR]: El número de periodos debe ser un entero mayor a 0.');
            return false;
        }

        if(!inputs.periodos || inputs.periodos === ''){
            openErrorNotification('[ERROR]: Se debe espeficar el tipo de periodo.');
            return false;
        }

        return true;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( !validarFormulario() ) return;
        
        
        const CI = Number( inputs.capitalInicial );
        const IN = Number((Number( inputs.interes ) / 100).toFixed(4));
        const PE = parseInt( inputs.noPeriodos );
        const PD = inputs.periodos;
        const IN_CI = Number((IN * CI).toFixed(4));

        const resultados : InteresResults = [{
            capital: CI,
            interes: IN_CI,
            capitalTotal: CI + IN_CI,
            tipoPeriodo: PD + ' 1'
        }];

        for(let i = 2; i <= PE; i++){

            const calculoAnterior = resultados[i - 2];

            const ITA = calculoAnterior.capitalTotal;

            const ITA_IN = Number((ITA * IN).toFixed(4));
            const TOT = Number((ITA + ITA_IN).toFixed(4));

            resultados.push({
                capital: ITA,
                interes: ITA_IN,
                capitalTotal: TOT,
                tipoPeriodo: PD + ' ' + i
            })
        }

        setResults([...resultados])
    }

    const handleCancelar = () => {
        setInputs({...emptyInputs})
        setResults([])
    }

    return (
        <Stack spacing={3}>
            <Typography textAlign='center' variant='h3'>
                Calculadora de Interes 
            </Typography>
            <Grid container>
                <Grid item xs={12} md={12} lg={6} sx={{p: 2}}>
                    <InputsForm 
                        inputs={ inputs }
                        handleInputChange={ handleInputChange }
                        handleSubmit={ handleSubmit }
                        handleCancelar={ handleCancelar }
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={6} sx={{p: 2}}>
                    <Results 
                        results={results}
                    />
                </Grid>
            </Grid>

        </Stack>
    )
}
