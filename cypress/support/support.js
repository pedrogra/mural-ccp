const componentURL = {
    buttonEnabled: 'http://localhost:6006/iframe.html?id=components-button--basic&args=disabled:false;text:buttonEnabled&viewMode=story',
    buttonDisabled: 'http://localhost:6006/iframe.html?id=components-button--basic&args=disabled:true;text:buttonDisabled&viewMode=story',
    
    resetEnabled: 'http://localhost:6006/iframe.html?id=components-button--basic&args=disabled:false;type:reset;text:resetEnabled&viewMode=story',
    resetDisabled: 'http://localhost:6006/iframe.html?id=components-button--basic&args=disabled:true;type:reset;text:resetDisabled&viewMode=story',
    
    submitEnabled: 'http://localhost:6006/iframe.html?id=components-button--basic&args=disabled:false;type:submit;text:submitEnabled&viewMode=story',
    submitDisabled: 'http://localhost:6006/iframe.html?id=components-button--basic&args=disabled:true;type:submit;text:submitDisabled&viewMode=story',

}

const componentID = {
    buttonEnabled: 'mrl-button',
    buttonDisabled: 'mrl-button',
    resetEnabled: 'mrl-button',
    resetDisabled: 'mrl-button',
    submitEnabled: 'mrl-button',
    submitDisabled: 'mrl-button',
}

export function getComponentURL(_component){
    return componentURL[_component]
}

export function getComponentID(_component){
    return componentID[_component]
}