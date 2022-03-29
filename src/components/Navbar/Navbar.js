import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 1, name: 'Shop', link: '/shop'},
        {id: 1, name: 'Deals', link: '/deals'},
        {id: 1, name: 'Coupons', link: '/coupons'},
        {id: 1, name: 'Contact', link: '/contact'},
    ]
    return (
        <nav>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route=> <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;