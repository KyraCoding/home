import React from 'react';
import Footer from '../components/footer/Footer';
import Link from '../components/general/Link';

function NotFound() {
    return (
        <div className='flex-grow flex-row'>
            <div className='flex h-full w-full flex-col justify-center items-center text-black dark:text-white'>
                <h1 className="flex text-4xl">404 // Not Found</h1>
                <Link url="/" title="Back Home"/>
                <Footer />
            </div>

        </div>


    );
}

export default NotFound;