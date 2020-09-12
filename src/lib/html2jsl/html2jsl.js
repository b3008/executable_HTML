
export function nodeToJSL(node) {

    if (node.nodeType === document.TEXT_NODE) {
        let result = node.textContent.trim();
        if (result === '') {
            return undefined;
        } else { return `"${result}"`; }

    } else {

        let result = {};
        let attrNames = node.getAttributeNames();
        let attrObj = {};
        for (let i = 0; i < attrNames.length; i++) {
            if (node.getAttribute(attrNames[i]) !== 'undefined') {
                attrObj[attrNames[i]] = node.getAttribute(attrNames[i]);
            }
        }

        let argsStrings = [];
        for (let i = 0; i < node.childNodes.length; i++) {
            let addition = nodeToJSL(node.childNodes[i]);
            if (addition) {
                argsStrings.push(nodeToJSL(node.childNodes[i]));

            }
        }

        let tagName = node.tagName;
        return formatJSLResult(tagName, attrObj, argsStrings);

    }

}



function tab(s) {
    let result = s.replace(/\n/g, '\n\t');
    if (result[0] !== '\n') { result = `\t${result}`; }
    return result;
}


function getAttrsAsString(attrObj) {
    return JSON.stringify(attrObj);
}

function getArgsString(argsStrings) {
    let result = '';
    for (let i = 0; i < argsStrings.length; i++) {
        result += `${argsStrings[i]}`;
        if (i !== argsStrings.length - 1) {result += ',\n';}
    }
    return result;
}

function formatJSLResult(tagName, attrObj, argsStrings) {
    let attrs = getAttrsAsString(attrObj);
    let args = getArgsString(argsStrings);
    let isArgsMultiline = /\n/.test(args);

    //decide if newline for attributes:
    let attrParam;
    let newLineForAttrs = false;
    //do they exist
    let attrsExist = attrs !== '{}';
    if (attrsExist) {
        //do they contain newlines
        if (attrs.indexOf('\n') != -1) {
            newLineForAttrs = true;
        } else {
            //are they long
            if (attrs.length > 50) {
                newLineForAttrs = true;
            }
        }
        if (newLineForAttrs) {
            attrParam = `\n${tab(attrs)}${argsStrings.length ? ',' : ''}`;
        }
        else {
            attrParam = `${attrs}${argsStrings.length ? ',' : ''}`;
        }

    } else {
        //attributes don't exist;
        attrParam = '';
    }
    // let argsParam;
    // let newLineForArgs = false;
    let result = `${tagName}( ${attrParam}${isArgsMultiline ? `\n${tab(args)}\n` : `${attrsExist ? ' ' : ''}${args}`} )`;
    return result;
}
