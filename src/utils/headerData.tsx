import { sidebarRoutes } from '../routes/routes';

export const getHeaderData = (path: string) => {
  const element = sidebarRoutes.find((item) => item.path === path);
  if (element) {
    return { title: element.title, headerButtonTitle: element.headerButtonTitle };
  }
};
