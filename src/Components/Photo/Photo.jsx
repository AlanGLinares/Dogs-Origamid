import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTOSS_GET } from '../../api'
import Error from '../../Help/Error'
import Loading from '../../Help/Loading'
import UseFetch from '../../Hooks/UseFetch'
import PhotoContent from './PhotoContent'

const Photo = () => {

  const {id} = useParams()
  const {data , loading , request , erro} = UseFetch()

  React.useEffect(  () => {
    const {url , options} = PHOTOSS_GET(id)
    request(url , options)
  }, [request , id])

  if(erro) return <Error erro={erro}/>
  if (loading) return <Loading />
  if (data) {
    return (
      <section className="container mainContainer" >
        <PhotoContent data={data} single={true} />
      </section>
    )
  } else {
    return null
  }
}

export default Photo