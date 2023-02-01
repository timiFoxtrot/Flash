import { useState } from "react";
import { Outlet } from "react-router-dom"
import SideBar from "../components/sidebar";
import { ThemeConText } from "../contexts/themeContext";
import { StyledHome } from "../styles/home.styled";



const HomePage = () => {
    const [theme, setTheme] = useState(true);

    return (
        <ThemeConText.Provider value={{ theme, setTheme }}>
            <StyledHome dark={theme === true ? "dark" : "light"}>
                <SideBar dark={theme === true ? "dark" : "light"} />
                <Outlet />
            </StyledHome>
        </ThemeConText.Provider>
    );
}

export default HomePage;