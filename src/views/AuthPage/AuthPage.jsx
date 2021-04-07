import { Component } from 'react'
import { authService } from '../../services/auth-service'

import './AuthPage.scss'

export class AuthPage extends Component {
  state = {
    userToLog: 'hadar',
  }

  handleChange = ({ target }) => {
    const value = target.value
    this.setState({ userToLog: value })
  }

  onSubmit = async (ev) => {
    ev.preventDefault()
    const user = await authService.getUserByUsername(this.state.userToLog)
    console.log('user:', user)
  }

  render() {
    return (
      <div className='auth-page'>
        <h3>Please Login:</h3>
        <form onSubmit={this.onSubmit}>
          <select
            name=''
            id=''
            value={this.state.userToLog}
            onInput={this.handleChange}
          >
            <option value='hadar'>Hadar</option>
            <option value='dor'>Dor</option>
            <option value='noa'>Noa</option>
          </select>
          <button>Login</button>
        </form>
      </div>
    )
  }
}
