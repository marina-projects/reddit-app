//styles
import { Button, Div, FooterDiv } from '../../styles';

//images
import photo from "../../assets/screenshots/profile-pic (2) 2.png";
import telegram from '../../assets/screenshots/telegram.svg';
import whatsapp from '../../assets/screenshots/whatsapp.svg';
import linkedin from '../../assets/screenshots/LinkedIn.svg';
import upwork from '../../assets/screenshots/upwork.svg';

const Footer = () => {
    return (
        <>
            <FooterDiv row gray gap="30px">
                <Div column width="45%" gray> 
                    <Div column gray alignStart gap="20px">
                        <h3>Reddit about Code</h3>
                        <p>This is a basic react/redux app that uses Firebase data base. This project is part of a off-line challenge from a Codecademy Frontend developer path.</p>
                        <p>Read more on GitHub:</p>
                        <a href="https://github.com/marina-projects/reddit-app" target="_blank" rel="noreferrer"><Button footer footerColor>GitHub</Button></a>
                    </Div>
                </Div>
                <Div column width="45%" gray alignStart gap="15px" padding="20px">
                    <img src={photo} alt='developer' height='80px'/>
                    <h4>Developer Marina Romanova</h4>
                    <p>Contact me:</p>
                    <a href="mailto: info@marina-romanova.com" target="_blank" rel="noreferrer">info@marina-romanova.com </a>
                    <a href="https://www.marina-romanova.com" target="_blank" rel="noreferrer">www.marina-romanova.com </a>
                    <Div row gap="10px" gray justifyStart padding="0px">
                        <a href="https://www.linkedin.com/in/yellowmarine/" target="_blank" rel="noreferrer"><img src={linkedin} alt='linkedin-logo' width="30px" /></a>
                        <a href="https://www.upwork.com/freelancers/marinar18" target="_blank" rel="noreferrer"><img src={upwork} alt='upwork-logo' width="30px" /></a>
                        <a href="https://wa.me/89119996038" target="_blank" rel="noreferrer"><img src={whatsapp} alt='whatsapp-logo' width="30px" /></a>
                        <a href="https://t.me/yellowmarine" target="_blank" rel="noreferrer"><img src={telegram} alt='telegram-logo' width="30px" /></a>
                    </Div>

                </Div>
            </FooterDiv>
        </>
    )
}

export default Footer;