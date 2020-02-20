import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import FrontPage from './pages/FrontPage'
import ServicesPages from './pages/ServicesPages'
import FamilyPages from './pages/FamilyPages'


const App = () => {
  return (
    <Router>
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={FrontPage} />

          <Route path="/thjonustur/fjolskyldan" component={FamilyPages} />

          <Route exact path="/thjonustur/:subRoute?" component={ServicesPages} />
        </Switch>

        <Footer />
    </Router>
  )
}

export default App
