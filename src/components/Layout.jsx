import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './Comics/page.css';

const Layout = () => {
   return (
      <div сlassName="wrapper">
         <Header />
         <div className="body">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}

export default Layout;