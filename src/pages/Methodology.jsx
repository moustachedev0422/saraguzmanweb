import { useSearchParams } from 'react-router-dom'
import MomentZero from '../components/MomentZero.jsx'

export default function Methodology() {
  const [searchParams] = useSearchParams()

  return <MomentZero initialDeclaration={searchParams.get('declarar') ?? ''} />
}
