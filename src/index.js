const util = require('util')
const exec = util.promisify(require('child_process').exec)

const codes = require('./codes')

const rotateHorizontal = (input, output, cwd) => {
  return exec(codes.flip(input, output), { cwd })
}

rotateHorizontal('rotate-before.jpg', 'rotate-after.jpg', __dirname)
.then(console.log)
