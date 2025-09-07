import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageDefault from '../pages/PageDefault';
import Home from '../pages/Home';
import Result from '../pages/Result';
import { EmailResponseProvider } from '../context/EmailResponse';
import NotFound from '../pages/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <EmailResponseProvider>
                <Routes>
                    <Route path='/' element={<PageDefault />}>
                        <Route index element={<Home />} />
                        <Route path='result' element={<Result />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </EmailResponseProvider>
        </BrowserRouter>
    )
}

export default Router;