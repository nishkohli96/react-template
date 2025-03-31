import { BrowserRouter, Routes, Route } from 'react-router';
import { AppBar } from 'components';

import HomePage from 'pages/home';
import Page404 from 'pages/404';

const Routing = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
