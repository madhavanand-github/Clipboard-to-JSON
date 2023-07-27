const vscode = require('vscode');
const customParser = require('@madhavanand/object-string-to-object')

function activate(context) {

	vscode.window.showInformationMessage('Activated 😀 : Clipboard to JSON ');

	let disposable = vscode.commands.registerCommand('clipboard-to-json.clipson', async () => {
		const clipboardText = await vscode.env.clipboard.readText();

		try {
			let finalString = customParser(clipboardText)
			finalString = JSON.stringify(finalString);
			await vscode.env.clipboard.writeText(finalString);
			vscode.window.showInformationMessage('Done 🚀 : Check Clipboard');
		} catch (error) {
			vscode.window.showErrorMessage('Oops 😥 : Something Went Wrong');
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {
	vscode.window.showInformationMessage('Deactivated ☹️ : Clipboard to JSON ');
}

module.exports = {
	activate,
	deactivate
}
