
import Card from '../components/Card'
import list from '../constantes/list'
import { ContainerCard } from '../Styled'



const Home = () => {
  return (
    <div>
       <ContainerCard>
         {list.map((element) => <Card image={element.image} name={element.name} price={element.price}/>)} 
         </ContainerCard>
         </div>
  )
}

export default Home