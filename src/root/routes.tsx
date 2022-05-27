import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Docs from '../docs';

type RootRoutesProps = {
  toggleTheme: () => void;
};

function RootRoutes({ toggleTheme }: RootRoutesProps) {
  return (
    <Routes>
      <Route path='/' element={<Home toggleTheme={toggleTheme} />} />
      <Route path='/*' element={<NotFound />} />
      <Route path='/docs/*' element={<Docs />} />
    </Routes>
  );
}

export default RootRoutes;
