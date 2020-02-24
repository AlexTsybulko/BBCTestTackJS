# BBCTestTaskJS

- Prerequisites: for running test you should have installed [IntellijIdea](https://www.jetbrains.com/idea/download/#section=windows), [Google Chrome browser](https://www.google.ru/intl/ru/chrome/?brand=CHBD&gclid=Cj0KCQjwxYLoBRCxARIsAEf16-sx6--sZ-WPL-TBg_QWWB-HaH6t6ZnYa9DbYQLEgrKVsOHpwCwWCpcaAuQQEALw_wcB&gclsrc=aw.ds),
[NodeJS 12.16.1+](https://nodejs.org/en/)

### Steps to running test app with IntellijIDEA:
1. Import project 
- Сhoose 'checkout from version control' option, Git from dropdown
- URL for cloning: [https://github.com/AlexTsybulko/BBCTestTaskJS.git](https://github.com/AlexTsybulko/BBCTestTaskJS.git)
- Say yes for Intellij's : 'Would you like to create an IntelliJ IDEA project for the sources you have checked out to <path>'?
- Create project from existing sources radio button should be checked and click next through wizard to finish
2. Open command window in BBCTestTackJS root folder or use terminal inside Intellij
3. run 'npm install'
4. run 'npm test'

_Notes_
- result screenshots are in allure-result folder
- to generate allure report run 'allure serve ./' in allure-results folder (example report is attached to project root folder)

