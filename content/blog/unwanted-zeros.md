---
external: false
title: "0️⃣ Unwanted zero"
description: "Prevent wrong rerendering zeros in the code"
date: 2024-02-11
---

![image](/images/blog/unwanted-zeros_cover_1200*627.png)

Have you ever experienced an extra unwanted zero, as number zero, during the loading for instance in your code?

Sometiems when you refresh the page, and data is loading. 


### ❓ Problem

Refresh the code below. Do you see anything that doesn't look right?

{% codepen url="https://codepen.io/safeamiiir/pen/qBgoaPZ" title="unwanted_zero - Pen in CSS by Amirreza" data_slug_hash="qBgoaPZ" data_user="safeamiiir" /%}

Hint: Any weird zero anywhere?

#### JSX and Babel transpiler

We need to use *Babel* with *React* to transpile the *JSX* code into simple React functions that can be understood by browsers, in order to do that let's have a look how it looks like in a very simple example!

we can use babel playgournd in [this link](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgfAUABAuwAOtHrgbzhAhgGwFcBTOAMjKQGcAXAJwHsA7AcykzyOIF9gB6Wo1ZQ43eIn6oY_cNCA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=true&targets=&version=7.23.4&externalPlugins=&assumptions=%7B%7D) and try to see how the code is written in JS and readable by the browser in the end

You can play with the code in the link above, but here's the final code:

```js
<div>
    <p>
        { value && <strong>{value}</strong>}
    </p>
</div>
```
⬇️
```js
import { jsx as _jsx } from "react/jsx-runtime";
/*#__PURE__*/ _jsx("div", {
  children: /*#__PURE__*/ _jsx("p", {
    children:
      value &&
      /*#__PURE__*/ _jsx("strong", {
        children: value
      })
  })
});
```
You see that there's the && operator in the code.

Can you come with a suggesstion to fix it?

Have a look at [this link](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgfAUABAuwAOtHrgbzhAhgGwFcBTOAfiQGcAXAJwHsA7AcykzyOIF9gB6GhiyhwAXHEaF8-LvER9UMPuGhA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=true&targets=&version=7.23.4&externalPlugins=&assumptions=%7B%7Dw) when I made some changes

```js
<div>
    <p>
        { value ? <strong>{value}</strong> : null}
    </p>
</div>
```
⬇️
```js
import { jsx as _jsx } from "react/jsx-runtime";
/*#__PURE__*/ _jsx("div", {
  children: /*#__PURE__*/ _jsx("p", {
    children: value
      ? /*#__PURE__*/ _jsx("strong", {
          children: value
        })
      : null
  })
});
```

#### Binary Logical Operators vs Conditional Operator
Let's have a look at how `&&` functions based on [tc39 refrence](https://tc39.es/ecma262/#sec-binary-logical-operators-runtime-semantics-evaluation):

```
Runtime Semantics: Evaluation
LogicalANDExpression : LogicalANDExpression && BitwiseORExpression
1. Let lref be ? Evaluation of LogicalANDExpression.
2. Let lval be ? GetValue(lref).
3. Let lbool be ToBoolean(lval).
4. If lbool is false, return lval.
5. Let rref be ? Evaluation of BitwiseORExpression.
6. Return ? GetValue(rref).
```
Let me help you read the logic above:
1. It first defines **lref** which in the example above is just the value (which is 0)
2. Then the value of that (which is again 0) is set to **lval**
3. Now it defines **ibool** as the boolean value of 0 (which is false)
4. It's easy to guess; it explicitly checks if it's false, and then this Evaluation returns **lval** (which we know is 0)
5. skipped
6. skipped
So as a result, we realised the return of the evaluation above is 0, and unexpectedly, you'll have a 0 rendered in your application view!

on the other hand, if we wanted to use conditional (ternary) operator, based on [tc39 refrence](https://tc39.es/ecma262/#sec-binary-logical-operators):
```
Runtime Semantics: Evaluation
ConditionalExpression : ShortCircuitExpression ? AssignmentExpression : AssignmentExpression
1. Let lref be ? Evaluation of ShortCircuitExpression.
2. Let lval be ToBoolean(? GetValue(lref)).
3. If lval is true, then
  a. Let trueRef be ? Evaluation of the first AssignmentExpression.
  b. Return ? GetValue(trueRef).
4. Else,
  a. Let falseRef be ? Evaluation of the second AssignmentExpression.
  b. Return ? GetValue(falseRef).
```

let's now try the logics above step by step with our example:
1. **lref** is defined as 0 in the example. (which is 0)
2. Then the value of that (which is again 0) is set to **lval**
3. we see that **lval** is not true, so step a, b are skipped
4. now in else,
- a) we set **falseRef** to null
- b) we return value of **falseRef** which is (null)

Then we know that `null` in the JSX file is not getting rendered at all.

### ✨ Conclusion
So we realised that just a very operation might create a bug in the codebase!
But does it nessacirily mean that we should go and read tc39 line by line?
i guess not! but what we should do is writting tests in the codebase to prevent this issues.
As this one was easy to be catched if we had test in place.

**And finally as a rule of thumb, it's safer to use Conditional operator.**