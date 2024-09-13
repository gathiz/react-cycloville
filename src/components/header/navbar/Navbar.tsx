
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import {  HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';


const Navbar = () => {
    const navItems = [
        {icon: <HeartIcon className="size-6"/>, title: "Favourite"},
        {icon: <UserIcon className="size-6"/>, title: "Account"},
        {icon: <ShoppingCartIcon className="size-6"/>, title: "Cart"}
    ];


    return (
        <div className="flex items-center justify-between w-full h-full mt-8 px-8">
            <div className="flex w-full items-center justify-between">
                <NavLogo />
            </div>
            <div className="flex items-center w-64 justify-between">
                {navItems.map((item) => (
                    <NavItem icon={item.icon} title={item.title}/>
                ))}
            </div>
        </div>
    )
}

export default Navbar;