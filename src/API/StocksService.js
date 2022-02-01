export default class StocksService {
    static async getAll() {
        const responce = await fetch(
            "https://61f91246783c1d0017c448f8.mockapi.io/stocks"
          );
          const data = await responce.json();
          return data;
    }
}