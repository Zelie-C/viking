import * as readline from 'readline'

export class Readline {
rlInterface(question: string, callback: (response: string) => void) {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });

  rl.question(`${question}`, (response: string) => {
      callback(response);
      rl.close();
  });
}
}
