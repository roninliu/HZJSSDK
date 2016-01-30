#**HZJSSDK**
---
1. **生成随机数**

文件类名：Utils.js
示例：
```javascript
var random = new Utils();		
/*生成0到1之间的随机数*/
var r1 = random.getIntervalRandom();
console.log("0到1之间的随机数:",r1);
/*生成1到100的随机数*/
var r2 = random.getIntervalRandom(1,100);
console.log("1到100的随机数",r2);		
```

输出：
```javascript
0到1之间的随机数: 0.5765791456215084
1到100的随机数 36
```








