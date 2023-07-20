

// Components
import Hero from './Hero';
import Banner from './Banner';
import Card from './Card'
import Main from './Main';


// Ícones
import star from '../../svg/icon-chevron.svg';

const Home = () => {
    return(
        <>
          <Hero/> 
          <section className="container">
            <div className="row">
                <div className="grid-5 pt-5 pb-3 ">
                    <img src={star} className="icon-l" alt=""/>
                    <h2>Os melhores e mais bem votados posts do mês</h2>
                    
                    
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ornare urna pharetra ut ac, pellentesque. 
                    </p>
                </div>
                <div className="grid-7">
                    <Main/>
                    <Main />
                </div>
            </div>
        </section> 



        <div className="bg-section">
            <section className="container">
                <h3 className="ml-2 mb-3">Mais vistos</h3>
                <div className="row">
                    <Card/>
                    <Card/>
                    <Card/>


                </div>
            </section>
        </div>
        </>
    )
}

export default Home;