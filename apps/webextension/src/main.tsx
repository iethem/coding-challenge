import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';

import App from './app/app';
import { AuthProvider } from './app/Auth/use-auth';
import { MemoryRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
);
