

// Components
import Hero from './Hero';
import Banner from './Banner';
import Card from './Card'
import Main from './Main';
import Header from 'pages/Header';
import Footer from 'pages/Footer';

// Ícones
import star from '../../svg/icon-chevron.svg';

// API
import api from 'services/api';


//Hooks
import { useState, useEffect } from 'react';

const Home = () => {

    // Váriaveis de estado
    const [main, setMain] = useState([]);
    const [mostseen, setMostseen] = useState([]);
    const [banner, setBanner] = useState([]);
    
    //Faça isso quando o componente for montado
    useEffect(() => {

        // Requisição para posts com nota start = 5
        api.get('/posts?star=5&_limit=2&_desc')
        .then((r) => {
            console.log(r.data);
            setMain(r.data);
        })
        
        //Requisição para banner
        api.get('/posts?_sort=data&_order=desc&_limit=1')
        .then((r) => {
            console.log(r.data);
            setBanner(r.data);
        })

        //Requisição para posts mais vistos
        api.get('/posts?_limit=3')
        .then((r) => {
            console.log(r.data);
            setMostseen(r.data);
        })
    }, [])



    return(
        <>

          <Header />

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
                    
                    {
                        main.map((item) => {
                            return <Main key={item.id} content={item}/>
                        })
                    }
                    
                </div>
            </div>
        </section> 



        <div className="bg-section">
            <section className="container">
                <h3 className="ml-2 mb-3">Mais vistos</h3>
                <div className="row">
                    
                    {
                        mostseen.map((item) => {
                            return <Card key={item.id} content={item} />
                        })
                    }


                </div>
            </section>
        </div>

        {
            banner.map((item) => {
                return <Banner key={item.id} content={item} />
            })
        }


        <Footer />

        </>
    )
}

export default Home;