import ImgCalendar from '../../components/ui/images/sidebar/ImgCalendar';
import ImgCalendarActive from '../../components/ui/images/sidebar/ImgCalendarActive';
import ImgCustomers from '../../components/ui/images/sidebar/ImgCustomers';
import ImgCustomersActive from '../../components/ui/images/sidebar/ImgCustomersActive';
import ImgDashboard from '../../components/ui/images/sidebar/ImgDashboard';
import ImgDashboardActive from '../../components/ui/images/sidebar/ImgDashboardActive';
import ImgDeals from '../../components/ui/images/sidebar/ImgDeals';
import ImgDealsActive from '../../components/ui/images/sidebar/ImgDealsActive';
import ImgNotes from '../../components/ui/images/sidebar/ImgNotes';
import ImgNotesActive from '../../components/ui/images/sidebar/ImgNotesActive';
import ImgSettings from '../../components/ui/images/sidebar/ImgSettings';
import ImgSettingsActive from '../../components/ui/images/sidebar/ImgSettingsActive';
import ImgTasks from '../../components/ui/images/sidebar/ImgTasks';
import ImgTasksActive from '../../components/ui/images/sidebar/ImgTasksActive';
import { routes } from '../../routes/routes';

export const sidebarRoutes: routesType[] = [
  {
    path: routes.dashboard,
    title: 'Dashboard',
    menuImage: {
      normal: <ImgDashboard />,
      active: <ImgDashboardActive />
    }
  },
  {
    path: routes.deals,
    title: 'Deals',
    menuImage: {
      normal: <ImgDeals />,
      active: <ImgDealsActive />
    }
  },
  {
    path: routes.customers,
    title: 'Customers',
    menuImage: {
      normal: <ImgCustomers />,
      active: <ImgCustomersActive />
    }
  },
  {
    path: routes.tasks,
    title: 'Tasks',
    menuImage: {
      normal: <ImgTasks />,
      active: <ImgTasksActive />
    }
  },
  {
    path: routes.calendar,
    title: 'Calendar',
    menuImage: {
      normal: <ImgCalendar />,
      active: <ImgCalendarActive />
    }
  },
  {
    path: routes.notes,
    title: 'Notes',
    menuImage: {
      normal: <ImgNotes />,
      active: <ImgNotesActive />
    }
  },
  {
    path: routes.settings,
    title: 'Settings',
    menuImage: {
      normal: <ImgSettings />,
      active: <ImgSettingsActive />
    }
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
