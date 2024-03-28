import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Header from '../Header/index.tsx';
import Landing from '../../pages/Landing/index.tsx';
import Hardskills from '../../pages/Hardskills/index.tsx';
import Projects from '../../pages/Projects/index.tsx';
import Contact from '../../pages/Contact/index.tsx';
import Softskills from '../../pages/Softskills/index.tsx';
import Footer from '../Footer/index.tsx';


function AppRouter() : JSX.Element {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/softskills' element={<Softskills />} />
                <Route path='/hardskills' element={<Hardskills />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
}


export default AppRouter;