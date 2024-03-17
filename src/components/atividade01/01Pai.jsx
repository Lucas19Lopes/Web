import Filho from './01Filho'

const Pai = () => {
  return (
    <div>
      <h2>Esse é o IMC do FIlho </h2>
      <Filho altura={1.8} peso={100} />
    </div>
  )
}

export default Pai
