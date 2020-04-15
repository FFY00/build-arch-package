const script = 'run.sh'
const script_path = require('path').resolve(__dirname, script)

require('child_process').spawn(script_path, [], { stdio: 'inherit' }).on('exit', code => process.exit(code))
