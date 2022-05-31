import api from './api';

export async function getAccomodationInfo(token) {
  const response = await api.get('/accomodations', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
