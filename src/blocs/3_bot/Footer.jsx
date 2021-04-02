import { Link } from 'react-router-dom'

import FooterContainer from '../style/containers/FooterContainer';
import Input from '../style/InptForm';
import twitter from '../../assets/svg/twitter.svg';
import facebook from '../../assets/svg/facebook.svg';

function Footer() {
    return (
        <FooterContainer>
            <div>
                <h2>
                    Subscribe to our newsletter to receive exclusive information
                </h2>
                <Input size={{width: '250px'}}><input/><button>OK</button></Input>
            </div>
            <div>
                <ul>
                    <li>Customer portal</li>
                    <li>Add a list</li>
                    <li>Rental calculator</li>
                    <li>Term of service</li>
                    <li>Avoid scams</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li>Rent House</li>
                    <li>Find place</li>
                    <li>Company</li>
                </ul>
            </div>
            <div>
                <img src={twitter} alt='twitter' />
                <img src={facebook} alt='facebook' />
                <h4>2019, Rent Me LTD</h4>
            </div>
        </FooterContainer>
    );
}

export default Footer;
