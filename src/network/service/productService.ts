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
  delete: async (id: string): Promise<ProductRes> => {
    const res = await apiClient.delete("/items/" + id);
    return res.data;
  },
  edit: async (product: ProductRes): Promise<ProductRes> => {
    const res = await apiClient.put(`/items/${product.id}`, product);
    return res.data;
  },
};

export default ProductService;
