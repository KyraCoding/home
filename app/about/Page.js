import Footer from '../../components/footer/Footer';

export default function About() {
    return (
        <div className='flex w-4/5 flex-col px-8 pt-4 text-black dark:text-white overflow-auto'>
            <div className='flex items-center h-full w-full'>
                <h1 className='text-4xl font-bold'>Hi, I'm Oliver.</h1>
            </div>
            <Footer />
        </div>
    );
}
