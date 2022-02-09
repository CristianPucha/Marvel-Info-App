import './Spiderman.css'
import Spidermanhang from '../../Assets/spidermanmobile.png'
import { motion } from 'framer-motion';


function Spiderman (){
    return(
        <>
        <div className='spiderman-div'>
            <div className='spiderman-img-mobile'>
            <motion.h1 initial={{ y: -330 }}  animate={{ y: 0  }}>Spider-Man</motion.h1>
                <motion.img src={Spidermanhang} alt="Spider-Man" animate={{ y: 800 }} transition={{ type: "spring", stiffness: 100 }}  />
            
            
            </div>
        
            
        </div>

        
        </>
    )
}

export default Spiderman