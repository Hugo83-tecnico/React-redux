import styles from './Footer.module.scss';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const iconProps = {
    color: 'white',
    size:24
}

const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <div>
                <FaFacebook {...iconProps}/>
                <FaInstagram {...iconProps}/>
                <FaTwitter {...iconProps}/>
            </div>
            <span>Desenvolvido pelo estudante da Alura.</span>
        </footer>



    )
}

export default Footer;