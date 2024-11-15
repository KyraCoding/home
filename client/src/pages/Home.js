import React from 'react';
import Footer from '../components/footer/Footer';
import logo from '../assets/logo512.png';

function Home() {
    return (
        <div className='flex w-4/5 flex-col px-8 pt-4 text-black dark:text-white'>
            <div className='flex flex-row h-64 w-full gap-4'>
                <img src={logo} className="aspect-square h-full" alt="logo" />
                <div className='flex-col w-full h-full pl-8 py-1'>
                    <h1 className='text-6xl'>KyraCod<span className='animate-pulse text-azure'>.</span>ing</h1>
                    <p className='text-lg mt-8 text-gray-700 dark:text-gray-300 w-3/4'>
                        Enjoy a suite of utilities designed to make your life easier, including url shortening, image hosting, file sharing and image and video conversion.
                    </p>
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default Home;