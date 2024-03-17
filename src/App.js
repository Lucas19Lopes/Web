// import HomePage from "./components/01homepage/HomePage";
// import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
// import Loja from "./components/03props/Loja";
//import MeusDados from "./components/atividade00/01MeusDados";
//import MeusDadosP from "./components/atividade00/02MeusDados";
//import Temperatura from "./components/atividade00/03Temperatura";
//import SistemaSolar from "./components/04Children/SistemaSolar";
//import Planeta from "./components/04Children/Planeta"
//import Galaxia from "./components/04Children/Galaxia";
import Pai from "./components/atividade01/01Pai";
import MeuPC from "./components/atividade01/02MeuPC";
function App() {
  return (
   <div>
    <div>
      {/*<Galaxia nome="Via Láctea" />*/}

      <Pai />
      <hr />
      <MeuPC />

    </div>
  )
}





{/*   <SistemaSolar>
     <Planeta 
      nome="Mercúrio"
      tipo="rochoso"
      pos="1"
      imagem="https://www.nasa.gov/wp-content/uploads/2023/03/729223main_728322main_messenger_orbit_image20130218_2_full_full_full.jpg"

      />
      <hr />
      <Planeta 
      nome="Vênus"
      tipo="rochoso"
      pos="2"
      imagem="https://science.nasa.gov/wp-content/uploads/2016/05/venus2-jpg.webp"

      />
      <hr />
      <Planeta
      nome="Terra"
      tipo="rochoso"
      pos="3"
      imagem="https://midia.gruposinos.com.br/_midias/jpg/2015/09/20/nasa_blue_marble-1066991.jpg"    
      />
      <hr />
      <Planeta 
      nome="Marte"
      tipo="rochoso"
      pos="4"
      imagem="https://mars.nasa.gov/system/site_config_values/meta_share_images/1_mars-nasa-gov.jpg"

      />
         <hr />
     <Planeta 
      nome="Júpiter"
      tipo="gasoso"
      pos="5"
      imagem="https://science.nasa.gov/wp-content/uploads/2023/09/maxresdefault_copy.jpg"
  /> */}

   </div>
  )
}


export default App