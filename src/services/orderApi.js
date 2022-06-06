import api from './api';

export async function updateOrderPayment(body, token) {
  const response = await api.put('/orders', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getOrder(token) {
  const response = await api.get('/orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createOrder(body, token) {
  const response = await api.post('/orders', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
