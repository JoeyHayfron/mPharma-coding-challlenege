import { schema } from "normalizr";

const priceSchema = new schema.Entity("prices");
export const productsSchema = new schema.Entity("products", {
  prices: [priceSchema],
});

// export const productsSchema = new schema.Entity("product", {
