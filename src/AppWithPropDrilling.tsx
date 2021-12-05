import { useState } from 'react';

export const App = () => {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <div>
      {currentUser ? (
        <Dashboard user={currentUser} />
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

export const Dashboard = ({ user }) => (
  <div>
    <h3>Dashboard</h3>
    <DashboardNav />
    <DashboardContent user={user} />
  </div>
);

export const DashboardNav = () => (
  <div>
    <h3>Dashboard Nav</h3>
  </div>
);

export const DashboardContent = ({ user }) => (
  <div>
    <h3>Dashboard Content</h3>
    <WelcomeMessage user={user} />
  </div>
);

export const WelcomeMessage = ({ user }) => (
  <div>
    <h3>Welcome {user}</h3>
  </div>
);
