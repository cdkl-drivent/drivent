import api from './api';

export async function updateOrder(body, token) {
  const response = await api.put('/orders', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
