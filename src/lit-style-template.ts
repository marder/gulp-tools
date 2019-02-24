import * as through2 from 'through2';
import { Transform } from 'stream';

export type LitStyleTemplateOptions = {
    extension: '.js' | '.ts'
}

export default (options?: LitStyleTemplateOptions) => through2.obj((file: any, enc: string, callback: through2.TransformCallback) => {

    const newExtension = options && options.extension ? options.extension : '.js';
    const code = file.contents.toString(enc);

    file.contents = Buffer.from(`
        import { css } from 'lit-element';
        export default css\`
            <style>
                ${code}
            </style>
        \`;
    `);

    file.history.push(
        file.history[0] + newExtension
    );

    return callback(null, file);

});