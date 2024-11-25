import './index.css';
import React from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

import Spacer from '../Spacer';

const Breadcrumb = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { categoryId, subCategoryId, productId } = useParams();

  if (pathname === '/home' || pathname === '/') return;

  const breadcrumbs = pathname
    .split('/')
    .filter(
      (b) => !!b && b !== 'category' && b !== 'sub-category' && b !== 'product' && b !== 'home',
    )
    .map((b) => {
      return {
        title: b,
        link:
          b === subCategoryId
            ? `/category/${categoryId}/sub-category/${subCategoryId}`
            : b === categoryId
              ? `/category/${categoryId}`
              : b === productId
                ? pathname
                : `/${b}`,
      };
    });

  return (
    <div className="breadcrumb-wrapper">
      <a href="/home" className="breadcrumb-link ">
        <i className="fa-solid fa-house" />
        <Spacer width={5} />
        {t('home')}
      </a>
      {breadcrumbs.map((b) => {
        return (
          <div className="breadcrumb-link-wrapper" key={b.title}>
            <Spacer width={5} />
            <i className="fa-solid fa-chevron-right breadcrumb-chevron-icon" />
            <Spacer width={5} />
            {b.link === pathname ? (
              <div className="breadcrumb-link">{t(b.title)}</div>
            ) : (
              <a href={b.link} className="breadcrumb-link">
                {t(b.title)}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Breadcrumb;
