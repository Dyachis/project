import UserPageContainer from '../style/containers/UserPageContainer'
import VerticalScroll from '../../components/VerticalScroll'
import img from '../../assets/img/dom.png'
import Button from '../style/Button'


export default function UserPage(){

    const arr = [
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 1000},
        {img: img, name: 'Executive House in a Prestigious Area', area: '245', bads: 5, baths: 2, price: 3000}
    ]

    return <UserPageContainer>
        <div className="profile">
            <h3>Profile</h3>
            <div className='container'>
                <div className="img">
                    <img src={img} alt=""/>
                </div>
                <h3>Emily Johnson</h3>
                <Button primary>Contact owner</Button>
            </div>
        </div>
        <div className="info">
            <h3>Household information</h3>
            <p>I take great pride to being able to listen, understand your priorities, and embrace your needs like they are my own. Protecting your interest and helping you achieve your goal in this challenging and competitive marketplace is my ultimate desire. You will find that I am incredibly responsive, totally prepared, and a few steps ahead of the complexities and issues that may arise within our transaction. My business relationships and good rapport will also help us in navigating our way through smoothly and flawlessly.</p>
        </div>
        <div className="houses">
            <h3>Apartments</h3>
            <VerticalScroll arr={arr}/>
        </div>
    </UserPageContainer>
}