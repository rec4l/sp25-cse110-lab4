1. It will return the length of prices, as i iterates until you reach that number. (it returns 3)
2. discountedPrice keeps getting overwritten until it reaches the last item of prices, until which the discountedPrice is set to the last item times 1 - discount (300 * 0.5 = 150 so it prints 150)
3. Similarly to problem 2, it will return 150. No rounding needs to be done so it will return the same number.
4. It will return the array [50, 100, 150], as it pushes the discounted price of each item into an array.
5. It will return the error that i is not defined. Since we used the let keyword the variable i will be destroyed upon the completion of the loop, and thus can't be called.
6. It will return an error because discountedPrice is block scoped.
7. Similarly to problem 3, it will return 150.
8. Similarly to problem 4, it will return [50, 100, 150]
9. Similarly to problem 5, i is not defined outside of the loop, so it will return an error that i is not defined.
10. It will simply print the length of prices, which is 3.
11. It will return the array [50, 100, 150]. Though discountedPrice is a const, a new block scope is created with every for loop. Thus, it will make the array like the other iterations of the code.
12.
A. student.name
B. student['Grad Year']
C. student.greeting()
D. student['Favorite Teacher'].name
E. student.courseLoad[0]

13.
A. 32, because it converts the 2 to a string so that it may concatenate
B. 1, in this case it will convert the 3 into an int so that it can subtract 2.
C. 3, null will be converted to 0.
D. 3null, null will convert to a string
E. 4, true has the value of 1
F. 0, both false and null are value of 0
G. 3undefined,
H. NaN, undefined is NaN so like in part B, it will convert 3 into a int, 3 - NaN = NaN

14.
A. true, '2' becomes the number 2 and 2>1.
B. false, you compare character by character, and 2 is bigger than 1.
C. true, double equality doesn't compare type
D. false, triple equality does compare type
E. false, true is 1 so 1 != 2.
F. true, Boolean(2) is true so they are equal

15.
== will compare the values regardless of type, if the type is different it will try to convert one of them so that it may compare.

=== will compare both value and type, if they don't both match then it will return false.

17.
For each value in the array parameter, it will use callback on each value. Since doSomething on a number will return the number multiplied by 2, it will return the original array but with each entry multiplied by 2.

19. It prints 1 and 4 in quick succession, then a 3 right after 1 and 4 print, then a 2 after 1 second passed.