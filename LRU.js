// https://leetcode-cn.com/problems/lru-cache/
// https://github.com/sisterAn/JavaScript-Algorithms/issues/9

/**
 * @param {number} capacity
 * 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 */
let LRUCache = function (capacity) {
  this.max = capacity
  this.keys = []
  this.objMap = new Map()
};

LRUCache.prototype.refresh = function (key) {
  const keyIndex = this.keys.indexOf(key)
  this.keys.splice(keyIndex, 1)
  this.keys.push(key)
}
LRUCache.prototype.delete = function () {
  const removeKey = this.keys.splice(0, 1)[0]
  this.objMap.delete(removeKey)
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 若无则回 -1，若有则挪到最新put的位置
  const keyIndex = this.keys.indexOf(key)
  if (keyIndex !== -1) {
    this.refresh(key)
    return this.objMap.get(key)
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const keyIndex = this.keys.indexOf(key)
  if (keyIndex !== -1) {
    this.keys.splice(keyIndex, 1)
  }
  if (this.keys.length < this.max) {
    this.keys.push(key)
    this.objMap.set(key, value)
  } else {
    this.delete()
    this.keys.push(key)
    this.objMap.set(key, value)
  }
};



/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */