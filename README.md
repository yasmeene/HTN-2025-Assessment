# HTN-2025-Assessment

### Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

Similar to any other website I build, I like to sketch out a plan for how I want the site to look and what features to include. The theme took me a while to figure out, but I finally decided on a Kurzgesagt theme where everything would look cartoonish and have a space vibe. I created a Vite project and used React to write the code. I wanted to use Vite as I had used it minimally in the past and wanted to learn about it through building this project. The biggest problems I faced while building this website were dealing with Tailwind not rendering my colours, Typescript errors, and trying to figure out why my configuration files were being treated as a CommonJS module. Tailwind had a lot of trouble identifying my custom colours, so to fix the problem I switched to using Tailwind's default colours that were similar to my custom colours. By changing the format of my configuration files, I was able to get it to be treated as an ES Module. For the Typescript errors, I unfortunately couldn't solve them directly and they were affecting the entire project so I decided to switch everything from using TSX to using JSX. The part of the code that I am most proud of is the styling as it took me the longest to develop. I came across a lot of problems with Tailwind not rendering my styles, but once I finished it I was proud of the result.


### Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be?
 
The first feature I would add is a fully functional login system so that users can either create their accounts for the website or log in using Google, or Facebook. Additionally, when the user clicks to learn more about the event, I would like to include some contact links, a working registration link, and a section on the event card that shows how many people are registered and how many spots are left for the event. The design of the webpage is something I would be most eager to fix given more time. I'd add a dark mode-light mode switch to allow users flexibility in the theme and fix the formatting issues that I didn't have enough time to address. The theme of the website is inspired by the Kurzgesagt – In a Nutshell YouTube channel. To align it more closely with their style, I would like to add a different version of their bird mascot on each card and possibly include a black hole, as it is a recurring theme in their content.
