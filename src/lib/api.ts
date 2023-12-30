import axios from 'axios'

class YufaabInstance {
  host: string | undefined
  constructor(host: string | undefined) {
    this.host = host
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }
  removeToken() {
    localStorage.removeItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }

  async login(email: string, password: string) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/api/student/login`,
        data: {
          email: email,
          password: password,
        },
      }
      const res = await axios(options)
      this.setToken(res.data.token)
      return res.data
    } catch (e) {
      console.error(e)
    }
  }

  async signup(username: string, email: string, password: string) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/api/student/signup`,
        data: {
          username: username,
          email: email,
          password: password,
        },
      }
      const res = await axios(options)
      this.setToken(res.data.token)
      return res.data
    } catch (e) {
      console.error(e)
    }
  }
}

export default YufaabInstance
