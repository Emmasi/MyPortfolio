import Hero from '../assets/components/sheard/Hero'
import ProfileImge from '../assets/img/ProfileImg.jpg'
import Text from '../assets/components/sheard/TextBox'
import Repositories from '../assets/components/sheard/Repositories'
import List from '../assets/components/sheard/List'
import Data from '../assets/data/data.json'


export default function Home() {
  return(
    <>
    <Hero/>
    <Text ProfileImge={ProfileImge} isBtn={false} />
    <List title="Kompetenser" data={Data.skills} isId={false}/>
    <Repositories />
    <List title="Referenser" data={Data.references} isId />
    </>
  )
}