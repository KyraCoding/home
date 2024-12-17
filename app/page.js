import Image from 'next/image';
import Footer from '../components/footer/Footer';
import logo from '@/public/logo512.png';
import Widget from '../components/general/Widget';

export const metadata = {
    title: "Home - KyraCoding",
}

export default function Home() {
    return (
        <div className='flex w-4/5 flex-col px-8 pt-4 text-black dark:text-white overflow-auto'>
            <div className='flex flex-row h-52 w-full gap-4'>
                <div className='aspect-square h-full'>
                    <Image src={logo} alt="logo" />
                </div>
                <div className='flex-col w-full h-full pl-8 py-2'>
                    <h1 className='text-5xl'>KyraCod<span className='animate-pulse text-azure'>.</span>ing</h1>
                    <p className='text-lg mt-6 text-gray-700 dark:text-gray-300 w-3/4'>
                        Hi there! I host my personal website and portfolio here, as well as some projects like file sharing and image hosting.
                    </p>
                </div>
            </div>

            <div className='flex flex-col mt-12 text-gray-700 dark:text-gray-300'>
                <div className="grid lg:grid-cols-3 gap-4 mt-6">
                    <Widget title="About Me" description="Learn more about me!" url="/about" />
                    <Widget title="Projects" description="See what I've been up to!" url="/projects" />
                    <Widget title="Guestbook" description="Leave behind a message!" url="/guestbook" />
                    <Widget title="Link Shortener" description="Shorten your links!" url="/shorten" />
                    <Widget title="Image Hosting" description="Host images, free forever!" url="/imagehosting" />
                    <Widget title="FileDrop" description="Share files across devices!" url="/filedrop" />
                </div>
            </div>
            <Footer />
        </div>

    );
}