# Set数据结构
自己实现的简单数据类型，主要是为了避免在对数组操作过程中的去重等繁琐的操作。
内部数据是用一个对象来进行存储的，构造对象键值的时候，会采用`JSON.stringify`方法对其转换。从而保证数据的单一性。

# 方法说明

## 构造函数

构造函数提供了将数组转换成Set的方法,不带参数将返回空的集合。
```
var set1 = new Set();
var set2 = new Set([1,2,3]);
```

## 增删改查

1. add(value) 将一个值存入集合，会将传入的这个value进行`JSON.stringify`后作为集合内部数据的键进行存储。
2. delete(value) 删除指定值
3. has(value) 判断是否有这个值
4. clear() 清空集合
5. addMany([...value]) 批量添加存入集合，会遍历这个数组，执行add方法
6. deleteMany([...value]) 批量删除
7. filter(fn) 传入一个回调函数，过滤指定条件的数据集合

```
var set = new Set([1,2,3,4,5]);

set.filter(function(value) {
	return value > 3;
}); // 返回由[4,5]组成的集合

```

8.size() 返回集合的长度
9.values() 返回一个由value值组成的数组结构

