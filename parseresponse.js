
function parseresponse (){
    const json = require('./response.json');

    console.log(json.value.features[1])      

    for(var i = 0; i < json.value.features.length; i++){
        console.log(json.value.features[i].attributes["RouteName"]);
        console.log(json.value.features[i].attributes["Text"]);

    }
}

parseresponse();