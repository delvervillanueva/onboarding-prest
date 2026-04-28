function getElementPromise(el, tagToSearch, skipShadow) {
    const isShadow = el.shadowRoot !== null && true;
    const element = isShadow ? el.shadowRoot.querySelector(tagToSearch) : el.querySelector(tagToSearch);
    return Promise.resolve(element);
}
// TODO: Deprecado: Carlo debes elimniar esta función y utlizar el Util setCssVariableValue
// Ingresa al padre por el SLOT y agrega estilo al 1° DIV del slot
async function setCssVariableValueDeprecated(element, tagToSearch, cssVariable) {
    const elemento = await getElementPromise(element, tagToSearch);
    element.style.setProperty(cssVariable.key, cssVariable.value);
    if (elemento) {
        const elementoExiste = element.querySelector('div');
        if (Array.isArray(cssVariable)) {
            cssVariable.forEach(x => {
                elementoExiste.style.setProperty(x.key, x.value);
            });
        }
        else {
            elementoExiste.style.setProperty(cssVariable.key, cssVariable.value);
        }
    }
}
function daysBetween(date1, date2) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(differenceInMilliseconds / millisecondsPerDay);
}

export { daysBetween as d, setCssVariableValueDeprecated as s };
//# sourceMappingURL=p-BAe8ir6j.js.map

//# sourceMappingURL=p-BAe8ir6j.js.map