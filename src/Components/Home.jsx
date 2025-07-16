import React from 'react'
import Loading from '../Help/Loading'
import Feed from './Feed/Feed'

const Home = () => {
  return (
    <>
      <section className="container mainContainer">
        {/* <Feed /> */}
        <Loading />
      </section>
    </>
  )
}

export default Home