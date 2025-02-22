import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import NavLayout from './components/Layout/NavLayout';

const NotifyApp = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    fetchUser();
  }, []);

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      <NavLayout name={authedUser.name} logout={onLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default NotifyApp;
