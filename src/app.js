import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from './config/firebase';
import { Layout } from './component/layout';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Results } from './pages/results';
import { Comments } from './pages/comments';
import { Feedback } from './pages/feedback';
import { Form } from './pages/form';

import * as UserAtoms from './atoms/user';

const RequiresAuth = () => {
  const auth = useRecoilValue(UserAtoms.auth);
  const history = useHistory();

  if (auth === undefined) {
    return null;
  }

  if (auth === null) {
    setTimeout(() => history.push('/ingreso'), 0);
    return null;
  }

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/encuesta" component={Form} />
      <Route exact path="/reporte" component={Results} />
      <Route exact path="/comentarios" component={Comments} />
      <Route exact path="/quejas" component={Feedback} />
    </Layout>
  );
};

const AuthWatcher = () => {
  const setAuth = useSetRecoilState(UserAtoms.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        setAuth({
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        setAuth(null);
      }
    });
  }, [setAuth]);

  return null;
};

export const App = () => {
  return (
    <RecoilRoot>
      <AuthWatcher />
      <SnackbarProvider maxSnack={5}>
        <Router>
          <Switch>
            <Route exact path="/ingreso" component={Login} />
            <Route>
              <RequiresAuth />
            </Route>
          </Switch>
        </Router>
      </SnackbarProvider>
    </RecoilRoot>
  );
};
