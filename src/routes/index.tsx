import { BrowserRouter, Routes, Route } from 'react-router';
import { AppBar } from 'components';

import HomePage from 'pages/home';

const Routing = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
