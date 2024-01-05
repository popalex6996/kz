import React, { useEffect, useState } from "react";
import "./index.css";
import Spacer from "../../components/Spacer";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MultiRangeSlider from "../../components/MultiRangeSlider";

const subCategories = {
  "fruits-vegetables-pickles": [
    {
      title: "fruits",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "fruits",
      available: true,
    },
    {
      title: "vegetables",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "vegetables",
      available: true,
    },
    {
      title: "pickles",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "pickles",
      available: true,
    },
    {
      title: "dried fruits",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "dried-fruits",
      available: true,
    },
    {
      title: "mushrooms",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "mushrooms",
      available: true,
    },
    {
      title: "nuts",
      img: "",
      category: "fruits-vegetables-pickles",
      subCategory: "nuts",
      available: true,
    },
  ],
  meat: [
    {
      title: "poultry meat",
      img: "",
      category: "meat",
      subCategory: "poultry-meat",
      available: true,
    },
    {
      title: "pork",
      img: "",
      category: "meat",
      subCategory: "pork",
      available: true,
    },
    {
      title: "beef and veal",
      img: "",
      category: "meat",
      subCategory: "beef-veal",
      available: true,
    },
    {
      title: "salo",
      img: "",
      category: "meat",
      subCategory: "salo",
      available: true,
    },
    {
      title: "rabbit",
      img: "",
      category: "meat",
      subCategory: "rabbit",
      available: true,
    },
    {
      title: "lamb",
      img: "",
      category: "meat",
      subCategory: "lamb",
      available: true,
    },
    {
      title: "offal",
      img: "",
      category: "meat",
      subCategory: "offal",
      available: true,
    },
  ],
  fish: [
    {
      title: "fresh fish",
      img: "",
      category: "fish",
      subCategory: "fresh-fish",
      available: true,
    },
    {
      title: "smoked fish",
      img: "",
      category: "fish",
      subCategory: "smoked-fish",
      available: true,
    },
    {
      title: "cancers",
      img: "",
      category: "fish",
      subCategory: "cancers",
      available: true,
    },
  ],
  cheeses: [
    {
      title: "semi-hard cheeses",
      img: "",
      category: "cheeses",
      subCategory: "semi-hard-cheeses",
      available: true,
    },
    {
      title: "brined cheeses",
      img: "",
      category: "cheeses",
      subCategory: "brined-cheeses",
      available: true,
    },
    {
      title: "soft cheeses",
      img: "",
      category: "cheeses",
      subCategory: "soft-cheeses",
      available: true,
    },
    {
      title: "processed cheeses",
      img: "",
      category: "cheeses",
      subCategory: "processed-cheeses",
      available: true,
    },
    {
      title: "hard cheeses",
      img: "",
      category: "cheeses",
      subCategory: "hard-cheeses",
      available: true,
    },
  ],
  "bakery-products": [
    {
      title: "bread",
      img: "",
      category: "bakery-products",
      subCategory: "bread",
      available: true,
    },
    {
      title: "buns",
      img: "",
      category: "bakery-products",
      subCategory: "buns",
      available: true,
    },
    {
      title: "croissant puffs",
      img: "",
      category: "bakery-products",
      subCategory: "croissant-puffs",
      available: true,
    },
    {
      title: "pita cakes and blanks",
      img: "",
      category: "bakery-products",
      subCategory: "pita-cakes-blanks",
      available: true,
    },
    {
      title: "drying and breadcrumbs",
      img: "",
      category: "bakery-products",
      subCategory: "drying-breadcrumbs",
      available: true,
    },
  ],
  "milk-eggs": [
    {
      title: "milk cream",
      img: "",
      category: "milk-eggs",
      subCategory: "milk-cream",
      available: true,
    },
    {
      title: "yogurts desserts",
      img: "",
      category: "milk-eggs",
      subCategory: "yogurts-desserts",
      available: true,
    },
    {
      title: "eggs",
      img: "",
      category: "milk-eggs",
      subCategory: "eggs",
      available: true,
    },
    {
      title: "cottage cheese",
      img: "",
      category: "milk-eggs",
      subCategory: "cottage-cheese",
      available: true,
    },
    {
      title: "sour cream",
      img: "",
      category: "milk-eggs",
      subCategory: "sour-cream",
      available: true,
    },
    {
      title: "butter margarine",
      img: "",
      category: "milk-eggs",
      subCategory: "butter-margarine",
      available: true,
    },
  ],
  grocery: [
    {
      title: "groats",
      img: "",
      category: "grocery",
      subCategory: "groats",
      available: true,
    },
    {
      title: "pasta",
      img: "",
      category: "grocery",
      subCategory: "pasta",
      available: true,
    },
    {
      title: "oil",
      img: "",
      category: "grocery",
      subCategory: "oil",
      available: true,
    },
    {
      title: "sugar",
      img: "",
      category: "grocery",
      subCategory: "sugar",
      available: true,
    },
    {
      title: "salt",
      img: "",
      category: "grocery",
      subCategory: "salt",
      available: true,
    },
    {
      title: "flour",
      img: "",
      category: "grocery",
      subCategory: "flour",
      available: true,
    },
  ],
  "sauces-canned": [
    {
      title: "sauces",
      img: "",
      category: "sauces-canned",
      subCategory: "sauces",
      available: true,
    },
    {
      title: "seasonings spices",
      img: "",
      category: "sauces-canned",
      subCategory: "seasonings-spices",
      available: true,
    },
    {
      title: "jams preserves",
      img: "",
      category: "sauces-canned",
      subCategory: "jams-preserves",
      available: true,
    },
    {
      title: "canned meat",
      img: "",
      category: "sauces-canned",
      subCategory: "canned-meat",
      available: true,
    },
    {
      title: "canned fruits",
      img: "",
      category: "sauces-canned",
      subCategory: "canned-fruits",
      available: true,
    },
    {
      title: "honey",
      img: "",
      category: "sauces-canned",
      subCategory: "honey",
      available: true,
    },
  ],
  tea: [
    {
      title: "herbal tea compositions",
      img: "",
      category: "tea",
      subCategory: "herbal-tea-compositions",
      available: true,
    },
    {
      title: "herbs",
      img: "",
      category: "tea",
      subCategory: "herbs",
      available: true,
    },
  ],
  drinks: [
    {
      title: "juice",
      img: "",
      category: "drinks",
      subCategory: "juice",
      available: true,
    },
    {
      title: "kvass",
      img: "",
      category: "drinks",
      subCategory: "kvass",
      available: true,
    },
    {
      title: "compote",
      img: "",
      category: "drinks",
      subCategory: "compote",
      available: true,
    },
  ],
  garden: [
    {
      title: "flowers",
      img: "",
      category: "garden",
      subCategory: "flowers",
      available: true,
    },
    {
      title: "indoor plants",
      img: "",
      category: "garden",
      subCategory: "indoor-plants",
      available: true,
    },
    {
      title: "bouquets",
      img: "",
      category: "garden",
      subCategory: "bouquets",
      available: true,
    },
    {
      title: "seed",
      img: "",
      category: "garden",
      subCategory: "seed",
      available: true,
    },
    {
      title: "saplings",
      img: "",
      category: "garden",
      subCategory: "saplings",
      available: true,
    },
    {
      title: "flower pots",
      img: "",
      category: "garden",
      subCategory: "flower-pots",
      available: true,
    },
  ],
};

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
              {subCategories[category as keyof typeof subCategories].map(
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
                      <span className="checkmark" />
                      <Spacer width={30} />
                      {t(sc.title)}
                    </label>
                    <div>[count]</div>
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
          {range.from} || {range.to}
        </div>
      </div>
      <Spacer height={30} />
      <Spacer height={30} />
    </div>
  );
};

export default Category;
