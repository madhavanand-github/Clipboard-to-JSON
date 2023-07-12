// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const customParser = require('@madhavanand/object-string-to-object')

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	vscode.window.showInformationMessage('Activated 😀 : Clipboard to JSON ');


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('clipboard-to-json.helloWorld', async () => {
		const clipboardText = await vscode.env.clipboard.readText();

		try {
			let finalString = customParser(clipboardText)
			console.log(finalString);
			finalString = JSON.stringify(finalString);
			console.log(finalString);
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
