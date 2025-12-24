const lruCache = require('../node_modules/lru-cache/dist/commonjs/index.js');

const LRUCache = lruCache.LRUCache || lruCache.default || lruCache;

module.exports = LRUCache;
module.exports.LRUCache = LRUCache;
module.exports.default = LRUCache;
