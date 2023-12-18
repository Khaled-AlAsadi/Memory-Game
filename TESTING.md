
# Testing


## **COMPATIBILITY:**

+ The app was tested on the following browsers: Chrome, Firefox, Brave, Edge:

  - Chrome:

  ![Menu Page](documentation/compatibility/chrome_menu_page.png)
  ![Rules Page](documentation/compatibility/chrome_rules_page.png)
  ![Game Page](documentation/compatibility/chrome_game_page.png)
  
  - Firefox:

  ![Menu Page](documentation/compatibility/firefox_menu_page.png)
  ![Rules Page](documentation/compatibility/firefox_rules_page.png)
  ![Game Page](documentation/compatibility/firefox_game_page.png)

  - Edge:

  ![Menu Page](documentation/compatibility/edge_menu_page.png)
  ![Flash Cards Page. Front](documentation/compatibility/edge_rules_page.png)
  ![Flash Cards Page. Back](documentation/compatibility/edge_game_page.png)


## Devtools testing

+ The app was checked by devtools implemented on Firefox and Chrome browsers.

## Responsiveness testing

+ The app was checked with [Responsive Website Design Tester](https://responsivedesignchecker.com/).

  1. Mobile Screens:

      - Mobile 320x480:

      ![Mobile 320x480](documentation/responsiveness/mobile_320_480.gif)

      - Mobile 320x568:

      ![Mobile 320x568](documentation/responsiveness/mobile_320_568.gif)

      - Mobile 360x640:

      ![Mobile 360x640](documentation/responsiveness/mobile_360_640.gif)

      - Mobile 375x667:

      ![Mobile 375x667](documentation/responsiveness/mobile_375_667.gif)

      - Mobile 384x640:

      ![Mobile 384x640](documentation/responsiveness/mobile_384_640.gif)

      - Mobile 411x731:

      ![Mobile 411x731](documentation/responsiveness/mobile_411_731.gif)

      - Mobile 414x736:

      ![Mobile 414x736](documentation/responsiveness/mobile_414_736.gif)
      
  1. Tablets Screens:

      - Tablet 600x960:
        
      ![Tablet 600x960](documentation/responsiveness/tablet_600_960.gif)

      - Tablet 768x1024:

      ![Tablet 768x1024](documentation/responsiveness/tablet_768_1024.gif)

      - Tablet 800x1280:
        
      ![Tablet 800x1280](documentation/responsiveness/tablet_800_1280.gif)

      - Tablet 1366x1024:

      ![Tablet 1366x1024](documentation/responsiveness/tablet_1366_1024.gif)
      
  1. Desktop Screens:

      - Desktop 1024x600:
        
      ![Desktop 1024x600](documentation/responsiveness/desktop_1024_600.gif)

      - Desktop 1024x800:

      ![Desktop 1024x800](documentation/responsiveness/desktop_1024_800.gif)

      - Desktop 1366x768:
        
      ![Desktop 1366x768](documentation/responsiveness/desktop_1366_768.gif)

      - Desktop 1440x900:

      ![Desktop 1440x900](documentation/responsiveness/desktop_1440_900.gif)

      - Desktop 1600x900:
        
      ![Desktop 1600x900](documentation/responsiveness/desktop_1600_900.gif)

      - Desktop 1680x1050:

      ![Desktop 1680x1050](documentation/responsiveness/desktop_1680_1050.gif)

      - Desktop 1920x1080:
        
      ![Desktop 1920x1080](documentation/responsiveness/desktop_1920_1080.gif)

      - Desktop 1920x1200:

      ![Desktop 1920x1200](documentation/responsiveness/desktop_1920_1200.gif)


+ The functionality of the links in the app was checked as well by different users.

---

## Manual testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Menu Page | | | | | |
| Start Game | Click on Start Game button | The user is redirected to the game page | Yes | Yes | - |
| Rules | Click on Rules button | The user is redirected to the rules page | Yes | Yes | - |
| Rules Page | | | | | |
| Return to menu | Click on Return to menu button | The user is redirected to the menu page | Yes | Yes | - |
| Game Page | | | | | |
| Return to menu | Click on Return to menu button | The user is redirected to the menu page | Yes | Yes | - |
| Game Board | Click on card  | The card flips and shows the symbol | Yes | Yes | - |
| Matching pair of cards | Click on cards until a match between cards happen  | The points tracker adds 20 points | Yes | Yes | - |
| Timer | The user redirects to the game page  | The counter starts counting down | Yes | Yes | - |
| Footer | | | | | |
| LinkedIn icon in the footer | Click on the LinkedIn icon | The user is redirected to the LinkedIn page | Yes | Yes | - |
| Facebook icon in the footer | Click on the Facebook icon | The user is redirected to the Facebook page | Yes | Yes | - |
| Github icon in the footer | Click on the Github icon | The user is redirected to the Github page | Yes | Yes | - |

---

## Validator testing

+ ### HTML
    - No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator.
      - Menu Page:
          ![Menu Page HTML Validator](documentation/validators_testing/menu_page_html_validator.png)
      - Rules Page:
          ![ Rules Page HTML Validator](documentation/validators_testing/rules_page_html_validator.png)
      - Game Page:
          ![Game Page HTML Validator](documentation/validators_testing/game_page_html_validator.png)
    
+ ### CSS
    - No errors or warnings were found when passing through the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) 
    ![Menu Page CSS Validator](documentation/validators_testing/w3c_validator_index.png)
    ![Rules Page CSS Validator](documentation/validators_testing/w3c_validator_rules.png)
    ![Game Page CSS Validator](documentation/validators_testing/w3c_validator_game.png)

+ ### JS
    - No errors or warnings were found when passing through the official [JSHint](https://jshint.com/) validator except the warnings that   

      - Script:

          ![JSHint Validator Script JS](documentation/validators_testing/script_js.png)


      - Function:

          ![JSHint Validator Grammar Quiz JS](documentation/validators_testing/function_js.png)
          
          - I decided to have a different javascript file where i only define the functions for the navigation. In the picture it says that the functions are not being used but i use them in the html files

## Accessibility and performance

- Using PageSpeed Insights I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.

  - Menu Page:

      ![Menu Page Performance Score](documentation/pagespeed_insights/menu_page_performance.png)

  - Rules Page:

      ![Rules Page Performance Score](documentation/pagespeed_insights/rules_page_performance.png)

  - Game Page:

      ![Game  Page Performance Score](documentation/pagespeed_insights/game_page_performance.png)
