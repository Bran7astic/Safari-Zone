import SearchCard from './components/SearchCard'
import './App.css'
import Header from './components/Header'
import BanList from './components/BanList'
import { useState } from 'react'

function App() {

  const [banlist, setBanlist] = useState([]);

  const addBan = () => {
    setBanlist((prev) => [...prev, "Hello"])
  }

  console.log(banlist)

  return (
    <>
      <Header/>
      <BanList list={banlist}/>
      <SearchCard addBan={addBan}/>

    </>
  )
}

export default App
