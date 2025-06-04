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
    location,
    images,
  }: {
    title: string;
    description: string;
    price: string;
    location: {name: string, longitude:number, latitude: number};
    images: {uri: string; type: string; fileName: string}[];
  },
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', price.toString());
  formData.append('location', JSON.stringify(location));
  images.forEach(image => {
    formData.append('images', {
      uri: image.uri,
      type: image.type || 'image/jpeg',
      name: image.fileName || `photo-${Date.now()}.jpg`,
    } as any);
  });
  return await a.post('api/products', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export {getProducts, getProductById, getProductsWithQuery, addProduct};
