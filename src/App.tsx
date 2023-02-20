import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";

function App() {

    return (
        <div className="App">
            <Header/>
            <main>
                <Home/>
            </main>
        <Footer/>
        </div>
    )
}

export default App
