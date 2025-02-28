import { useEffect, useMemo, useState } from 'react';
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
import { LocaleProvider } from './context/LocaleContext';
import { ThemeProvider } from './context/ThemeContext';

const NotifyApp = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    fetchUser();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    localStorage.removeItem('accessToken');
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const themeContextvalue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  });

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div>
        <ThemeProvider value={themeContextvalue}>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </ThemeProvider>
      </div>
    );
  }

  return (
    <div>
      <ThemeProvider value={themeContextvalue}>
        <LocaleProvider value={localeContextValue}>
          <NavLayout name={authedUser.name} logout={onLogout} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </LocaleProvider>
      </ThemeProvider>
    </div>
  );
};

export default NotifyApp;
