import * as through2 from 'through2';
import { Transform } from 'stream';

/**
 * 
 * @param {File} file 
 * @param {string} enc 
 * @param {Function} cb 
 */
function litHtml(this: Transform, file: any, enc: string, callback: through2.TransformCallback) {
    const code = file.contents.toString(enc);

    file.contents = Buffer.from(`
        import { html } from 'lit-html';
        export default html\`
            ${code}
        \`;
    `);

    file.history.push(
        file.history[0] + ".js"
    );

    return callback(null, file);
}

export default () => through2.obj(litHtml);