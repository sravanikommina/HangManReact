function getButtonStyling(styleType){
    const primaryButtonStyling="bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900";
    const secondaryButtonStyling="bg-green-400 border-green-700  hover:bg-green-700 hover:border-green-900";
    const warningButtonStyling="bg-red-400 border-red-700  hover:bg-red-700 hover:border-red-900";
    const errorButtonStyling="bg-yellow-400 border-yellow-700  hover:bg-yellow-700 hover:border-yellow-900";

    if(styleType==="primary"){
        return primaryButtonStyling;
    }else if(styleType==="secondary"){
        return secondaryButtonStyling;
    }else if(styleType==="warning"){
        return warningButtonStyling;
    }else if(styleType==="error"){
        return errorButtonStyling;
    }else {
        return primaryButtonStyling
    }
}

export default getButtonStyling;