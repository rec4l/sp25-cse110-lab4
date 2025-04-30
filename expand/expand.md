1. Some JavaScript developers believe that most of the issues with JavaScript stem from its asynchronous nature, its loose typing, and the web platform it runs on. For each of the three reasons listed, explain in your own words why a developer might believe that it is a pain point.

- Asynchronous nature: I think that most developers are simply used to code running in a specific order, but JS may run multiple operations at once, allowing for unexpected code execution.
- Loose typing: I think it's obvious to me why developers may find it a pain point, sometimes we expect/prefer errors when different types clash rather than the seemingly difficult to understand coaxing of types that instead occurs. It has to do with how well a developer understands the language, and most choose to not understand the nuances of JS than have to deal with the type conflicts.
- Web platform: It's difficult to work with a web platform, since it's one of the places that is expected to work on low end through high end devices, without fail. Making your website or app accessibility friendly is very difficult.

2. Related to the first question, why do you believe that the developer(s) who created JavaScript made it loosely typed? Why do you think they added asynchronous features?

I think in simple terms it would prevent web applications from crashing in unexpected edge cases. In places where information on a web application is highly important, this is essential.

3. What are the key differences between a compiled language and an interpreted one? Which one is JavaScript? What are the benefits & drawbacks of JavaScript being made that way?

- Compiled language: Code in a compiled language gets converted to machine code by a compiler, which will likely run faster but be slower to compile.
- Interpreted language: Code is executed line by line by a interpreter, which will allow for faster testing and flexibility.

JS is interpreted.
Benefits:
- No need for recompilation to make small changes
- Debugging is much easier line by line

Drawbacks:
- Slower performance compared to a compiled language because of the overhead of interpreter
- Has the requirement of an interpreter

4. The professor believes that, though sometimes misused, JavaScript frameworks are incredibly powerful tools that can help teams work more efficiently and effectively. Given that, why do you believe he is focusing more on vanilla JavaScript for this course? What are the benefits of mastering vanilla JS first? What are the drawbacks of not learning a framework?

Often people use frameworks to cheat their way through a problem without fully understanding why it is they need that specific solution. When you master JS (well, maybe not master) but gain an effective understanding of its limitations, you know what problems can be solved using frameworks.

The drawbacks are that you may limit yourself and your capability when you don't use a specific framework, or miss out on using an industry tool.

5. Explain, in your own words, how you think this lab relates to your project. How might you be able to use this information in your own project?

I think that this lab is helpful to my project as it taught me about testing, pull requests and debugging. I will likely use the DevTools to find errors/problems in my own project.
