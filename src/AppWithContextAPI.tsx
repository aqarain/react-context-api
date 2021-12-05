import { createContext, useContext, useState } from 'react';

const appContext = createContext('');

export const App = () => {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <appContext.Provider value={currentUser}>
      <>
        {currentUser ? (
          <Dashboard />
        ) : (
          <LoginPage
            onLogin={() => {
              setCurrentUser('Atif');
            }}
          />
        )}
      </>
    </appContext.Provider>
  );
};

export const LoginPage = ({ onLogin }) => (
  <>
    <h3>Please login!</h3>
    <button onClick={onLogin}>Login</button>
  </>
);

export const Dashboard = () => (
  <>
    <h3>Dashboard</h3>
    <DashboardNav />
    <DashboardContent />
  </>
);

export const DashboardNav = () => (
  <>
    <h3>Dashboard Nav</h3>
  </>
);

export const DashboardContent = () => (
  <>
    <h3>Dashboard Content</h3>
    <WelcomeMessage />
  </>
);

export const WelcomeMessage = () => {
  const user = useContext(appContext);

  return (
    <div>
      <h3>Welcome {user}</h3>
    </div>
  );
};
