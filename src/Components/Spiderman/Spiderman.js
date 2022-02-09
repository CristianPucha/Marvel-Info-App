import './Spiderman.css'
import Spidermanhang from '../../Assets/spidermanmobile.png'
import { motion } from 'framer-motion';


function Spiderman (){
    return(
        <>
        <div className='spiderman-div'>
                <div className='spiderman-img-mobile'>
                <motion.h1 initial={{ y: -330 }}  animate={{ y: 0  }} transition={{ type: "spring", delay: 0.5 }}>Spider-Man</motion.h1>
                    <motion.img src={Spidermanhang} alt="Spider-Man" animate={{ y: 800 }} transition={{ type: "spring", stiffness: 100 }}  />
                <div className='spider-info-div'>
                        <motion.h2 initial={{ x: 1000 }}  animate={{ x: 0  }} transition={{ type: "spring", delay: 0.3 }}  >Story</motion.h2>
                            <motion.p initial={{ opacity: 0 }}  animate={{ opacity: 1  }} transition={{ type: "spring", duration:2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor voluptate ducimus quam quibusdam sint quos, consectetur possimus repellendus, fuga porro exercitationem aut quis odio quasi corporis. Praesentium, natus vero! </motion.p>
                </div>

            </div>


        
            
        </div>

        
        </>
    )
}

export default Spiderman