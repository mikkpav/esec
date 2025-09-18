import EsecLogo from './assets/esec_logo.png';
import EsecIcon from './assets/esec_icon.png';
import LogoMerko from './assets/logo-merko-tr.png';
import LogoNobe from './assets/logo-nobe-tr.png';
import LogoPipelife from './assets/logo-pipelife-tr.png';
import ContactCat from './components/ContactCat';
import ActionButton from './components/ActionButton';
import ImageBuilding from './assets/image-building.avif';
import ImageFloor from './assets/image-floor.avif';
import EAS from './assets/logo-eas.png';
import ProductCard from './components/ProductCard';
import ComparisonTable from './components/ComparisonTable';
import { useEffect, useRef, useState } from 'react';
import ContactCard from './components/ContactCard';
import { products } from './data/products';
import { solutions } from './data/solutions';
import { surfacefixArguments } from './data/surfaceFixArguments';
import ImageCarousel from './components/ImageCarousel';

const imagesSurfaceFix = Object.values(
    import.meta.glob('./images/surface/*.jpg', { eager: true, as: 'url' })
);

function App() {
    const productsRef = useRef<HTMLDivElement>(null);
    const surfaceFix = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);

    const [_, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    function handleButtonContect() {
        contactRef.current?.scrollIntoView( { behavior: 'smooth'} )
    }

    function handleButtonProducts() {
        productsRef.current?.scrollIntoView( { behavior: 'smooth'} )
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        const handleResize = () => {
            setSize({width: window.innerWidth, height: window.innerHeight});
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='flex flex-col bg-background'>
            <header className='flex sticky top-0'>
                <div className={`w-full p-6 ${scrolled ? 'bg-gradient-to-b from-white/100 to-white/0 md:bg-none' : 'bg-transparent'} 
                        transition-colors duration-300 ease-in-out`}
                >
                    <picture>
                        <source srcSet={EsecLogo} media='(min-width: 768px)' />
                        <img src={EsecIcon} className='object-contain h-10 cursor-pointer' onClick={scrollToTop} />
                    </picture>
                </div>
            </header>

            <main className='flex flex-col items-center justify-center gap-level-top py-16 md:py-30'>
                <div className='flex flex-col md:flex-row w-page'>
                    <div className='flex flex-col gap-level-top'>
                        <div className='flex flex-col gap-level-atom'>
                            <h1 className='font-header'>JÄTKUSUUTLIK INFRASTRUKTUUR</h1>
                            <p className='font-subheader'>Maa-aluste torustike lahendused ning ehituseks vajalike torude ja 
                                ligipääsude müük.
                            </p>
                        </div>
                        <div className='flex flex-col md:flex-row items-center md:justify-center gap-level-atom'>
                            <div className='flex justify-center w-60'>
                                <ActionButton 
                                    title='Vaata tooteid' 
                                    action={handleButtonProducts}
                                />
                            </div>

                            <div className='flex justify-center w-60'>
                                <ActionButton 
                                    title='Võta ühendust' 
                                    light={true} 
                                    action={handleButtonContect}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row justify-evenly opacity-15'>
                            <img src={LogoMerko} className='object-contain h-20' />
                            <img src={LogoPipelife} className='object-contain h-20' />
                            <img src={LogoNobe} className='object-contain h-20' />
                        </div>
                    </div>
                </div>

                <div className='h-100 w-full overflow-hidden'>
                    <img src={ImageBuilding} className='object-cover h-full w-full' alt='Building' />
                </div>

                <div className='flex flex-col w-page' ref={productsRef}>
                    <section className='flex flex-col gap-level-top'>
                        <h1 className='font-header'>Tooted</h1>

                        <div className='flex flex-col md:flex-row md:justify-center gap-level-atom'>
                            { products.map((product) => <ProductCard product={product} /> ) }
                        </div>

                        <h2 className='font-subheader bg-esec p-10 md:p-20 rounded-xl'>
                            ESEC Estonia on 2020. aastal loodud ettevõte, mis pakub lahendusi maa-aluste 
                            infrastruktuurivõrkude ehituseks ja hoolduseks.
                        </h2>

                        <div className='flex flex-col md:flex-row gap-level-top items-center'>
                            <div className='flex flex-col justify-center gap-10 font-content'>
                                <p>ESEC peab oluliseks pakutavate lahenduste pikka eluiga ja jätkusuutlikust ning 
                                    ringmajanduse põhimõtteid.
                                </p>

                                <p>Teeme koostööd oma valdkonna juhtivate tootjatega, et pakkuda võrguomanikele 
                                    ehitusmaterjale, mille eluiga on üle 100 aasta.
                                </p>

                                <div className='flex flex-wrap gap-3 items-center justify-center'>
                                    {solutions.map( (item) => (
                                        <div className='bg-esec-light rounded-2xl p-4 w-fit h-fit font-list-item'>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <ContactCat action={handleButtonContect}/>
                        </div>
                    </section>
                </div>

                <div className='h-100 w-full overflow-hidden'>
                    <img src={ImageFloor} className='object-cover w-full h-full' alt='Floor' />
                </div>

                <div className='flex flex-col w-page' ref={surfaceFix}>
                    <section className='flex flex-col py-10 gap-level-top'>
                        <h1 className='font-header'>ESEC kaevevaba meetod</h1>
                        <h2 className='font-content'>Koliseva kaevuluugikomplekti parandus patenteeritud 
                            ESEC'i meetodil. Oma tööprotsessiga suudame pikendada juba paigaldatud
                             luugikomplekti eluiga vähemalt kahekordseks - tekitades sealjuures 
                             praktiliselt märkamatu koguse ümbertöötlematuid jäätmeid.
                        </h2>

                        <div className='flex flex-col md:flex-row justify-center items-start gap-20'>
                            <ComparisonTable 
                                titleGreen='ESEC kaevevaba meetod'
                                titleRed='Tänane tööprotsess kaevemeetodil'
                                descriptionGreen='Kohapealne taastootmine (re-manufacturing)'
                                descriptionRed='Kaevetehnika, tagasitäitematerjalide transpordivahendid, töö teostajate transpordivahendid'
                                itemsGreen={ surfacefixArguments.pro }
                                itemsRed={ surfacefixArguments.con }
                            />
                        </div>

                        <div className='flex flex-col items-center gap-level-top'>
                            <div className='px-0 md:px-20'>
                                <ImageCarousel 
                                    images={imagesSurfaceFix}
                                />
                            </div>

                            <ContactCat action={handleButtonContect}/>
                        </div>
                    </section>
                </div>

                <div className='flex flex-col w-page' ref={contactRef}>
                    <section className='flex flex-col py-10 gap-level-top'>
                        <h1 className='font-header'>Kontakt</h1>

                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col gap-10 w-[60%]'>
                                <ContactCard 
                                    title='Tekkis küsimusi?'
                                    content='Kiireim viis oma küsimustele vastused saada on helistades.'
                                    type='phone'
                                    actionString='+372 53 33 0615'
                                    contactName='Toomas Matt'
                                />

                                <ContactCard 
                                    title='Kirjelda meile oma ülesannet'
                                    content='Pikemat süvenemist nõudvad päringud ja täpsemad ülesandepüstitused võid meile mailile saata.'
                                    type='email'
                                    actionString='toomas@esecestonia.ee'
                                    contactName='Toomas Matt'
                                />
                            </div>
                        </div>

                    </section>
                </div>
                        
            </main>

            <footer className='flex flex-col items-center justify-center py-20 bg-esec-light'>
                <div className='flex flex-col justify-between w-page gap-20'>
                    <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between'>
                        <img src={EsecLogo} className='h-10 object-contain' />
                        <img src={EAS} className='h-10 object-contain' />
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <div className='flex flex-col font-detail'>
                                <p className='text-center'>ESEC Estonia OÜ 14926037 Randvere tee 1b, Miiduranna küla, 74015 Viimsi vald, Harju maakond</p>
                            </div>
                        <p className='font-disclaimer text-center text-gray-700'>ESEC Estonia OÜ has been granted funds 
                            from the Innovation Voucher program of Enterprise Estonia, co-funded by the European 
                            Regional Development Fund. The funding (4732€) is used for expenses regarding the 
                            European Patent Application which covers ESEC's unique method of manhole repair.
                        </p>
                    </div>
                </div>
            </footer>
        </ div>
    );
}

export default App;