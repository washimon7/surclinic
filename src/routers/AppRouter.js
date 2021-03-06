import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import IntranetRouter from "./IntranetRouter";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/iniciar-sesion" component={SignIn} />
                <Route exact path="/registro" component={SignUp} />
                <Route path="/" component={IntranetRouter} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
