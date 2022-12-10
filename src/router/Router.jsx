import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from '../pages/Home'
import { Page1 } from '../pages/Page1'
import { Page2 } from '../pages/Page2'
import { Page3 } from '../pages/Page3'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MainLayout /> }>
                    <Route index element={ <Home /> }/>
                    <Route path="page01" element={ <Page1 /> } />
                    <Route path="page02" element={ <Page2 /> } />
                    <Route path="page03" element={ <Page3 /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
