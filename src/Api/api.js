import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://63594de4ff3d7bddb99ed7e7.mockapi.io/contacts',
  params: {},
});

export const fetchContacts = async () => {
  const { data } = await instanceContacts.get('');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instanceContacts.post('', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instanceContacts.delete(`/${id}`);
  return data;
};
