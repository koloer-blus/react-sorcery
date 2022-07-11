const { marked } = require('marked');

const mark = marked.setOptions()

const getLexerText = (mdStr = '') => mark.Lexer(mdStr)

const transformFilePathToJSON = function() {

}

const transformRowTextToMD = function(str) {
    return getLexerText(str);
}