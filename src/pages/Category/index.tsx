import React, { useEffect, useState } from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import MultiRangeSlider from '../../components/MultiRangeSlider';
import ProductCard from '../../components/ProductCard';
import Spacer from '../../components/Spacer';
import { PRODUCTS, SUB_CATEGORIES } from '../../utilities/constants';

type SortOption = 'price asc' | 'price desc' | 'rate';

const sortOptions: { title: string; value: SortOption }[] = [
  {
    title: 'sort price asc',
    value: 'price asc',
  },
  {
    title: 'sort price desc',
    value: 'price desc',
  },
  {
    title: 'sort rate',
    value: 'rate',
  },
];

const MIN = 0;
const MAX = 1000;

const Category = () => {
  const { t } = useTranslation();
  const { categoryId, subCategoryId } = useParams();

  const [sortOption, setSortOption] = useState<SortOption>('rate');
  const [range, setRange] = useState<{ from: number; to: number }>({
    from: MIN,
    to: MAX,
  });
  const [category, setCategory] = useState<string>();
  //@typescript-eslint
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    if (categoryId) {
      setCategory(categoryId);
      setChecked([]);
    }
    if (subCategoryId) {
      setChecked([subCategoryId]);
    }
  }, [categoryId, subCategoryId]);

  return (
    <div className="category-page-wrapper">
      <Spacer height={30} />
      <div className="category-page-title-wrapper">
        {category && <h1 className="category-page-title">{t(category)}</h1>}
      </div>
      <Spacer height={30} />
      <div className="category-filters-content-wrapper">
        <div className="category-filters-wrapper">
          <div className="price-filter-wrapper">
            <div className="price-filter-title">{t('price')}</div>
            <div className="price-filter">
              <MultiRangeSlider min={MIN} max={MAX} range={range} setRange={setRange} />
            </div>
          </div>
          <Spacer height={20} />
          {category && (
            <div className="type-filter-wrapper">
              {SUB_CATEGORIES[category as keyof typeof SUB_CATEGORIES].map((sc, index) => (
                <div className="type-option" key={sc.name + index}>
                  <label
                    className={
                      checked.includes(sc.name)
                        ? 'active-type-option-label container'
                        : 'type-option-label container'
                    }
                    htmlFor={sc.name}
                  >
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      id={sc.name}
                      checked={checked.includes(sc.name)}
                      onChange={() => {
                        if (checked.includes(sc.name)) {
                          const newChecked = checked.filter((c) => c !== sc.name);
                          setChecked(newChecked);
                        } else {
                          setChecked([...checked, sc.name]);
                        }
                      }}
                    />
                    <div className="checkmark" />
                    <Spacer width={10} />
                    {t(sc.name)}
                    <Spacer width={10} />
                    <div>[count]</div>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="category-page-sort-content">
          <div className="sort-bar">
            {sortOptions.map((o) => (
              <div
                key={o.value}
                className={sortOption === o.value ? 'sort-option active-option' : 'sort-option'}
                onClick={() => setSortOption(o.value)}
              >
                {t(o.title)}
              </div>
            ))}
          </div>
          <Spacer height={30} />
          <div className="content-wrapper">
            {PRODUCTS.map((product, index) => (
              <ProductCard product={product} key={product.name + index} />
            ))}
          </div>
        </div>
      </div>
      <Spacer height={30} />
      <Spacer height={30} />
    </div>
  );
};

export default Category;
