export enum Category {
  'FASHION' = '패션',
  'ACCESSORY' = '액세서리',
  'DIGITAL' = '디지털',
}

export type CategoryTypes =
  | Category.FASHION
  | Category.ACCESSORY
  | Category.DIGITAL;

export type SubCategory = { [index: string]: string[] } & {
  [key in CategoryTypes]: string[];
};

export const subCategoryMap: SubCategory = {
  [Category.FASHION]: ["men's clothing", "women's clothing"],
  [Category.ACCESSORY]: ['jewelery'],
  [Category.DIGITAL]: ['electronics'],
};

export const categories = [
  {
    name: 'fashion',
    url: '/fashion',
    text: Category.FASHION,
  },
  {
    name: 'accessory',
    url: '/accessory',
    text: Category.ACCESSORY,
  },
  {
    name: 'digital',
    url: '/digital',
    text: Category.DIGITAL,
  },
];

export const getCategoryName = (pathname: string) => {
  const category = categories.find((category) => category.url === pathname);
  return !category ? '' : category.text;
};
