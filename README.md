# Portfolio
Professional Portfolio

## Description

Website consists of a whole single page (index.html), with a navigation bar, 4 sections and a footer.
There is also a 2nd html doc (projects.html), to where you are redirected when you click on the view project anchor under the My Projects section.

I have tried as much as possible to respect ARIA standards which I hope I have succeeded with. I have however left the article without a header for stetic reasons. This is the only HTML validation warning the document gets.

## Tecnologies / libraries / external resources

  - HTML.

  - Javascript:  
    - DOM Manipulation: ARIA attributes, add/remove of various classes and media-change listener for the nav and accordion dinamics. 
    - Animations: nav. bar toggle button rotation and height change of content of accordion.
    - Notes on the above functions can be found directly on the code itself on main.js.
  
  - CSS/SASS: 
    - SASS modules are organized by section (navbar, education, etc) or scope (media queries, config).
    - CSS animations made with transition and transform properties performed on either an ::after or ::before pseudo-element: 
        - Green underline on hover for the main 4 section headings.
        - View project anchor under each accordion button in the My Projects section
   
   - Font-Awesome:
     - Used for social media icons, bullet poinst (graduation hat),  under education/formal education section, and nav. bar toggle button.
   
   - Bootstrap v.5.1.3 - Carousel and progress bar only.
   
   - Unsplash (carousel images) - https://unsplash.com/ - No attribution needed
   
   - Uxwing (flag images) - https://uxwing.com/ - No attribution needed
  
 ## Responsiveness
  - Only one breakpoint at 670px
  - Only carousel images scale in proportion to the screen size.
  - All images however have been optimized to load a light or heavy file size according to device width and resolution with srcset and sizes attributes of img element

  
  
