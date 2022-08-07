const { spawn } = require('child_process');

async function execute(
  command,
  args = [],
  {
    onStderr = (data) => { },
    onError = (data) => { },
  } = {
      onStderr: (data) => process.stderr.write(data),
      onError: (err) => { if (err) throw err },
    },
) {
  let buffer = "";
  let child = spawn(command, args, { shell: true });
  child.stdout.setEncoding('utf8');
  child.stdout.on('data', (data) => buffer += data);
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (data) => onStderr(data));
  child.on("error", (data) => onError(data));
  let finish;
  let end = new Promise((r) => finish = r);
  child.on('close', () => finish(true));
  await end
  return buffer.split("\n")
}

function run(
  command,
  args = [],
  { onStdout = (data) => { },
    onStderr = (data) => { },
    onError = (data) => { },
    onFinished = () => { },
  } = {
      onStdout: (data) => process.stdout.write(data),
      onStderr: (data) => process.stderr.write(data),
      onError: (err) => { if (err) throw err },
      onFinished: () => { },
    },
) {
  var child = spawn(command, args);
  child.stdout.setEncoding('utf8');
  child.stdout.on('data', (data) => onStdout(data));
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (data) => onStderr(data));
  child.on("error", (data) => onError(data));
  child.on('close', () => onFinished());
  return () => child.kill()
}

module.exports = { run, execute }
