const HyperMD = require('hypermd')
require("codemirror/mode/htmlmixed/htmlmixed")
require("codemirror/mode/stex/stex")
require("codemirror/mode/yaml/yaml")
require("hypermd/powerpack/fold-math-with-katex")
require("hypermd/powerpack/hover-with-marked")

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
}

var main = document.getElementById('main')
var SCRATCHPAD_CONTENT = 'SCRATCHPAD_CONTENT'
main.focus()
main.value = localStorage[SCRATCHPAD_CONTENT] || ''
window.onclick = function() {
  cm.focus()
}

window.cm = HyperMD.fromTextArea(main, {
  hmdModeLoader: false,
})
cm.on('change', e => {
  localStorage[SCRATCHPAD_CONTENT] = cm.getValue()
})
