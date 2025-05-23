import {a} from '../axiosInstance';

const getProducts = async (accessToken: string, page: number) => {
  const response = await a.get(`/api/products?page=${page}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const getProductById = async (accessToken: string, id: string) =>
  await a.get(`api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const getProductsWithQuery = async (accessToken: string, query: string) =>
  await a.get(`api/products/search?query=${query}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const addProduct = async (
  accessToken: string,
  {
    title,
    description,
    price,
    images,
  }: {title: string; description: string; price: number; images: string[]},
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', price.toString());
  images.forEach(image => {
    formData.append('images', image);
  });
  return await a.post('api/products', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export {getProducts, getProductById, getProductsWithQuery, addProduct};
