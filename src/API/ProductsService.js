export default class ProductsService {
    static async getAll() {
        const responce = await fetch(
            "https://61f91246783c1d0017c448f8.mockapi.io/products"
          );
          const data = await responce.json();
          return data;
    }
    static async getLastAndLimit(counter) {
        const responce = await fetch(
            `https://61f91246783c1d0017c448f8.mockapi.io/products?page=1&limit=${counter}`
          );
          const data = await responce.json();
          return data;
    }
}