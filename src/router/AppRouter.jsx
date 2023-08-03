import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages'
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage/>}/>

            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/>

        </Routes>
    </>
  )
}
