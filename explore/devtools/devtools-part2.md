1. The bug was that it treated the summands as strings, when we should be adding numbers. For example, adding 32 and 1 will return 321.
2. I would fix it by converting strings to numbers, noting that if it is unable to convert to a number that it will return NaN.

Solution provided in expand/screenshots/fix.png