import { Link } from 'react-router-dom'
import './sidebar.scss';

const Sidebar = () => {
    return (
        <aside>
            <h3>Blog categories</h3>
            <ul>
                <li><Link to="/category1" >Category 1</Link></li>
                <li><Link to="/category2" >Category 2</Link></li>
                <li><Link to="/category3" >Category 3</Link></li>
            </ul>
        </aside>
    )
}

export default Sidebar