import { ThemeProvider } from "@material-ui/core";
import { Router, Switch, Route } from "react-router-dom";
import theme from "./assets/Theme/theme";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import PrivateRoute from "./routers/PrivateRoute";
import dotenv from "dotenv";
import DetailRequestPage from "./pages/DetailRequest/DetailRequestPage";
import ListUserPage from "./pages/ListUsers/ListUserPage";
import history from './history';
import CreateRequest from "./pages/AddRequest/CreateRequest";
import CategoryPage from "./pages/Category/CategoryPage";

dotenv.config();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <PrivateRoute exact path="/request/show/:id">
            <DetailRequestPage />
          </PrivateRoute>

          <PrivateRoute exact path="/user">
            <ListUserPage />
          </PrivateRoute>
          <PrivateRoute exact path="/add-request">
            <CreateRequest/>
          </PrivateRoute>
          <PrivateRoute exact path="/category">
            <CategoryPage/>
          </PrivateRoute>

          <Route exact path="/404">404 NOT FOUND</Route>

          <PrivateRoute exact path="/">
            <HomePage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
