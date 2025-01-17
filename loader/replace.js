const util = require('loader-utils');

module.exports = function (content) {
  console.log('REPLACE:', content)
  console.log('The request path', util.urlToRequest(this.resourcePath));
  return content.replace(/chenzexin/g, 'chenzexin-----hahahah')
}