import { useEffect, useState } from "react";
import ProductService, { ProductRes } from "../network/service/productService";

type LoadData<T> = (page: number) => Promise<T[]>;

export const usePagination = <T>(api: LoadData<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isHasMore, setIsHasMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const loadData = async (isRefresh: boolean = false) => {
    if (data.length === 0) {
      setIsLoading(true);
    } else {
      if (isRefresh) {
        setIsRefresh(true);
      } else {
        setIsLoadMore(true);
      }
    }

    try {
      const newData = await api(currentPage);

      if (data.length === 0 || isRefresh) {
        setData(newData);
      } else {
        setData((prev) => [...prev, ...newData]);
      }
      if (data.length > 50) setIsHasMore(false);
    } catch (error) {
      console.error("Failed to fetch all product: ", error);
    } finally {
      setIsLoading(false);
      setIsLoadMore(false);
      setIsRefresh(false);
    }
  };

  const handleLoadMore = () => {
    if (!isLoading && !isLoadMore && !isRefresh && !isHasMore) {
      setCurrentPage((oldValue) => oldValue + 1);
      loadData();
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handlePullRefresh = () => {
    if (!isLoading && !isLoadMore && !isRefresh) {
      setCurrentPage(1);
      setIsHasMore(true);
      loadData(true);
    }
  };

  return {
    data,
    isLoadMore,
    isLoading,
    isRefresh,
    setData,
    handlePullRefresh,
    handleLoadMore,
  };
};
