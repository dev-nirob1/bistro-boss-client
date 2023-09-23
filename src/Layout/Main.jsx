import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation()
    console.log(location)
    const hideHeader = location.pathname.includes('/login' || '/register')
    const hideFooter = location.pathname.includes('/login' || 'register')
    return (
        <div>
           {hideHeader || <Navbar/>}
            <Outlet/>
            {hideFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;