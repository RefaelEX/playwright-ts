import { writeFileSync, WriteFileOptions, PathOrFileDescriptor, existsSync, mkdirSync } from 'fs';

import * as path from 'path';

const FOLDER = `${path.resolve(__dirname, '../..')}/tmp_files`;

export function writeToFile(fileName: PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options?: WriteFileOptions): string {
  const fileFullPath = `${FOLDER}/${fileName}`;
  console.log(fileFullPath);

  if (!existsSync(FOLDER)) {
    mkdirSync(FOLDER);
  }

  writeFileSync(fileFullPath, data, options);
  return fileFullPath;
}
