const NavMenu = () => {
    const menuItems = [
        "Road",
        "MTBs",
        "E-Bikes",
        "Accessories",
        "Brands"
    ];

    return(
        <div className="flex items-center justify-between w-3/4 mx-4 mt-2">
            {menuItems.map((item) => (
                <p className="text-dark-gray mx-4 hover:text-red-900 focus:text-red">{item}</p>
            ))}
        </div>
    )
}

export default NavMenu;