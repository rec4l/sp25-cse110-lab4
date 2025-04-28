1. It will return the length of prices, as i iterates until you reach that number. (it returns 3)
2. discountedPrice keeps getting overwritten until it reaches the last item of prices, until which the discountedPrice is set to the last item times 1 - discount (300 * 0.5 = 150 so it prints 150)
3. Similarly to problem 9, it will return 150. No rounding needs to be done so it will return the same number.
4. It will return the array [50, 100, 150], as it pushes the discounted price of each item into an array.
5. It will return the error that i is not defined. Since we used the let keyword the variable i will be destroyed upon the completion of the loop, and thus can't be called.
6. Similarly to problem 2, it will return 150.
7. Similarly to problem 3, it will return 150.
8. Similarly to problem 4, it will return [50, 100, 150]
9. Similarly to problem 5, i is not defined outside of the loop, so it will return an error that i is not defined.
10. It will simply print the length of prices, which is 3.
11. It will return the array [50, 100, 150]. Though discountedPrice is a const, a new block scope is created with every for loop. Thus, it will make the array like the other iterations of the code.
12.
A. student.name
B. student['Grad Year']