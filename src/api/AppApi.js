import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  // Diğer isteğe bağlı ayarlar
});

const getAccessToken = () => {
  console.log('getAccessToken', localStorage.getItem('access_token'))
  return localStorage.getItem('access_token');
} 



// Müşteri Listesini Getir
export const customerList = async (filter) => {

  let queryString = ''

  if(filter && filter.checking_account_balance){
    queryString += '?checking_account_balance=' + filter.checking_account_balance
  }

  const accessToken = getAccessToken();
  console.log('accessToken', localStorage.getItem('access_token'))

  try {

    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    const response = await axiosInstance.get('/checkingaccounts' + queryString, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.list;
  } catch (error) {
    throw error;
  }
};

// Müşteri Getir :id
export const customerDetail = async (_id) => {

  const accessToken = getAccessToken();
  console.log('accessToken', localStorage.getItem('access_token'))

  try {

    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    const response = await axiosInstance.get('/checkingaccounts/' + _id, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.detail;
  } catch (error) {
    throw error;
  }
};

// Müşteri Ekle
export const customerAdd = async (postData) => {

  const accessToken = getAccessToken();
  console.log('accessToken', localStorage.getItem('access_token'))

  try {

    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    const response = await axiosInstance.post('/checkingaccounts/create', postData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Müşteri Güncelle :id
export const customerUpdate = async (_id, postData) => {

  const accessToken = getAccessToken();
  console.log('accessToken', localStorage.getItem('access_token'))

  try {

    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    const response = await axiosInstance.patch('/checkingaccounts/update/'+ _id, postData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};



export const deleteCustomer = async (id) => {

  const accessToken = getAccessToken();
  console.log('accessToken', localStorage.getItem('access_token'))

  try {

    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    const response = await axiosInstance.delete('/checkingaccounts/delete/' + id, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.list;
  } catch (error) {
    throw error;
  }
};

// Müşteri Transaction Getir
export const customerTransactionList = async (filter) => {

  let queryString = ''

  if(filter.checking_account_transaction_type){
    queryString += '?checking_account_transaction_type=' + filter.checking_account_transaction_type
  }

  const accessToken = getAccessToken();
  console.log('accessToken', localStorage.getItem('access_token'))

  try {

    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    const response = await axiosInstance.get('/checkingaccounttransactions' + queryString, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.list;
  } catch (error) {
    throw error;
  }
};