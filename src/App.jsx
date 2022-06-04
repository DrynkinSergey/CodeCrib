import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './AccordionItem';
import './Accordion.scss';
import './App.css';
import {data} from './assets/data'
import {useState} from "react";
import SortButtons from "./components/sortButtons/sortButtons";

function App() {
    const [filteredData, setFilteredData] = useState(data);
    const [searchValue, setSearchValue] = useState('');

    const handleClick = (type) => {
        type === 'All'? setFilteredData(data):
            setFilteredData(data.filter(i => i.category === type))
    }
    const onSearch = (e) => {
        setSearchValue(e)
        setFilteredData(data.filter(i => i.answer.includes(e) ))
    }


    return (
        <div className="App">
            <div className="content">
                <div className="app-description">
                    <h1>Q&A для собеседования</h1>
                </div>

                <div className='search-filter'>
                    <SortButtons handleClick={(type)=>handleClick(type)}/>

                    <input className='text-field__input'
                           value={searchValue}
                           placeholder='Введите ключевые слова: ...'
                           onChange={(e)=>onSearch(e.target.value)}/></div>

                <AccordionWrapper>
                    {filteredData.map((item, index) => (
                        <AccordionItem key={index} index={index} title={item.question} description={item.answer} img={item.img} />
                    ))}
                </AccordionWrapper>
            </div>
        </div>
    );
}

export default App;