import { ReactNode } from 'react';

export type CrumbItem = {
  label: ReactNode;
  path: string;
};

export type BreadcrumbsProps = {
  items: CrumbItem[];
};
