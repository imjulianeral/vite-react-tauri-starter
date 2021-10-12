import { Route, Switch } from 'wouter'
import { Home } from '../pages/home'
import { Login } from '../pages/login'

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />

      <Route path="/:rest*">
        {params => `404, Sorry the page ${params.rest} does not exist!`}
      </Route>
    </Switch>
  )
}
