import { sidebarRoutes } from '../routes/routes';

export const getHeaderData = (path: string) => {
  console.log('func getHeaderData');
  const element = sidebarRoutes.find((item) => item.path === path);
  console.log(element);
  if (element) {
    return { title: element.title, headerButtonTitle: element.headerButtonTitle };
  }
};
