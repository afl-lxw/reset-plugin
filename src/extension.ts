import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const importDetection = async () => {
    const files = await vscode.workspace.findFiles('**/main.{js,ts}');
    console.log(files, 'files find')
    files.forEach(async (file) => {
      const document = await vscode.workspace.openTextDocument(file);
      const text = document.getText();

      // 在文件的文本内容上执行引用检测逻辑
      // 您可以使用正则表达式或其他技术来识别 UI 库的引用

      // 示例：检测 Vue 和 React 的引用语句
      const isVueImport = text.includes("import Vue");
      const isReactImport = text.includes("import React");

      if (isVueImport) {
        console.log("检测到 Vue UI 库引用");
        const isElImport = text.includes("import element-ui");
        const isAntVImport = text.includes("import ant-design-vue");


      }

      if (isReactImport) {
        console.log("检测到 React UI 库引用");
      }
    });
  };

  const resetPlugin = async () => {
    console.log("执行 reset-plugin 命令");
    vscode.window.showInformationMessage('执行 reset-plugin 命令!');
  }

  let disposable = vscode.commands.registerCommand('reset-plugin.helloWorld', () => {
    console.log("执行 reset-plugin 命令");
    vscode.window.showInformationMessage('执行 reset-plugin 命令!');
    vscode.window.showInformationMessage('Hello World from reset-plugin!');
  });
  context.subscriptions.push(disposable);


  context.subscriptions.push(vscode.commands.registerCommand('reset-plugin.resetPlugin', resetPlugin));
}

export function deactivate() { }
