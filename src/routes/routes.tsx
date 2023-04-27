import ImgDashboard from '../components/ui/sidebar/ImgDashboard';
import ImgDeals from '../components/ui/sidebar/ImgDeals';
import ImgDashboardActive from '../components/ui/sidebar/ImgDashboardActive';
import ImgDealsActive from '../components/ui/sidebar/ImgDealsActive';
import ImgCustomers from '../components/ui/sidebar/ImgCustomers';
import ImgCustomersActive from '../components/ui/sidebar/ImgCustomersActive';
import ImgTasks from '../components/ui/sidebar/ImgTasks';
import ImgTasksActive from '../components/ui/sidebar/ImgTasksActive';
import ImgCalendar from '../components/ui/sidebar/ImgCalendar';
import ImgNotes from '../components/ui/sidebar/ImgNotes';
import ImgSettings from '../components/ui/sidebar/ImgSettings';
import Dashboard from '../pages/Dashboard';
import Deals from '../pages/Deals';
import Customers from '../pages/Customers';
import Tasks from '../pages/Tasks';
import Calendar from '../pages/Calendar';
import Notes from '../pages/Notes';
import Settings from '../pages/Settings';
import ImgCalendarActive from '../components/ui/sidebar/ImgCalendarActive';
import ImgNotesActive from '../components/ui/sidebar/ImgNotesActive';
import ImgSettingsActive from '../components/ui/sidebar/ImgSettingsActive';

export const sidebarRoutes = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    menuImage: {
      normal: <ImgDashboard />,
      active: <ImgDashboardActive />
    },
    element: <Dashboard />
  },
  {
    path: 'deals',
    title: 'Deals',
    menuImage: {
      normal: <ImgDeals />,
      active: <ImgDealsActive />
    },
    element: <Deals />
  },
  {
    path: 'customers',
    title: 'Customers',
    menuImage: {
      normal: <ImgCustomers />,
      active: <ImgCustomersActive />
    },
    element: <Customers />
  },
  {
    path: 'tasks',
    title: 'Tasks',
    menuImage: {
      normal: <ImgTasks />,
      active: <ImgTasksActive />
    },
    element: <Tasks />
  },
  {
    path: 'calendar',
    title: 'Calendar',
    menuImage: {
      normal: <ImgCalendar />,
      active: <ImgCalendarActive />
    },
    element: <Calendar />
  },
  {
    path: 'notes',
    title: 'Notes',
    menuImage: {
      normal: <ImgNotes />,
      active: <ImgNotesActive />
    },
    element: <Notes />
  },
  {
    path: 'settings',
    title: 'Settings',
    menuImage: {
      normal: <ImgSettings />,
      active: <ImgSettingsActive />
    },
    element: <Settings />
  }
];

export interface routesType {
  path: string;
  title: string;
  menuImage: images;
}

interface images {
  normal: JSX.Element;
  active: JSX.Element;
}
