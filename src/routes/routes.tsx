import { ReactElement } from 'react';
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

export const routes = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    images: {
      normal: <ImgDashboard />,
      active: <ImgDashboardActive />
    }
  },
  {
    path: 'deals',
    title: 'Deals',
    images: {
      normal: <ImgDeals />,
      active: <ImgDealsActive />
    }
  },
  {
    path: 'customers',
    title: 'Customers',
    images: {
      normal: <ImgCustomers />,
      active: <ImgCustomersActive />
    }
  },
  {
    path: 'tasks',
    title: 'Tasks',
    images: {
      normal: <ImgTasks />,
      active: <ImgTasksActive />
    }
  },
  {
    path: 'calendar',
    title: 'Calendar',
    images: {
      normal: <ImgCalendar />,
      active: <ImgCalendar />
    }
  },
  {
    path: 'notes',
    title: 'Notes',
    images: {
      normal: <ImgNotes />,
      active: <ImgNotes />
    }
  },
  {
    path: 'settings',
    title: 'Settings',
    images: {
      normal: <ImgSettings />,
      active: <ImgSettings />
    }
  }
];

export interface routesType {
  path: string;
  title: string;
  images: images;
}

interface images {
  normal: JSX.Element;
  active: JSX.Element;
}
