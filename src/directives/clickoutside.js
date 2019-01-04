let nodeList = []
document.addEventListener(
	'mouseup',
	e => {
		nodeList.forEach(node => {
			node._handler(e)
		})
	},
	false
)
export default {
	bind(el, binding) {
		el._handler = e => {
			if (!el.contains(e.target) && binding.expression) {
				binding.value(e)
			}
		}
		nodeList.push(el)
	},
	update(el, binding) {
		el._handler = e => {
			if (!el.contains(e.target) && binding.expression) {
				binding.value(e)
			}
		}
		if (nodeList.indexOf(el) === -1) {
			nodeList.push(el)
		}
	},
	unbind() {
		nodeList = []
	}
}
