import {useState, useEffect} from 'react';
import {useRoutes} from 'raviger';

import routes from './routes';

export const App = props => {
  const [bootstrapped, setBootstraped] = useState(false);
  const route = useRoutes(routes);
  useEffect(() => {
    setBootstraped(true);
  }, []);

  return bootstrapped ? route : null;
}
