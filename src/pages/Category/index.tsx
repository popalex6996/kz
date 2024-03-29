import React, { useEffect, useState } from "react";
import "./index.css";
import Spacer from "../../components/Spacer";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MultiRangeSlider from "../../components/MultiRangeSlider";
import { PRODUCTS, SUB_CATEGORIES } from "../../utilities/constants";
import ProductCard from "../../components/ProductCard";

type SortOption = "price asc" | "price desc" | "rate";

const sortOptions: { title: string; value: SortOption }[] = [
  {
    title: "sort price asc",
    value: "price asc",
  },
  {
    title: "sort price desc",
    value: "price desc",
  },
  {
    title: "sort rate",
    value: "rate",
  },
];

const MIN = 0;
const MAX = 1000;

const Category = () => {
  const { t } = useTranslation();
  let { categoryId, subCategoryId } = useParams();

  const [sortOption, setSortOption] = useState<SortOption>("rate");
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
            <div className="price-filter-title">{t("price")}</div>
            <div className="price-filter">
              <MultiRangeSlider
                min={MIN}
                max={MAX}
                range={range}
                setRange={setRange}
              />
            </div>
          </div>
          <Spacer height={20} />
          {category && (
            <div className="type-filter-wrapper">
              {SUB_CATEGORIES[category as keyof typeof SUB_CATEGORIES].map(
                (sc, index) => (
                  <div className="type-option" key={sc.subCategory + index}>
                    <label
                      className={
                        checked.includes(sc.subCategory)
                          ? "active-type-option-label container"
                          : "type-option-label container"
                      }
                      htmlFor={sc.subCategory}
                    >
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        id={sc.subCategory}
                        checked={checked.includes(sc.subCategory)}
                        onChange={() => {
                          if (checked.includes(sc.subCategory)) {
                            const newChecked = checked.filter(
                              (c) => c !== sc.subCategory,
                            );
                            setChecked(newChecked);
                          } else {
                            setChecked([...checked, sc.subCategory]);
                          }
                        }}
                      />
                      <div className="checkmark" />
                      <Spacer width={10} />
                      {t(sc.subCategory)}
                      <Spacer width={10} />
                      <div>[count]</div>
                    </label>
                  </div>
                ),
              )}
            </div>
          )}
        </div>
        <div className="category-page-sort-content">
          <div className="sort-bar">
            {sortOptions.map((o) => (
              <div
                key={o.value}
                className={
                  sortOption === o.value
                    ? "sort-option active-option"
                    : "sort-option"
                }
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
