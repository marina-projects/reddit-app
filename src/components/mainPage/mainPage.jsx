import { Outlet } from "react-router-dom";
import { MainPageDiv } from "../../styles";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

function MainPage () {
    return (
        <MainPageDiv row alignStart justifySpace>
            <Header />
            <Sidebar />
            <Outlet />
            
        </MainPageDiv>
    )
}

export default MainPage;