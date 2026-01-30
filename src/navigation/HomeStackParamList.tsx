import { ProductRes } from "../network/service/productService";

type HomeStackParamList = {
  Home: {deletedId?: string, updatedProduct?: ProductRes};
  Detail: { id: string };
};

export default HomeStackParamList;
