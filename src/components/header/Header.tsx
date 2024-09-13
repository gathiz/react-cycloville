import NavMenu from "./menu/NavMenu";
import Navbar from "./navbar/Navbar";

const Header = () => {
    return(
        <header className="fixed z-50 flex flex-col top-0 left-0 justify-center items-center bg-dark-gray w-full h-[5.625rem]">
            <Navbar/>
            <hr className="w-full my-2"/>
            <NavMenu/>
        </header>
    );
}

export default Header;