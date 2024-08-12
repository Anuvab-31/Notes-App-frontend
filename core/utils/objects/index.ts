
export const convertKeysToCamelCase = (obj: any) => {
    const camelCaseObj: any = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const camelCaseKey = key.replace(/_([a-z])/g, function (match, letter) {
                return letter.toUpperCase();
            });
            camelCaseObj[camelCaseKey] = obj[key];
        }
    }
    return { ...camelCaseObj, heading: camelCaseObj.name }
}