export default {
	appState: {
		ruleVisible: false
	},

	showRuleDlg() {
		this.appState.ruleVisible = true
	},
	hideRuleDlg() {
		this.appState.ruleVisible = false
	}
}