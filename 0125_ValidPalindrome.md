1.  first come solution 

时间 72 ms 击败 69.67% 

内存 47.5 MB 击败 16.46%

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let head = 0, tail = s.length - 1;
    while (head < tail) {
        while (!/[a-zA-Z0-9]/.test(s[head])) {
            head++;
        }
        while (!/[a-zA-Z0-9]/.test(s[tail])) {
            tail--;
        }
        if (head >= tail) {
            break;
        }
        let c1 = s[head++].toLowerCase();
        let c2 = s[tail--].toLowerCase();
        if (c1 !== c2) {
            return false;
        }
    }
    return true;
};
```
