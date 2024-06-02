import http from '../services/http';

interface ErrorResponse {
  error: string;
}

const handleErrors = (err: any /* path: string, payload: any */): ErrorResponse => {
  const errorMessageKey = err.response?.data;
  return { error: errorMessageKey };
};

const getRequest = async (path: string, payload?: any): Promise<any> => {
  try {
    const res = await http.get(path, payload);
    return res;
  } catch (err) {
    return handleErrors(err);
  }
};

const postRequest = async (path: string, payload: any): Promise<any> => {
  try {
    const res = await http.post(path, payload);
    return res;
  } catch (err) {
    return handleErrors(err);
  }
};

const putRequest = async (path: string, payload: any): Promise<any> => {
  try {
    const res = await http.put(path, payload);
    return res;
  } catch (err) {
    return handleErrors(err);
  }
};

const patchRequest = async (path: string, payload: any): Promise<any> => {
  try {
    return await http.patch(path, payload);
  } catch (err) {
    return handleErrors(err);
  }
};

const deleteRequest = async (path: string, payload?: any): Promise<any> => {
  try {
    return await http.delete(path, payload);
  } catch (err) {
    return handleErrors(err);
  }
};

export const user = {
  getAllUsers: () => getRequest('/users/fetch-user-data'),
  addNewUser: (payload: any) => postRequest('/users/create-user-data', payload),
  editUser: (payload: any, id: string) => putRequest(`/users/update-user-data/${id}`, payload),
}


