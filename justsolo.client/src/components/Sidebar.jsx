import { motion } from "framer-motion";
import './styleComponents/Sidebar.css'

const sidebarVariants = {
    hidden: {
        x: "-100%",
        transition: {
            type: "tween",
            ease: "easeInOut",
            when: "afterChildren",
            staggerChildren: 0.02,
            staggerDirection: -1,
        },
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
            when: "beforeChildren",
            staggerChildren: 0.1,
            delayChildren: 0.1,
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


const Sidebar = ({ visible, onClose }) => {
    const items = ["Inicio", "Servicios", "Contacto", "categorias"];
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
                    height: "100vh",
                    background: "rgba(23, 23, 23, 0.85)",
                    backdropFilter: "blur(30px)",
                    borderRight: "solid 2px #fff",
                    paddingTop: "40px",
                    color: "white",
                    zIndex: 3,
                    aligneItems: "center"
                }}
            >

                {items.map((item, index) => (
                    <motion.li variants={itemVariants}
                        key={index}
                        className="side-bar-item"
                        whileHover={{paddingLeft:"50px"} }
                    >
                        {item}
                    </motion.li>
                )) }
               
            </motion.aside>
        </div>
    );
};

export default Sidebar;
