import { apiClient } from "../api/client";

export interface ProductRes {
  id: string;
  name: string;
  image: string;
  discount: number;
}

export interface ProductReq {
  id: string;
  name: string;
  image: string;
  discount: number;
}

const ProductService = {
  getAll: async (): Promise<ProductRes[]> => {
    const res = await apiClient.get("/items");
    return res.data;
  },
  add: async (product: ProductReq): Promise<ProductRes> => {
    const res = await apiClient.post("/items", product);
    return res.data;
  },
};

export default ProductService;
