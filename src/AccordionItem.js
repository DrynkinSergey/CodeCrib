import React, { useContext } from 'react';
import {AccordionContext} from './AccordionWrapper';
import img from './assets/img/img.png'
const AccordionItem = ({description,index,title,img}) => {

    let indexPlus;

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    return (
        <div className="accordion-item">
            <h3 className="accordion-title">
                <button
                    onClick={(e) => eventHandler(e, index)}
                    className={ active === index ? 'active' : 'inactive'}
                    aria-expanded={ active === index ? 'true' : 'false' }
                    aria-controls={ 'sect-' + indexCount(index) }
                >
                    <span className="title-wrapper">{title}
                    </span>
                    <span className="icon-wrapper">
                        <span className={ active === index ? 'minus' : 'plus'}></span>
                    </span>
                </button>
            </h3>
            <div className="accordion-panel">
                <div id={ 'sect-' + indexCount(index) } className={ active === index  ? 'panel-open' : 'panel-close' }>
                    {description}


                </div>
            </div>
        </div>
    )
}


export default AccordionItem;