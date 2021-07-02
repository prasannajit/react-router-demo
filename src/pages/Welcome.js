import { Route } from "react-router";
const Welcome = ()=>{
    return <div>
        <h1>Welcome Page</h1>
        <section>
            <Route path="/welcome/newuser">
                <h3>Welcome new user</h3>
            </Route>
        </section>
    </div>
};

export default Welcome;