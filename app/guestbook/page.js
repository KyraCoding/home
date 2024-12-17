import Footer from '@/components/footer/Footer';
import StyledLink from '@/components/general/Link';


export const metadata = {
    title: "Guestbook"
}

export default function Guestbook() {
    return (
        <div className='flex-grow flex-row'>
            <div className='flex h-full w-full flex-col justify-center items-center text-black dark:text-white'>
                <h1 className="flex text-5xl">404 Page Not Found</h1>
                <h1 className="flex text-1xl">That's annoying, sorry about that!</h1>
                <StyledLink url="/" title="Back Home" />
                <Footer />
            </div>
        </div>
    );
}