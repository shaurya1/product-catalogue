export function getClassString(classObject) {
    Object.keys(classObject).filter(classString => classObject[classString]).reduce((processedClassString, classString) => `${processedClassString} ${classString}`, '')
}