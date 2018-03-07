function validateRequest(request) {
    let validRequestMethods = ['GET','POST','DELETE','CONNECT'];
    if(!request.hasOwnProperty('method')||(!validRequestMethods.includes(request.method))){
        throw new Error('Invalid request header: Invalid Method');
    }

    let uriRegex = /^[a-zA-Z0-9.]+(\.[a-zA-Z0-9]+)*$/g;
    if(!request.hasOwnProperty('uri')||(!request.uri.match(uriRegex) && request.uri!='*')){
        throw new Error('Invalid request header: Invalid URI');
    }

    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
    if(!request.hasOwnProperty('version')||(!validVersions.includes(request.version))){
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageRegex = /^[^<>\\&'"]*$/g;
    if(!request.hasOwnProperty('message')|| (!request.message.match(messageRegex))){
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}