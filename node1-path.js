const path= require('path');

const myPath='C:/Programming-Language-All-File/NodeJS/node1-path.js';

// const pathName=path.basename(myPath);
// const dirname=path.dirname(myPath);
// const extname=path.extname(myPath);
// const parse=path.parse(myPath);
// const toNamespacedPath=path.toNamespacedPath(myPath);
// const Absolute=path.isAbsolute(myPath);
const resolve=path.resolve(myPath);

// console.log('pathName',pathName);
// console.log('toNamespacedPath:',toNamespacedPath);
// console.log('dirname',dirname);
// console.log('extname',extname);
// console.log('parse:',[parse]);
// console.log('Absolute',Absolute);
 console.log('resolve:',[resolve]);

 
// console.log('path.posix',[path.posix]);
// console.log('path.win32',[path.win32]);
