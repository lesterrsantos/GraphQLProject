export const Query = {
  hello: () => {
    return "World!!!!!";
  },
  numberOfAnimals: () => {
    return 55;
  },
  price: () => {
    return 2314.5689;
  },
  isCool: () => {
    return false;
  },
  words: () => {
    return ["animals", "fruits", "mother"];
  },
  products: (parent, args, { products }) => {
    return products;
  },
  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
};
