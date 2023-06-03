import './App.css'
import Layout from './components/layout/layout'
import RecordsList from './components/records/recordsList'
import AlbumCard from './components/records/albumCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<RecordsList />} />
            <Route path="/album/:id" element={<AlbumCard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
