const uuid = require("uuid");
const { stores, products } = require("./data");

function createStore({ name, address }) {
  const newStore = { id: uuid(), name, address };
  stores.push(newStore);
  return newStore;
}

function getStores() {
  return stores;
}

function getStore(id) {
  return stores.filter(store => store.id === id);
}

function getProducts() {
  products.filter(product => product.storeId === root.storeId);
}

// function createReservation() {}

module.exports = { createStore, getStores, getStore, getProducts };
