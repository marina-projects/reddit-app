import { Outlet } from "react-router-dom";
import { MainPageDiv } from "../../styles";
import Header from "../header/header";
import Footer from "../footer/footer";

function MainPage () {
    return (
        <MainPageDiv row alignStart justifySpace>
            <Header />
            <Outlet />
            <Footer />
            
        </MainPageDiv>
    )
}

export default MainPage;