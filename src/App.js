import React, {useState} from "react";
import './App.css';
import headerImg from './assets/screenshot-logo.png';
import Product from "./Product";
import Form from "./Form";



function App() {
    const [bananaCounter, setBananaCounter] = useState(0);
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    function resetCounters () {
        setStrawberryCounter(0);
        setBananaCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

  return (
    <>
        <header><img src={headerImg} alt={"logo"} /></header>
        <main id={"form"}>
            <section>
                <Product
                    fruit={"🍓 Aardbeien"}
                    counter={strawberryCounter}
                    updateCounter={newValue => setStrawberryCounter(newValue)}
                />
                <Product
                    fruit={"🍌 Bananen"}
                    counter={bananaCounter}
                    updateCounter={newValue => setBananaCounter(newValue)}
                />
                <Product
                    fruit={"🍏 Appels"}
                    counter={appleCounter}
                    updateCounter={newValue => setAppleCounter(newValue)}
                />
                <Product
                    fruit={"🥝 Kiwi's"}
                    counter={kiwiCounter}
                    updateCounter={newValue => setKiwiCounter(newValue)}
                />
            </section>

            <input type={"button"} id={"reset"} onClick={resetCounters} value={"reset all"}/>
        </main>
    </>
  );
}

export default App;
