import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>

        <HeaderComponent />
        <ListEmployeeComponent />
        <FooterComponent />

      </BrowserRouter>
    </div>
  )
}

export default App
