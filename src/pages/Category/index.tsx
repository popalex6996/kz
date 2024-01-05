import React, { useState } from "react";
import "./index.css";
import Spacer from "../../components/Spacer";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MultiRangeSlider from "../../components/MultiRangeSlider";

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
  let { category } = useParams();

  const [sortOption, setSortOption] = useState<SortOption>("rate");
  const [range, setRange] = useState({ from: MIN, to: MAX });

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
          {range.from} || {range.to}
        </div>
      </div>
      <Spacer height={30} />
      <Spacer height={30} />
    </div>
  );
};

export default Category;
