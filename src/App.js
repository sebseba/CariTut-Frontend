import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';


import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import AuthLayout from "./pages/auth/AuthLayout";

import AppLayout from './pages/app/AppLayout';
import Customers from "./pages/app/Customers"
import CheckingAccountTransactions from "./pages/app/CheckingAccountTransactions";
import Settings from "./pages/app/settings/Settings";
import Dashboard from "./pages/app/Dashboard";
import Revenues from "./pages/app/Revenues";
import Expenses from "./pages/app/Expenses";
import UserSettings from './pages/app/settings/UserSettings';
import CompanySettings from './pages/app/settings/CompanySettings';

const theme = {
  token: {
    colorPrimary: '#D86D14',
    colorLink: 'gray',
    colorSuccess: '#52c41a',
    colorDefault: '#D86D14',
    colorLinkHover: 'gray',
    message: {
      top: 100,
    },
  },
};

const App = () => {

 

  return (
    <>
      <ConfigProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/checkingaccounttransactions" element={<CheckingAccountTransactions />} />
              <Route path="/revenues" element={<Revenues />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/settings/usersettings" element={<UserSettings />} />
              <Route path="/settings/companysettings" element={<CompanySettings />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<Forgot />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>

  );

}
export default App;