import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ThemeProvider } from './Theme'

const root = document.getElementById('root') || document.createElement('div')

if (!document.getElementById('root')) {
  root.id = 'root'
  document.body.appendChild(root)
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  root
)

reportWebVitals()
