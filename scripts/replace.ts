import path from 'path';
import { replaceInFile } from 'replace-in-file';

const distDir = path.resolve(__dirname, '../dist');

const options = {
  files: path.join(distDir, '**', '*.js'),
  from: /__filename/g,
  to: (...args) => {
    const absoluteFilePath: string  = args.pop();
    const relativeFilePath: string = absoluteFilePath.replace(`${distDir}/`, '');
    return `"${relativeFilePath}"`;
  },
};

(async () => {
  try {
    const results = await replaceInFile(options);
    console.log('__filename replaced by actual file name');
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
})()
