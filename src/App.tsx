import Sidebar from './components/sidebar/Sidebar';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import './App.css';
import Logo from './components/Logo';
import DealsDetails from './pages/DealsDetails';
import Dashboard from './pages/Dashboard';
import Deals from './pages/Deals';
import Customers from './pages/Customers';
import Tasks from './pages/Tasks';
import Calendar from './pages/Calendar';
import Notes from './pages/Notes';
import Settings from './pages/Settings';
import { useAppDispatch } from './store/store';
import { setDeals } from './store/reducers/dealsSlice';
import { useEffect } from 'react';
import { mockDealsRus } from './utils/mockdata/mockDealsRus';

function App() {
  const dispatch = useAppDispatch();
  // const { deals, sortingType } = useSelector(selectorDeals);

  // useEffect(() => {
  //   // dispatch(setModifiedDeals());
  //   if (sortingType && deals) {
  //     dispatch(sortDeals(sortingType));
  //   }
  // }, [sortingType, deals, dispatch]);

  useEffect(() => {
    console.log('uef app');
    dispatch(setDeals(mockDealsRus));
  }, [dispatch]);

  return (
    <div className="container">
      <HashRouter>
        <aside>
          <Logo />
          <Sidebar />
        </aside>
        <Routes>
          {/* {sidebarRoutes.map(({ element, path }, index) => (
            <Route key={index} element={element} path={path} />
          ))} */}
          <Route element={<Dashboard />} path={routes.dashboard} />
          <Route element={<Deals />} path={routes.deals} />
          <Route element={<DealsDetails />} path={routes.dealsDetails} />
          <Route element={<Customers />} path={routes.customers} />
          <Route element={<Tasks />} path={routes.tasks} />
          <Route element={<Calendar />} path={routes.calendar} />
          <Route element={<Notes />} path={routes.notes} />
          <Route element={<Settings />} path={routes.settings} />
          <Route path="*" element={<Navigate replace to={routes.deals} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
