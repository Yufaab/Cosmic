import axios from 'axios'

interface UserCredentials {
  email?: string
  password?: string
  google_token?: string
}

interface UserRegistration extends UserCredentials {
  firstname?: string
  lastname?: string
  phone?: string
}

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

  async login(userCredentials: UserCredentials) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/api/student/login`,
        data: {
          email: userCredentials.email,
          password: userCredentials.password,
          googleAccessToken: userCredentials.google_token
        },
      }
      const res = await axios(options)
      this.setToken(res.data.token)
      return res.data
    } catch (e) {
      console.error(e)
    }
  }

  async signup(userRegistration: UserRegistration) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/api/student/signup`,
        data: {
          firstname: userRegistration.firstname,
          lastname: userRegistration.lastname,
          email: userRegistration.email,
          password: userRegistration.password,
          phone: userRegistration.phone,
          googleAccessToken: userRegistration.google_token
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
