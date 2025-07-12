import { useState} from 'react';
import { BadgePercent, Newspaper, Package2, PackagePlus } from 'lucide-react';
import Header from '../../components/Header.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import Cardproduct from '../../components/CardProduct.jsx';
import { motion } from 'framer-motion';
import Background from '../../components/backgroundCircles/index.jsx';
import "./Home.css";
import "../../../index.css";

function Home() {
    const [mostrarSidebar, setMostrarSidebar] = useState(false);
    const [mostrarSpinner, setMostrarSpinner] = useState(true);

    const toggleSidebar = () => setMostrarSidebar(!mostrarSidebar);




    return (
        <>
        <div className='containerAll'>

            {mostrarSpinner && (
                <motion.div
                    className="container-spinner"
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                    onAnimationComplete={() => setMostrarSpinner(false)}
                >
                    <motion.div
                        className="spinner"
                        animate={{ rotate: 360, opacity: 0 }}
                        transition={{ duration: 1.5, ease: "linear" }}
                    />
                </motion.div>
            )}

            <Sidebar
                visible={mostrarSidebar}
                onClose={() => setMostrarSidebar(false)}
            />
            <Header toggleSidebar={toggleSidebar} />

            <div className='containerHome'>

                <div className='containerBackground'>

                    <section className="containerBackground">
                     <Background/>
                        <div className='containerA'>
                            <div className="container">

                                <div className="content">
                                    <div className="text-content">
                                        <badge className="info-badge">Nuevos productos cada mes</badge>
                                        <h1 className="title">
                                            Elegáncia
                                            <span className="title-span"> Redefinida</span>
                                        </h1>
                                        <p className="descriptionEcommerce">
                                            En ecommerce estamos siempre preocupandonos por tus necesidades, con un solo click
                                            accede a nuestros productos y disfruta de una vida mas feliz y sencilla, te esperamos
                                            con los brazos abiertos
                                        </p>
                                    </div>
                                    <div className="buttonsInfoEcommerce">
                                        <button className='buttonExplorer'>
                                            Explorar Categorias
                                        </button>
                                        <button variant="outline" className="buttonTOP">
                                            Ver Productos
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </section>
                </div>

                <section className="productsTOP">
                    <div>
                        <h3 className="subtitle">Mejores <span>Productos</span></h3>
                    </div>

                    <div style={{
                        width: '80vw', 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '60px', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        maxWidth: '100vw', 
                        height: 'fit-content',
                        paddingBottom: '70px'
                    }}>
                        <Cardproduct />
                        <Cardproduct />
                        <Cardproduct />
                        <Cardproduct />
                    </div>
                </section>

                <div className='containerBackground'>
                    <Background/>
                    <div className='containerA'>
                        <section className='benefits'>

                            <div>
                            <h3 className="subtitle">Beneficios de <span>ser cliente</span></h3>
                            </div>

                            <div className='benefits-container'>
                                <div className='benefits-left'>
                                    <div className='circle-benefits'>
                                        %
                                    </div>
                                    <h2 className='circle-text'>Descuentos para nuestros <span>miembros</span></h2>
                                </div>
                                <div className='benefits-right'>
                                    <div className='benefits-item'>
                                        <div className='icon-benefits'>
                                            <BadgePercent className='icon-benefits-lucide'/>
                                        </div>
                                        <h3>Acceso a promociones <span>exclusivas</span></h3>
                                    </div>
                                    <div className='benefits-item'>
                                        <div className='icon-benefits'>
                                            <Newspaper className='icon-benefits-lucide'/> 
                                        </div>
                                        <h3>Atención al cliente <span>personalizada</span></h3>
                                    </div>
                                    <div className='benefits-item'>
                                        <div className='icon-benefits'>
                                            <Package2 className='icon-benefits-lucide'/>
                                        </div>
                                        <h3>Envíos gratis en compras mayores a <span>$100</span></h3>
                                    </div>
                                    <div className='benefits-item'>
                                        <div className='icon-benefits'>
                                            <PackagePlus className='icon-benefits-lucide'/>
                                        </div>
                                        <h3>Acceso anticipado a nuevos <span>productos</span></h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='rate'>
                            <div className='containerRates'>
                                <div className='descriptionRates'>
                                    <h3>Nuestras evidencias</h3>
                                    <p>
                                        
                                    </p>
                                </div>
                                <div className='rates-comments'>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>


                
            </div>
        </div>
        </>
            
    );
}

export default Home;