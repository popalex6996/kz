import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { CATEGORIES, SUB_CATEGORIES } from '../../../../utilities/constants';
import { Category, CategoryName, Modal, SubCategory } from '../../../../utilities/types';
import Button from '../../../Button';
import Spacer from '../../../Spacer';

import './index.css';

const CatalogModal = ({ hide }: { hide: (modal: Modal) => void }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [selectedCategory, setCategory] = useState<CategoryName>('fruits-vegetables-pickles');

  //Catalog categories menu item
  const CategoryItem = ({ name, icon, available }: Category) => {
    return (
      <button
        key={name}
        onClick={() => {
          if (selectedCategory === name) {
            hide('catalog');
            navigate(`category/${selectedCategory}`);
          } else {
            setCategory(name);
          }
        }}
        disabled={!available}
        className={selectedCategory === name ? 'catalog-menu-active-button' : 'catalog-menu-button'}
      >
        <i className={`category-icon fa-solid fa-${icon}`} />
        <Spacer width={10} />
        <div className="category-name-wrapper">
          <span className={!available ? 'no-category-name' : 'category-name'}>{t(name)}</span>
          {!available && <span className="no-category-text">{t('no-category')}</span>}
        </div>
      </button>
    );
  };

  //Catalog SubCategory item
  const SubCategoryItem = ({ name, category, available }: SubCategory) => {
    return (
      <button
        key={name}
        className={available ? 'product-variety-card' : 'no-subcategory'}
        onClick={() => {
          hide('catalog');
          navigate(`category/${category}/sub-category/${name}`);
        }}
        disabled={!available}
      >
        {/*todo: Subcategory image and titles block*/}
        <span className={available ? 'subcategory-title' : 'empty-subcategory-title'}>
          {t(name)}
        </span>
        {!available && <span className="empty-subcategory-text">{t('empty-subcategory')}</span>}
      </button>
    );
  };

  return (
    <>
      {/* Categories */}
      <div className="catalog-menu">
        {CATEGORIES.map(({ name, icon, available }: Category) => (
          <CategoryItem key={'catalog-menu' + name} name={name} icon={icon} available={available} />
        ))}
      </div>

      {/* Category products */}
      <div className="catalog-content">
        <div className="category-name-title-close">
          {/* Selected category title */}
          <span className="category-name-title">{t(selectedCategory)}</span>

          {/* Catalog modal close button */}
          <Button
            onClick={() => hide('catalog')}
            icon="xmark"
            iconClassName="fa-solid"
            color="#711d1d"
            className="catalog-close-btn"
          />
        </div>

        <Spacer height={10} />

        {/* Subcategories list */}
        <div className="product-variety-cards">
          {SUB_CATEGORIES[selectedCategory].map(
            ({ name, category, image, available }: SubCategory) => (
              <SubCategoryItem
                key={name}
                name={name}
                category={category}
                image={image}
                available={available}
              />
            ),
          )}

          {/*Look at all category products btn */}
          <button
            className="product-variety-card"
            onClick={() => {
              hide('catalog');
              navigate(`category/${selectedCategory}`);
            }}
          >
            <span>{t('lookAtAll')}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CatalogModal;
