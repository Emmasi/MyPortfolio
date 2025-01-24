import Data from '../assets/data/data.json'
import List from '../assets/components/sheard/List'
import TextBox from '../assets/components/sheard/TextBox'
import ProfileImge from '../assets/img/ProfileImg.jpg'

export default function About() {
  return(
    <>
    <TextBox ProfileImge={ProfileImge} isBtn={true} />
    <List title="Erfarenheter" data={Data.experience} isId={false} />
    <List title="Kompetenser" data={Data.skills} isId={false} />
    <List title="Utbildning" data={Data.education} isId={false} />
    <List title="Referenser"data={Data.references} isId={false} />
    </>
  )
}