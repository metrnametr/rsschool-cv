// const parseJson = (json) => {
//     return JSON.parse(json);
// };

const createElement = ({ tag, attribute = {}, childNodes = [], text = '' }) => {
    const element = document.createElement(tag);
    Object.keys(attribute).forEach(attrKey => {
        if (attrKey === 'class') element.classList.add(attribute[attrKey]);
        element[attrKey] = attribute[attrKey];
    });
    if (text) {
        element.innerText = text;
    };
  if (childNodes.length) {
      childNodes.forEach(it => {
        const childElement = eachElements([it]);
        insertElemet(element)(childElement);
      })
    };
    return element;
};

const insertElemet = (element) => {
    return (childElement) => {
        element.appendChild(childElement);
    }
};

const eachElements = (elements) => {
    let myElement = '';
    elements.forEach(it => {
        myElement = createElement(it);
    });
  return myElement;
}

/* 
@param we have func render were input json struct
@output appendJson in root div
*/

export default (jsonStructure) => {
    const root = document.getElementById('root');
    // const structurePage = parseJson(jsonStructure);
    jsonStructure.forEach(it => {
      const element = createElement(it);
      root.appendChild(element);
    });
};





