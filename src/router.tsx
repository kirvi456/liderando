import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterLayout } from './common/RouterLayout';
import { CalcPage } from './pages/CalcPage';
import { HomePage } from './pages/Home';


export const AppRouter : React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='/' element={<RouterLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/calculadora' element={<CalcPage />} />
            </Route>
            
        </Routes>
    )
}