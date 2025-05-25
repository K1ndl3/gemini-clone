import './sidebar.css'
import { assets } from '../../assets/assets';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className='top'></div>
            <img className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
            </div>
            <div className="bottom"></div>
        </div>
    );
}

export default Sidebar