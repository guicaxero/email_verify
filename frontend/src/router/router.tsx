import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageDefault from '../pages/PageDefault';
import Home from '../pages/Home';
import { EmailResponseProvider } from '../context/EmailResponse';
import NotFound from '../pages/NotFound';
import Responses from '../pages/Responses';
import History from '../pages/History';

const Router = () => {
    return (
        <BrowserRouter>
            <EmailResponseProvider>
                <Routes>
                    <Route path='/' element={<PageDefault />}>
                        <Route index element={<Home />} />

                        <Route path='responses'>
                            <Route index element={<Responses />} />
                            <Route path='history' element={<History />} />
                        </Route>
                        
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </EmailResponseProvider>
        </BrowserRouter>
    )
}

export default Router;