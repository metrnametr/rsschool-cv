const parseJson = (json) => {
    return JSON.parse(json);
};

const createElement = ({ tag, attribute = {}, childNodes = [], text = '' }) => {
    const element = document.createElement(tag);
    Object.keys(attribute).forEach(attrKey => {
        if (attrKey === 'class') element.classList.add(attribute[attrKey]);
        element.attrKey = attribute[attrKey];
    });
    if (text) {
        element.innerText = text;
    };
  if (childNodes.length) {
        const childElement = eachElements(childNodes);
        insertElemet(element)(childElement);
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

const render = (jsonStructure) => {
    const root = document.getElementById('root');
    const structurePage = parseJson(jsonStructure);
    structurePage.forEach(it => {
      const element = createElement(it);
      root.appendChild(element);
    });
};

const myPage = [
    {
        "tag": "div",
        "attribute": {
            "class": "container",
        },
        "childNodes": [
            {
                "tag": "div",
                "attribute": {
                    "class": "container",
                },
                "childNodes": [
                    
                ],
                "text": "ццйц"
            }
        ],
        "text": "werwййerwe"
    },
  {
        "tag": "div",
        "attribute": {
            "class": "container",
        },
        "childNodes": [
            
        ],
        "text": "werw11erwe"
    }
];



