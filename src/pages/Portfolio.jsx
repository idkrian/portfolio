import "../styles/Portfolio.scss";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import CardInput from "../components/CardInput";
import StatsfyImage from "../assets/statsfy.png";
import PokedexImage from "../assets/pokedex.png";
import KlimaImage from "../assets/klima.png";
import BurguerImage from "../assets/burguer.png";
import CostsImage from "../assets/costs.png";
import BreezeImage from "../assets/breeze.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Portfolio() {
  return (
    <>
      <div className="portfolioContainer">
        <div className="portfolioTitle">
          <p className="title">Meu portfolio</p>
          <p className="subtitle">
            Eu amo o que eu faço. Tenho orgulho do que eu faço.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <Tabs size="lg" isFitted>
            <TabList>
              <Tab>Todos</Tab>
              <Tab>Front End</Tab>
              <Tab>Full Stack</Tab>
            </TabList>

            <TabPanels>
              <TabPanel className="tabPanelDiv">
                <CardInput
                  description="App que trás informações e dados sobre as músicas que você escuta no spotify."
                  title="Statsfy"
                  image={StatsfyImage}
                  website="https://statssfy.netlify.app/"
                  github="https://github.com/idkrian/statsfy"
                />
                <CardInput
                  description="Uma pokedéx... pois é todo mundo já fez kkkkk."
                  title="Pokedex"
                  image={PokedexImage}
                  website="https://pokedexriandev.netlify.app/"
                  github="https://github.com/idkrian/pokedex"
                />
                <CardInput
                  description="App para consultar a temperatura de uma dada cidade."
                  title="Breeze"
                  image={BreezeImage}
                  website="https://breezeapp.netlify.app/"
                  github="https://github.com/idkrian/breeze"
                />
                <CardInput
                  description="App para simular o sistema de uma hamburgueria."
                  title="Burguer"
                  image={BurguerImage}
                  github="https://github.com/idkrian/burguer"
                />
                <CardInput
                  description="App para ajudar no gerenciamento de projetos."
                  title="Costs"
                  image={CostsImage}
                  github="https://github.com/idkrian/costs"
                />
              </TabPanel>
              <TabPanel className="tabPanelDiv">
                <CardInput
                  description="App that brings information and data from your profile on Spotify."
                  title="Statsfy"
                  image={StatsfyImage}
                  website="https://statsfy.netlify.app/"
                  github="https://github.com/idkrian/statsfy"
                />
                <CardInput
                  description="App that simulates a pokédex, to search for information about pokemons."
                  title="Pokedex"
                  image={PokedexImage}
                  website="https://rianpokedex.netlify.app/"
                  github="https://github.com/idkrian/pokedex"
                />
                <CardInput
                  description="App that brings the current temperature of a given city."
                  title="Klima"
                  image={KlimaImage}
                  website="https://klima-app.netlify.app/"
                  github="https://github.com/idkrian/klima"
                />
              </TabPanel>
              <TabPanel className="tabPanelDiv">
                <CardInput
                  description="App created to simulate the system of a restaurant."
                  title="Burguer"
                  image={BurguerImage}
                  github="https://github.com/idkrian/burguer"
                />
                <CardInput
                  description="App created to help project management."
                  title="Costs"
                  image={CostsImage}
                  github="https://github.com/idkrian/costs"
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
}
