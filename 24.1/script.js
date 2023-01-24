
 
function createElement(tag,properties, styles ,parentElem ) {
    let elem = document.createElement(tag);
    for (let propertie of properties) {
        elem[propertie[0]] = propertie[1];
    }
    for (let style of styles){
        elem.style[style[0]] = style[1];
    }
    parentElem.append(elem);
}
createElement(tag = 'input',properties = [['type','text'],['placeholder', 'дай денги'],], styles = [['fontSize','18px'],['color','black'],] ,parentElem = document.querySelector('.abarigen'));


















// tadleNumder1 = 0 ,tadleNumder2 = 0, stylesCall = []