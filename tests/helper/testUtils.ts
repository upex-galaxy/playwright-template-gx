import fs from 'fs';

export function getFiles(dirPath: string) {
	return fs.readdirSync(dirPath);
}
