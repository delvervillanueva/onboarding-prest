export function getElementPromise(el, tagToSearch, skipShadow) {
    const isShadow = el.shadowRoot !== null && !skipShadow;
    const element = isShadow ? el.shadowRoot.querySelector(tagToSearch) : el.querySelector(tagToSearch);
    return Promise.resolve(element);
}
export function getListElementPromise(el, tagToSearch, skipShadow) {
    const isShadow = el.shadowRoot !== null && !skipShadow;
    const elements = isShadow ? el.shadowRoot.querySelectorAll(tagToSearch) : el.querySelectorAll(tagToSearch);
    return Promise.all(Array.from(elements));
}
// TODO: Deprecado: Carlo debes elimniar esta función y utlizar el Util setCssVariableValue
// Ingresa al padre por el SLOT y agrega estilo al 1° DIV del slot
export async function setCssVariableValueDeprecated(element, tagToSearch, cssVariable) {
    const elemento = await getElementPromise(element, tagToSearch, false);
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
export async function setCssVariableValue(element, tagToSearch, cssVariable) {
    const elemento = await getElementPromise(element, tagToSearch, false);
    if (!elemento) {
        return;
    }
    const el = elemento;
    const isArray = Array.isArray(cssVariable);
    isArray ? cssVariable.forEach(v => el.style.setProperty(v.key, v.value)) : el.style.setProperty(cssVariable.key, cssVariable.value);
}
export async function setClassToElement(element, tagToSearch, classNames) {
    const el = await getElementPromise(element, tagToSearch, false);
    el && el.classList.add(...classNames.trim().split(' '));
}
export function daysBetween(date1, date2) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(differenceInMilliseconds / millisecondsPerDay);
}
//# sourceMappingURL=utils.js.map
