const yup = require("yup");
const {
  getStore,
  getStores,
  createStore,
  getProducts,
  createReservation
} = require("./storeService");

// Resolvers define the technique for fetching the types in the
// schema.

const storeInputSchema = yup.object({
  name: yup.string().required(),
  address: yup.object({
    street: yup.string(),
    number: yup.number(),
    postalCode: yup.number(),
    city: yup.string()
  })
});

exports.resolvers = {
  Query: {
    stores(root, args, context, info) {
      return getStores();
    },
    store(root, { id }, context, info) {
      return getStore(id);
    }
  },
  Store: {
    products({ storeId }, args, context, info) {
      return getProducts(storeId);
    }
  },
  Mutation: {
    createStore(root, { input }, context, info) {
      storeInputSchema.isValid(input)
        ? createStore(input)
        : console.log("wrong input");
    },
    createReservation(root, args, context, info) {
      return createReservation();
    }
  }
};
