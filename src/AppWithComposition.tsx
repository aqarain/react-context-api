import { useState } from 'react';

export const App = () => {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <>
      {currentUser ? (
        <Dashboard>
          <DashboardNav />
          <DashboardContent>
            <WelcomeMessage user={currentUser} />
          </DashboardContent>
        </Dashboard>
      ) : (
        <LoginPage
          onLogin={() => {
            setCurrentUser('Atif');
          }}
        />
      )}
    </>
  );
};

export const LoginPage = ({ onLogin }) => (
  <>
    <h3>Please login!</h3>
    <button onClick={onLogin}>Login</button>
  </>
);

export const Dashboard = ({ children }) => (
  <>
    <h3>Dashboard</h3>
    {children}
  </>
);

export const DashboardNav = () => (
  <>
    <h3>Dashboard Nav</h3>
  </>
);

export const DashboardContent = ({ children }) => (
  <>
    <h3>Dashboard Content</h3>
    {children}
  </>
);

export const WelcomeMessage = ({ user }) => (
  <>
    <h3>Welcome {user}</h3>
  </>
);
