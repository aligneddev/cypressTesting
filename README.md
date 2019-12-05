# cypressTesting
I desired to learn about Cypress.io so that I'll know for myself if it's worth recommending. So far I like it!

Stated with dotnet new mvc in .Net Core 3.0 and trying out Cypress.io

Quick start
https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
https://docs.cypress.io/guides/references/best-practices.html#article

```npm install cypress --save-dev```

```npx cypress open```

"It is impossible for Cypress to miss elements when it fires events."
From <https://docs.cypress.io/guides/overview/key-differences.html#Flake-resistant> 
https://github.com/cypress-io/cypress-example-recipes/

[NDC 2019 workshop on Pluralsight](https://app.pluralsight.com/course-player?course=ng-conf-19-testing-cypress-io&author=ng-conf&name=6bc8bea6-1905-4595-8fc8-4c4426e627c6&clip=0&mode=live)

# Pros and Cons over Selenium
## Pros
	• Easy to get going without experience
	• Newer and cooler
	• Great Docs

## Cons
	• Chrome only
	• JavaScript (that could be a pro now)
	• Some might have Selenium experience
	• Problems with Oauth
		○ https://blog.johnnyreilly.com/2?018/07/cypress-and-auth0.html

## Maintainability 

### Commands

https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/#
* More tied to the Cypress framework with custom actions, but it's 50% faster!
	
### Variables

https://docs.cypress.io/guides/references/best-practices.html#Setting-a-global-baseUrl

put inside of cypresss.json
cypress.env('usename')
cypress.env('password')

### Naming

* files: name them well example: Registering the User.js

### TypeScript would help, my example is JavaScript (at least for now)


## CI/CD

https://docs.cypress.io/guides/guides/continuous-integration.html#Examples

Look into more: https://docs.cypress.io/guides/tooling/plugins-guide.html#Use-Cases

## Resources
https://dev.to/noriste/front-end-productivity-boost-cypress-as-your-main-development-browser-5cdk
https://dvinnik.com/talks/testing/modern-web-testing-going-beyond-selenium/
https://blog.logrocket.com/cypress-io-the-selenium-killer/
https://rhythmandbinary.com/2019/06/09/how-cypress-makes-testing-fun/
