import { User } from '../../core/models/User';
import { apiManager } from './ApiManager';
import axios from 'axios';


export const UserDataSource = {
  url: 'http://10.0.2.2:8080/users/',

  async getUsers(): Promise<User[]> {

    try {
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.defaults.headers.post['accept'] = '*/*';

      const response = await axios.get<User[]>(this.url)
      console.log('RESPONSE:::::', response)
      console.log('RESPONSE::::: DATA', response.data)

      return response.data;
    } catch (error) {
      console.log('ERROR: ', error)
      return []
    }

  },

  async getUser(id: number): Promise<User> {
    const response = await apiManager.get(`http://10.0.2.2:8080/users/${id}`);
    console.log('RESPONSE: ', response.data)
    return response.data;
  },

  async createUser(user: any): Promise<void> {
    try {

      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.defaults.headers.post['accept'] = '*/*';

      const url = 'http://10.0.2.2:8080/users'
      console.log('CREAR USUARIO')
      console.log("USUARIO ", user)
      const response = await axios.post<User>(url, user)
      console.log('RESPONSE:::::', response)
      console.log('RESPONSE::::: DATA', response.data)

      
    } catch (error) {
      console.log('ERROR: ', error)
    }
  },

  async updateUser(id: number, user: User): Promise<void> {

    try {
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.defaults.headers.post['accept'] = '*/*';

      const url = 'http://10.0.2.2:8080/users/' + id 
      console.log('ACTUALIZAR USUARIO')

      const response = await axios.put<User>(url, user)
      console.log('RESPONSE:::::', response)
      console.log('RESPONSE::::: DATA', response.data)

      
    } catch (error) {
      console.log('ERROR: ', error)
    }
  },

  async deleteUser(id: number): Promise<void> {
    const response = await apiManager.delete(`http://10.0.2.2:8080/users/${id}`);
    console.log('RESPONSE: ', response.data)
  }
};
