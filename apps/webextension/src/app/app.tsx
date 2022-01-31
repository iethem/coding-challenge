// import styles from './app.module.css';
import { Sidebar } from '@coding-challenge/ui';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from './Auth/use-auth';
import LoginPage from './LoginPage';

export function App() {
  const auth = useAuth();

  return (
    <div className="container flex flex-col justify-center items-center h-screen w-screen">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Sidebar />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {auth.user && (
        <button
          className="bg-white text-blue-500 font-bold text-l p-2 border border-blue-500 rounded-lg mt-4"
          onClick={() => auth.logout()}
        >
          Logout
        </button>
      )}
    </div>
  );
}

// TODO move to Auth directory
function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
