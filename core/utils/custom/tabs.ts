import {getTransformedText} from "../string";

export const getTabLabel = (label: string = '/') => {
    let labels = label.split('/');
    if ( labels.length === 3 ){
        if(labels[1].includes('-'))
            return (getTransformedText(labels[1].split('-').join(' ')))
        else
            return getTransformedText(labels[1]);
    }
    else if (labels.length === 4)
        return (getTransformedText(labels[2].split('-').join(' ')))
    else if (labels.length === 5)
        return (getTransformedText(labels[2].split('-').join(' ')) +'-'+ labels[3])
    return (getTransformedText(label));
}