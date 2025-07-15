import "./index.css"
import { motion } from 'framer-motion'

function Background(){
   return(
    <>
        
<motion.div
    className="circle"
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    animate={{ 
        transform: [
            "translate(40%, 20vh)",
            "translate(45%, 35vh)",
            "translate(50%, 50%)",
            "translate(45%, 40%)",
            "translate(40%, 60%)"
        ]
    }}
    id="circle1"
></motion.div>
<motion.div
    className="circle"
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    animate={{ 
        transform: [
            "translate(50%, 50%)",
            "translate(60%, 40%)",
            "translate(70%, 50%)",
            "translate(60%, 60%)",
            "translate(50%, 80%)"
        ]
    }}
    id="circle2"
></motion.div>
<motion.div
    className="circle"
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    animate={{ 
        transform: [
            "translate(60%, 30%)",
            "translate(65%, 25%)",
            "translate(60%, 20%)",
            "translate(55%, 25%)",
            "translate(60%, 30%)"
        ]
    }}
    id="circle3"
></motion.div>
<motion.div
    className="circle"
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    animate={{ 
        transform: [
            "translate(70%, 40%)",
            "translate(60%, 60%)",
            "translate(50%, 40%)",
            "translate(80%, 30%)",
            "translate(85%, 40%)",
            "translate(75%, 45%)",
            "translate(70%, 40%)"
        ]
    }}
    id="circle4"
></motion.div>
<motion.div
    className="circle"
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    animate={{ 
        transform: [
            "translate(30%, 30%)",
            "translate(40%, 25%)",
            "translate(30%, 20%)",
            "translate(20%, 25%)",
            "translate(30%, 30%)"
        ]
    }}
    id="circle5"
></motion.div>
<motion.div
    className="circle"
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    animate={{ 
        transform: [
            "translate(50%, 50%)",
            "translate(40%, 55%)",
            "translate(45%, 60%)",
            "translate(55%, 60%)",
            "translate(60%, 55%)",
            "translate(50%, 50%)"
        ]
    }}
    id="circle6"
></motion.div>
    </>
    
   )
}

export default Background;