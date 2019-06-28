const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.

exports.typeDefs = gql`
  type Query {
    stores: [Store]
    store(id: String): [Store]
  }

  type Mutation {
    createStore(input: StoreInput): Store
    createReservation(input: ReservationInput): Store
  }

  type Store {
    id: String
    name: String
    address: Address
    products: [Product]
  }

  input StoreInput {
    name: String!
    address: AddressInput
  }

  type Address {
    street: String
    number: Int
    postalCode: Int
    city: String
  }

  input AddressInput {
    street: String
    number: Int
    postalCode: Int
    city: String
  }

  type Product {
    storeId: Int
    price: Int
    productName: String
    description: String
  }

  input ReservationInput {
    ReservationProducts: [ReservationProductInput]
  }

  input ReservationProductInput {
    product: String
    quantity: Int
  }
`;
