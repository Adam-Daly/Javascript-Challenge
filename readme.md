# Javascript Challenge Website

Deployed version here: [Javascript Challenge](https://adam-daly.github.io/Javascript-Challenge/)

![Website Preview](/assets/images/readme/preview-responsive.png)

## User Experience
The JavaScript Challenge site offers an interactive and engaging experience for users who want to test their JavaScript knowledge. Upon landing on the site, users are greeted with a welcoming message and prompted to choose a category for their first round of 10 questions. They can select from four categories: Variables and Data Types, Operators and Control Flow, Data Structures and Functions, and Manipulating the DOM. As users progress through the quiz, they can see their scores updated in real-time and a fun mascot image accompanies them throughout the challenge. Between rounds the user is presented with statistics like how many rounds they have played and their correct score rate. There is also a restart button for users to start over at any time if they wish to retry the challenge for a higher correct score rate.

## Target Audience
The target audience for JavaScript Challenge includes JavaScript Enthusiasts who want to test and improve their knowledge, students who wish to use the quiz to reinforce their studies, developers who want to review aspects of javascript they may be rusty with or gamers who enjoy the challenge and want to reach a high correct answer rate over many rounds.

## User Stories
- As a JavaScript enthusiast, I want to be able to choose from different categories so I can focus on specific areas of JavaScript that I want to test my knowledge in.
- As a student studying JavaScript, I want each question to be multiple choice so I can quickly progress through questions even if I don't have a deep understanding of the topic.
- As a developer, I want immediate feedback on my answers so I can track my progress and learn from my mistakes in real-time.
- As a JavaScript enthusiast, I want to see stats on my correct answer rate and the number of rounds played between each round of 10 questions, so I can gauge my performance and strive to improve with each round.
- As a gamer, I want the option to restart the challenge at any point with a blank slate, so I can try again for a better correct score rate and challenge myself further.
- As a user of the JavaScript Challenge site, I want friendly graphics and animations that lighten the mood and provide visual interest to what could otherwise be a dull site.
- As a user accessing the site from different devices, I want the website to be responsive and adapt seamlessly to various screen sizes, including desktop, tablet, and phone, so I can enjoy the same interactive experience regardless of the device I'm using.

# Design

1. A wireframe sketch acted as a jump off point for figma and visualizing responsive breakpoints.

    ![Wireframe](/assets/images/readme/wireframe-sketch.png)

2. [COOLORS](https://coolors.co/) was used to find a cohesive color palette. As I wanted some kind of red and green for the correct and incorrect answers, 
            the site enabled me to find the right brightness and saturation to use for a readable contrast against white text. It also allowed me to explore colors
            that would complement the red and green without feeling overbearing.

    ![COOLOR](/assets/images/readme/color-themes.png)

3. [Looka](https://looka.com/) enabled exploration of different logos for the header.

   ![LOOKA](/assets/images/readme/logos.png)

4. [Figma](https://www.figma.com/) was used to translate the wireframe sketch into a more final design and test the color schemes.

   ![Figma](/assets/images/readme/figma.png)

## Features
1. **Categories**: Features four categories to choose from: Variables and Data Types, Operators and Control Flow, Data Structures and Functions, and Manipulating the Dom

    ![Categories](/assets/images/readme/features-categories.png)

2. **Questions**: Each question has four possible answers, with only one being correct. The question numbers are tracked between rounds.

    ![Questions](/assets/images/readme/features-questions.png)

3. **Score Tracker**: When you click an answer, you get immediate feedback from both the green and red highlighted answers and your score being incremented.

    ![Score Tracker](/assets/images/readme/features-tracker.png)

4. **Round Stats**: Between each round of 10 questions, stats on your correct answer rate and number of rounds played are displayed.

    ![Round Stats](/assets/images/readme/features-round-stats.png)

5. **Restart Button**: At any point you can restart the challenge with a blank slate and try for a better correct score rate.

    ![Restart Button](/assets/images/readme/features-restart.png)

6. **Raccoon Mascot**: A raccoon mascot greets you, reacts to your answer choices and naps between rounds.

    ![Raccoon Mascot](/assets/images/readme/mascot-example.gif)

7. **Responsive Design**: The website is targeted at main breakpoints of desktop (max-width 1140px), tablet (768px) and phone (480px) but can scale seemlessly between each.

    ![Responsive Design](/assets/images/readme/features-responsive.png)

## Future Feature Ideas
1. **Expanded Categories**: Add categories that cover advanced javascript concepts like iterators, classes, modules, promises, async-await and requests.
2. **Daily Challenge Category**: A timed category that can draw from any javascript topic and has its questions changed every day. Compare your time and score to your friends and family!
3. **Profiles**: Sign in and save your scores. Compare your scores to other users on a leaderboard.
4. **Reference Section**: A section that gives a concise explanation of javascript concepts that appear in the challenge categories.

# Technoloy Used

1. Github
2. VScode
3. Figma

# Languages Used

1. JavaScript
2. CSS
3. HTML

# Deployment

Deployed via github pages

![Deployment](/assets/images/readme/deploy.png)

1. Upload all files to a github repo.
2. Navigate to your settings page for the repo.
3. Click "Pages" and then "Deploy from a Branch" and choose the correct branch (usually main).

#  Testing

1. **Jigsaw CSS Validator**: Found one error with a grid-template-column formatting, removed a minmax() attribute to fix.

    ![Jigsaw](/assets/images/readme/jigsaw.png)

2. **W3C HTML Validator**: No errors or warnings.

    ![W3C Validator](/assets/images/readme/w3.png)

3. **Lighthouse**: Using chrome dev tools, the lighthouse report was positive with 99/100/100/100.

    ![Lighthouse](/assets/images/readme/lighthouse.png)

4. **JSHint**: Had to configure it to assume ES6 features to remove most warnings. Remaining unused variable/function messages are not actually an issue. 
                First message about unused variable "data" because it is from a separate file "questions.js". 
                Second message for two unused functions as they are called directly in the html by an onclick event.

    ![JShint](/assets/images/readme/jshint.png)
    

# Bugs

1.  **Issue**: Eroneous horizontal scrolling was present on mobile views, a similar issue appeared on a previous project but the source of the issue wasn't the same.

    **Fix**: Removing div elements in chrome dev tools until the issue disappeared allowed me to identity that it was an issue with using width: 100% and padding.
            Changing the box-sizing to border-box ensures that width + padding = 100%, instead of padding being added to a 100% width.

2.  **Issue**: On mobile and tablet, the last hoverable element that was touched stays in a hover state, causing inconsistent ui visuals.
    
    **Fix**: Place any :hover styles inside an `@media (hover: hover){}` media query to ensure that hover states are only used on appropriate devices. :active and :focus can be used instead.

3.  **Issue**: When referencing multiple external scripts in index.html (script.js and questions.js) variables from questions.js were not being recognised properly in the script.js file.

    **Fix**: If script B references script A, then script A must be placed before script B in index.html. In this case, questions.js must be placed before script.js.

# Credits

## Image Sources

- Raccoon Character: https://www.freepik.com/premium-vector/raccoon-character-funny-coon-trash-wild-raccoons-different-poses-cute-mammal-animal-mascot-cartoon-vector-set_29351107.htm


## Font Source
- IBM Plex Serif: https://fonts.google.com/specimen/IBM+Plex+Serif
