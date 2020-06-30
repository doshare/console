export default class Console {
    constructor() {
        window.error=function(){
            window.console.error.apply(window.console,arguments)
        }

        window.info=function(){
            window.console.info.apply(window.console,arguments)
        }

        window.log=function(){
            window.console.log.apply(window.console,arguments)
        }

        window.warn=function(){
            window.console.warn.apply(window.console,arguments)
        }
    }


}