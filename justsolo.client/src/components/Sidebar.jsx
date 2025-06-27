// Plan en pseudocódigo:
// 1. Modificar itemVariants para que el SVG (icono) tenga su propia animación.
// 2. Crear un nuevo objeto de variantes para el icono, donde en "hidden" el SVG esté más a la izquierda (por ejemplo, x: -40).
// 3. Aplicar motion al SVG usando motion.svg y pasarle los nuevos variants.
// 4. El texto del nombre aparece como antes, pero el icono entra desde más lejos a la izquierda.

import { motion } from "framer-motion";
import './styleComponents/Sidebar.css'

const sidebarVariants = {
    hidden: {
        x: "-100%",
        transition: {
            type: "tween",
            ease: "easeInOut",
            staggerChildren: 0.02,
            staggerDirection: -1
        },
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
            staggerChildren: 0.1,
            delayChildren: 0,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -20,
        transition: { duration: 0.1 },
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100 },
    },
};

// Nuevo: variantes para el icono
const iconVariants = {
    hidden: {
        x: -40,
        opacity: 0,
        transition: { duration: 0.2 }
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 120 }
    }
};

const elementos = [
    {
        nombre: "inicio",
        icono: (
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                variants={iconVariants}
            >
                <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
            </motion.svg>
        )
    },
    {
        nombre: "servicios",
        icono: (
            <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                variants={iconVariants}
            >
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h12v2H3v-2z" />
            </motion.svg>
        )
    },
    {
        nombre: "contactanos",
        icono: (
            <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                variants={iconVariants}
            >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 004.13.79 1 1 0 011 1v3.19a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.19a1 1 0 011 1 11.36 11.36 0 00.79 4.13 1 1 0 01-.21 1.11l-2.15 2.2z" />
            </motion.svg>
        )
    },
    {
        nombre: "categorias",
        icono: (
            <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                variants={iconVariants}
            >
                <path d="M10 3H3v7h7V3zm0 11H3v7h7v-7zm11-11h-7v7h7V3zm0 11h-7v7h7v-7z" />
            </motion.svg>
        )
    }
];

const Sidebar = ({ visible, onClose }) => {
    return (
        <div>
            <motion.aside
                className="sidebar"
                variants={sidebarVariants}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                style={{
                    position: "fixed",
                    top: "10vh",
                    left: 0,
                    width: "225px",
                    height: "100%",
                    background: "rgba(23, 23, 23, 0.85)",
                    backdropFilter: "blur(30px)",
                    borderRight: "solid 2px #fff",
                    paddingTop: "40px",
                    color: "white",
                    zIndex: 3,
                    aligneItems: "center"
                }}
            >
                {elementos.map((el, index) => (
                    <motion.li
                        variants={itemVariants}
                        key={index}
                        className="side-bar-item"
                        whileHover={{ paddingLeft: "50px", color: "#0bac5f"}}
                    >
                        {/* El icono ahora es motion.svg con variants */}
                        {el.icono}
                        {el.nombre}
                    </motion.li>
                ))}
            </motion.aside>
        </div>
    );
};

export default Sidebar;
