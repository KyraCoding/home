import React from 'react';
import {Helmet} from "react-helmet";
import Footer from '../components/footer/Footer';
import Link from '../components/general/Link';

function NotFound() {
    return (
        <div className='flex-grow flex-row'>
            <Helmet>
                <title>404 - KyraCoding</title>
            </Helmet>
            <div className='flex h-full w-full flex-col justify-center items-center text-black dark:text-white'>
                <h1 className="flex text-5xl">404 Page Not Found</h1>
                <h1 className="flex text-1xl">That's annoying, sorry about that!</h1>
                <Link url="/" title="Back Home" />
                <Footer />
            </div>

        </div>


    );
}

export default NotFound;