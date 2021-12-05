import { useState } from 'react';

export const App = () => {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <div>
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
    </div>
  );
};

export const LoginPage = ({ onLogin }) => (
  <div>
    <h3>Please login!</h3>
    <button onClick={onLogin}>Login</button>
  </div>
);

export const Dashboard = ({ children }) => (
  <div>
    <h3>Dashboard</h3>
    {children}
  </div>
);

export const DashboardNav = () => (
  <div>
    <h3>Dashboard Nav</h3>
  </div>
);

export const DashboardContent = ({ children }) => (
  <div>
    <h3>Dashboard Content</h3>
    {children}
  </div>
);

export const WelcomeMessage = ({ user }) => (
  <div>
    <h3>Welcome {user}</h3>
  </div>
);
