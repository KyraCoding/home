import React from 'react';
import {Helmet} from "react-helmet";
import Footer from '../components/footer/Footer';
import Link from '../components/general/Link';

function UnderConstruction() {
    return (
        <div className='flex-grow flex-row'>
            <Helmet>
                <title>Under Construction - KyraCoding</title>
            </Helmet>
            <div className='flex h-full w-full flex-col justify-center items-center text-black dark:text-white'>
                <h1 className="flex text-5xl">Page Under Construction</h1>
                <h1 className="flex text-1xl">Still working on this project, check back later!</h1>
                <Link url="/" title="Back Home"/>
                <Footer />
            </div>

        </div>


    );
}

export default UnderConstruction;