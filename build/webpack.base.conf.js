var path = require('path')
var config ={
    entry:{
        main:'./src/main'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        publicPath:'/dist/'

    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:['babel-loader'],
                exclude:/node_modules/
            }
        ]
    }
    
}

module.exports=  config