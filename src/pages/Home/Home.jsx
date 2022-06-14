import React from 'react'
import HomeHeroSection from './components/HomeHeroSection'
import HomeMainSection from './components/HomeMainSection'
import Table from './components/Table'
import HomeNavBar from '../../components/NavBar/HomeNavBar'
import BarChartExample from '../../components/Charts/BarChartExample'
import LineChartExample from '../../components/Charts/LineChartExample'

const Home = () => {
  return (
    <>
      <HomeNavBar />
      <HomeHeroSection text='Buenas tardes, Chema 👋🏼' />
      <HomeMainSection />
      <div className='flex flex-col tablet:flex-row justify-center'>
        <LineChartExample />
        <BarChartExample />
        <LineChartExample />
      </div>
      <Table />
    </>
  )
}

export default Home
