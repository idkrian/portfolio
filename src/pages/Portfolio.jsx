import '../styles/Portfolio.scss'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import CardInput from '../components/CardInput'
import StatsfyImage from '../assets/statsfy.png'
import PokedexImage from '../assets/pokedex.png'
import KlimaImage from '../assets/klima.png'
import BurguerImage from '../assets/burguer.png'
import CostsImage from '../assets/costs.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Portfolio() {
    return (
        <>
            <div className='portfolioContainer'>
                <div className='portfolioTitle'>
                    <p className='title'>My Portfolio</p>
                    <p className='subtitle'>I love what I do. I take great pride in what I do.</p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <Tabs size='lg' isFitted >
                        <TabList>
                            <Tab>All</Tab>
                            <Tab>Front End</Tab>
                            <Tab>Full Stack</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel className='tabPanelDiv'>
                                <CardInput
                                    description="App that brings information and data from your profile on Spotify."
                                    title="Statsfy"
                                    image={StatsfyImage}
                                    website='https://statsfy.netlify.app/'
                                    github='https://github.com/idkrian/statsfy'
                                />
                                <CardInput
                                    description="App that simulates a pokédex, to search for information about pokemons."
                                    title="Pokedex"
                                    image={PokedexImage}
                                    website='https://rianpokedex.netlify.app/'
                                    github='https://github.com/idkrian/pokedex'
                                />
                                <CardInput
                                    description="App that brings the current temperature of a given city."
                                    title="Klima"
                                    image={KlimaImage}
                                    website='https://klima-app.netlify.app/'
                                    github='https://github.com/idkrian/klima'
                                />
                                <CardInput
                                    description="App created to simulate the system of a restaurant."
                                    title="Burguer"
                                    image={BurguerImage}
                                    github='https://github.com/idkrian/burguer'
                                />
                                <CardInput
                                    description="App created to help project management."
                                    title="Costs"
                                    image={CostsImage}
                                    github='https://github.com/idkrian/costs'
                                />
                            </TabPanel>
                            <TabPanel className='tabPanelDiv'>
                                <CardInput
                                    description="App that brings information and data from your profile on Spotify."
                                    title="Statsfy"
                                    image={StatsfyImage}
                                    website='https://statsfy.netlify.app/'
                                    github='https://github.com/idkrian/statsfy'
                                />
                                <CardInput
                                    description="App that simulates a pokédex, to search for information about pokemons."
                                    title="Pokedex"
                                    image={PokedexImage}
                                    website='https://rianpokedex.netlify.app/'
                                    github='https://github.com/idkrian/pokedex'
                                />
                                <CardInput
                                    description="App that brings the current temperature of a given city."
                                    title="Klima"
                                    image={KlimaImage}
                                    website='https://klima-app.netlify.app/'
                                    github='https://github.com/idkrian/klima'
                                />
                            </TabPanel>
                            <TabPanel className='tabPanelDiv'>
                                <CardInput
                                    description="App created to simulate the system of a restaurant."
                                    title="Burguer"
                                    image={BurguerImage}
                                    github='https://github.com/idkrian/burguer'
                                />
                                <CardInput
                                    description="App created to help project management."
                                    title="Costs"
                                    image={CostsImage}
                                    github='https://github.com/idkrian/costs'
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </>
    )
}
