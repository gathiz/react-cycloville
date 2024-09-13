import { ReactNode } from "react";

interface NavItemProps {
    icon: ReactNode;
    title: string;
}

const NavItem: React.FC<NavItemProps> = ({icon, title}) => {
    return (
        <div className="flex flex-col items-center justify-evenly text-sm mt-2">
            {icon}
            <p className="text-sm">{title}</p>
        </div>
    )
}

export default NavItem;