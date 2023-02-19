let path: string = process.env.MY_SCRIPT_PATH ?? '';
path.replace(/\\\\/g, '/');