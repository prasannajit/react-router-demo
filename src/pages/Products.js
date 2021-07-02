import { Link } from "react-router-dom";
const Welcome = ()=>{
    return <div>
        <h1>Products Page</h1>
        <ul>
            <li><Link to="/products/book">book</Link></li>
            <li><Link to="/products/flag">flag</Link></li>
            <li><Link to="/products/toy">toy</Link></li>
            <li><Link to="/products/car">car</Link></li>
        </ul>
    </div>
};

export default Welcome;