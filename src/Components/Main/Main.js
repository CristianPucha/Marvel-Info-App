import './Main.css'
import { motion } from 'framer-motion';

function Main () {
    return(
        <>
        <div className='fullComponentMain'>
        <div className='mainComponentDiv'>
        <motion.h1 initial={{ x: 2000 }}  animate={{ x: 0  }} transition={{ type: "spring", delay: 0.3 }} className="mainH1">Marvel Characters Info App</motion.h1>
        <motion.button initial={{ x: 2000 }}  animate={{ x: 0  }} transition={{ type: "spring", delay: 0.5 }} className="buttonMain">All Characters</motion.button>
        </div>
        </div>
        </>
    )
}

export default Main;

