import SearchCard from './components/SearchCard'
import './App.css'
import Header from './components/Header'
import BanList from './components/BanList'
import { useState } from 'react'

function App() {

  const [banlist, setBanlist] = useState([]);

  const addBan = (type) => {
    if (!banlist.includes(type)) {
      setBanlist((prev) => [...prev, type])
    }
  }

  const removeBan = (typeToRemove) => {
    setBanlist(prev => prev.filter(type => type !== typeToRemove))
  }

  console.log(banlist)

  return (
    <>
      <Header/>
      <BanList list={banlist} removeBan={removeBan}/>
      <SearchCard addBan={addBan}/>
    </>
  )
}

export default App
