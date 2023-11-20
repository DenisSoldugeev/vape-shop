'use client';
import Link from 'next/link';
import styles from './Breadcrumb.module.scss';
import { BreadcrumbsProps } from 'types/breadcrumbs';

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label='breadcrumbs' className={styles.breadcrumbs}>
      <ul className={styles.list}>
        {items.map((crumb, i) => {
          const isLastItem = i === items.length - 1;
          return (
            <li
              key={i}
              className={
                isLastItem ? styles.lastBreadcrumb : styles.breadcrumbItem
              }
            >
              {isLastItem ? (
                <span>{crumb.label}</span>
              ) : (
                <>
                  <Link href={crumb.path}>{crumb.label}</Link>
                  <span className={styles.separator}> / </span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
