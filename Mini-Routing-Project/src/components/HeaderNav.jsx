import { Link, NavLink } from "react-router-dom"

import { useAuth } from "../hooks/useAuth"

function HeaderNav() {

    const { user, login, logot } = useAuth()
    return (
        <div>
            <header className='bg-gray-600'>
                <nav className='flex flex-col'>
                    <ul className='list-none'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }

                            >
                                Home

                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }

                            >
                                About

                            </NavLink>
                        </li>

                        {
                            user ?

                                <>
                                    <li>
                                        <NavLink
                                            to='/dashboard'
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }

                                        >
                                            Dashboard

                                        </NavLink>
                                    </li>

                                    {
                                        (user.role === 'admin') ?
                                            <>
                                                <li>
                                                    <NavLink
                                                        to='/admin'
                                                        className={({ isActive }) =>
                                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                                        }

                                                    >
                                                        Admin

                                                    </NavLink>
                                                </li>
                                            </> : null
                                    }

                                    <li>
                                        <NavLink
                                            to='/profile'
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }

                                        >
                                            Profile

                                        </NavLink>
                                    </li>

                                </> : null
                        }

                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }

                            >
                                Login

                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default HeaderNav    