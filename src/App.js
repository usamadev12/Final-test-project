import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css'
import Burger from 'containers/Burger'
import Counter from 'counter'
import Header from "./components/Header";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path={'/burger-app'}>
          <Header />
          <Burger />
        </Route>
        <Route path={'/counter'} component={Counter} />
        <Redirect to={'/burger-app'} />
      </Switch>
    </div>
  </Router>
)

export default App
