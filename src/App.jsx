import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './AccordionItem';
import './Accordion.scss';
import './App.css';

function App() {

    const data = [
       {
            "title": "Item 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
        },
        {
            "title": "Item 3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
        },
    ];

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