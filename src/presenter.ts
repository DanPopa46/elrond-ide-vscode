import * as vscode from 'vscode';

export function getActiveFilePath() {
    let activeTextEditor = vscode.window.activeTextEditor;

    if (!activeTextEditor) {
        throw new Error("Open a file!");
    }

    let path = activeTextEditor.document.uri.fsPath;
    return path;
}

export async function askContractName() {
    const result = await vscode.window.showInputBox({
        prompt: "Enter a name for your contract",
        value: "",
        ignoreFocusOut: true,
        placeHolder: "For example: mycontract",
        validateInput: text => {
            return text.length > 0 ? null : "Should not be empty.";
        }
    });

    return result;
}

export async function askModifySettings(): Promise<boolean> {
    let answer = askYesNo(`Allow Elrond IDE to modify this workspace's "settings.json"?\nThe changes include setting environment variables for the terminal integrated in Visual Studio Code.`);
    return answer;
}

export async function askInstallErdpy(): Promise<boolean> {
    let answer = askYesNo(`erdpy (part of Elrond SDK) isn't available in your environment. Do you agree to install it?`);
    return answer;
}

export async function askYesNo(question: string): Promise<boolean> {
    let answerYes = "Yes";
    let answerNo = "No";
    let answer = await vscode.window.showInformationMessage(question, { modal: true }, answerYes, answerNo);
    return answer === answerYes;
}
