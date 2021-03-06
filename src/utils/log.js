import colors from 'colors'
import path from 'path'

let quiet = false

function log(msg) {
    log.console(msg)
}

log.console = function(msg) {
    /* istanbul ignore next */
    process.env.NODE_ENV !== 'test' && !quiet && console.log(msg)
}

log.info = function(msg) {
    log.console('[info]: ' + msg)
}

log.error = function(msg) {
    log.console('[error]: ' + colors.red(msg))
}

log.build = function(msg) {
    let format = path.join('.', msg)
    log.info('Create ' + colors.green(format))
}

log.trigger = function(stat) {
    quiet = !!stat
}

export default log
