# CREW APPLICATION TEST AUTOMATION FRAMEWORK

This is Automation framework which was build to test Crew Application Functionality using Cypress.

### Running tests locally
- make sure Crew app is available on http://localhost:3000 - [README.md](../README.md)
- install
```
yarn install
```
- run
```
yarn run cypress:run:local
```

```
yarn run cypress:open:local
```
- run in specific browser (chrome or electron)
```
yarn run cypress:open:local --browser=chrome
```

* *junit and mocha reports are written to the folder cypress/reports*
* *cucumber.json report is written to the folder cypress/cucumber-json*


### Running tests in docker
- make sure Crew app is running in docker and available on http://localhost:5000 - [README.md](../README.md)
- build docker image
```
docker build -t crew-app-test .
```
- run
```
docker run -it crew-app-test
```
