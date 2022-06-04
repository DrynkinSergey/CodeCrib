import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './AccordionItem';
import './Accordion.scss';
import './App.css';
import {data} from './assets/data'

function App() {


    return (
        <div className="App">
            <div className="content">
                <div className="app-description">
                    <h1>Q&A для собеседования</h1>
                </div>

                <AccordionWrapper>
                    {data.map((item, index) => (
                        <AccordionItem key={index} index={index} title={item.title} description={item.description} />
                    ))}
                </AccordionWrapper>
            </div>
        </div>
    );
}

export default App;