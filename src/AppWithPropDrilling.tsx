import { useState } from 'react';

export const App = () => {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <>
      {currentUser ? (
        <Dashboard user={currentUser} />
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

export const Dashboard = ({ user }) => (
  <>
    <h3>Dashboard</h3>
    <DashboardNav />
    <DashboardContent user={user} />
  </>
);

export const DashboardNav = () => (
  <>
    <h3>Dashboard Nav</h3>
  </>
);

export const DashboardContent = ({ user }) => (
  <>
    <h3>Dashboard Content</h3>
    <WelcomeMessage user={user} />
  </>
);

export const WelcomeMessage = ({ user }) => (
  <>
    <h3>Welcome {user}</h3>
  </>
);
