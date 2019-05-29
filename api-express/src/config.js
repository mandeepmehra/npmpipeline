
    //'mongodb://database/mean-docker
    const username =process.env.MONGODB_USERNAME  || "";
    const password = process.env.MONGODB_PASSWORD  || "";
    const host = process.env.MONGODB_HOST  || "";
    const databasename = process.env.MONGODB_DATABASE || 'meanDB';
    const port = process.env.MONGODB_PORT || 27017;
    var  url='';
    if ((username !== '') && (password !== '' ))
    {
        url = 'mongodb://database/meanDB'
    }
    else
    {
        url = "mongodb://" + username+ ":" + password+ "@" + host + "/" + databasename;
    }
    export const database = {
    name: "MongoDB Service",
    url: url
};
