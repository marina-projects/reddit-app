import { Outlet } from "react-router-dom";
import { MainPageDiv } from "../../styles";
import Header from "../header/header";

function MainPage () {
    return (
        <MainPageDiv row alignStart justifySpace>
            <Header />
            <Outlet />
            
        </MainPageDiv>
    )
}

export default MainPage;