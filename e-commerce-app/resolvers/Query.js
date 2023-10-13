import { categories, products } from "../db.js";

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
  products: () => {
    return products;
  },
  product: (parent, args, context) => {
    const productId = args.id;
    const product = products.find((product) => product.id === productId);
    if (!product) return null;
    return product;
  },
  categories: () => {
    return categories;
  },
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
