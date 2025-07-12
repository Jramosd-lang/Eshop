import "./index.css"
import { motion } from 'framer-motion'

function Background(){
    return(
        <>
            <div className="containerBackgroundC">
                <motion.div
                    className="circle"
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    animate={{ 
                        transform: [
                            "translate(10vw, 12%)",
                            "translate(calc(10vw + 20px), calc(12% + 120px))",
                            "translate(calc(10vw + 40px), calc(12% + 240px))",
                            "translate(calc(10vw + 40px), calc(12% + 120px))",
                            "translate(10vw, 12%)"
                        ]
                    }}
                    id="circle1"
                ></motion.div>
                <motion.div
                    className="circle"
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    animate={{ 
                        transform: [
                            "translate(0, 0)",
                            "translate(120px, -80px)",
                            "translate(240px, 0)",
                            "translate(120px, 80px)",
                            "translate(0, 0)"
                        ]
                    }}
                    id="circle2"
                ></motion.div>
                <motion.div
                    className="circle"
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    animate={{ 
                        transform: [
                            "translate(calc(100vw - 40vw - 20vw), 70%)",
                            "translate(calc(100vw - 40vw - 20vw + 40px), calc(70% - 60px))",
                            "translate(calc(100vw - 40vw - 20vw), calc(70% - 120px))",
                            "translate(calc(100vw - 40vw - 20vw - 40px), calc(70% - 60px))",
                            "translate(calc(100vw - 40vw - 20vw), 70%)"
                        ]
                    }}
                    id="circle3"
                ></motion.div>
                <motion.div
                    className="circle"
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    animate={{ 
                        transform: [
                            "translate(80vw, 30%)",
                            "translate(calc(80vw - 100px), calc(30% + 200px))",
                            "translate(calc(80vw - 200px), 30%)",
                            "translate(calc(80vw + 100px), calc(30% - 200px))",
                            "translate(calc(80vw + 250px), 30%)",
                            "translate(calc(80vw + 120px), calc(30% + 100px))",
                            "translate(80vw, 30%)"
                        ]
                    }}
                    id="circle4"
                ></motion.div>
                <motion.div
                    className="circle"
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    animate={{ 
                        transform: [
                            "translate(calc(100vw - 40vw - 10vw), 10%)",
                            "translate(calc(100vw - 40vw - 10vw + 100px), calc(10% - 60px))",
                            "translate(calc(100vw - 40vw - 10vw), calc(10% - 120px))",
                            "translate(calc(100vw - 40vw - 10vw - 100px), calc(10% - 60px))",
                            "translate(calc(100vw - 40vw - 10vw), 10%)"
                        ]
                    }}
                    id="circle5"
                ></motion.div>
                <motion.div
                    className="circle"
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    animate={{ 
                        transform: [
                            "translate(0, 0)",
                            "translate(-120px, 60px)",
                            "translate(-60px, 120px)",
                            "translate(60px, 120px)",
                            "translate(120px, 60px)",
                            "translate(0, 0)"
                        ]
                    }}
                    id="circle6"
                ></motion.div>
            </div>
        </>
    )
}

export default Background;