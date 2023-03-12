
var fs = require('fs');
var path = require('path');
const pkg = require( './composer.json' )
var archiver = require('archiver');

/**
 * @param {String} sourceDir: /some/folder/to/compress
 * @param {String} outPath: /path/to/created.zip
 * @returns {Promise}
 */
function zipDirectory(sourceDir, outPath) {
  const archive = archiver('zip', { zlib: { level: 9 }});
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', err => reject(err))
      .pipe(stream)
    ;

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

const distPath = './dist';
const pluginPath = path.join(__dirname, 'plugin')
const zipPath = path.join(__dirname, `dist/${pkg.custom.textDomain}.zip`)

if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true });
}

fs.mkdirSync(distPath);

zipDirectory(pluginPath, zipPath )