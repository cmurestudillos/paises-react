import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavbarComponent from '../components/shared/navbar/NavbarComponent';
import FooterComponent from "../components/shared/footer/FooterComponent";
import HomeComponent from '../components/home/HomeComponent';
import ErrorComponent from '../components/shared/error/ErrorComponent';

const Router = () => {
    return ( 
        <BrowserRouter>
            <NavbarComponent /> 
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/home" element={<HomeComponent />} />
                <Route element={<ErrorComponent />} />
            </Routes>
            <FooterComponent />   
        </BrowserRouter>
    );
}

export default Router;