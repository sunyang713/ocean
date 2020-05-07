let ejs = require('ejs');

import ejs from 'ejs'

    html = ejs.render('<%= people.join(", "); %>', {people: people});


export default function({ publicPath, stylesheets, content, inlinedScripts, sourcedScripts }) {
  return ejs.renderFile('./doc.ejs', data, {
    // // Compiled functions are cached, requires filename
    // cache: true, 
    // // Used by cache to key caches, and for includes
    // filename: true, 
    // // Function execution context
    // context: true, 
    // // When false no debug instrumentation is compiled
    // compileDebug: true, 
    // // Returns standalone compiled function
    // client: true, 
    // // Character to use with angle brackets for open/close
    // delimiter: true, 
    // // Output generated function body
    // debug: true, 
    // // Whether or not to use with() {} constructs. If false then the locals will be stored in the locals object.
    // _with: true, 
    // // Name to use for the object storing local variables when not using with Defaults to locals
    // localsName: true, 
    // // Remove all safe-to-remove whitespace, including leading and trailing whitespace. It also enables a safer version of -%> line slurping for all scriptlet tags (it does not strip new lines of tags in the middle of a line).
    // rmWhitespace: true, 
    // // The escaping function used with <%= construct. It is used in rendering and is .toString()ed in the generation of client functions. (By default escapes XML).
    // escape: true, 
    // // Set to a string (e.g., 'echo' or 'print') for a function to print output inside scriptlet tags.
    // outputFunctionName: true, 
    // // When true, EJS will use an async function for rendering. (Depends on async/await support in the JS runtime.
    // async: true, 
  }, (err, htmlStr) => console.error(err))
}

