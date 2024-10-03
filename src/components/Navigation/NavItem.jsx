import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, icon, label }) => {
    return (
        <li>
            <NavLink
                to={to}
                activeClassName="active-link"
                className="hover:bg-orange-300 text-sm py-2 pl-2 pr-2 rounded-md w-48 block"
            >
                <i className={`bi ${icon}`}></i> {label}
            </NavLink>
        </li>
    );
};

export default NavItem;