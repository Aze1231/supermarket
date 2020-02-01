module.export = {
    configureWebpack: {
        resolve: {
            alias: {
                'common': '@/common',
                'assets': 'src/assets',
                'components': '@/components',
                'router': '@/router',
                //'assets':'@/assets',

            }
        }
    }

}