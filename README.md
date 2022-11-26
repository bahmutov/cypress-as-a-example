# cypress-as-a-example

> Parsing objects injected using the [as-a](https://github.com/bahmutov/as-a) utility

To run: create a file `.as-a.ini` and place a JSON object with the user properties

```ini
; inject these environment variables
; using https://github.com/bahmutov/as-a utility
; Cypress automatically grabs the environment variables
; that start with CYPRESS_ prefix and parses them
[cypress-user]
; get this parsed object with Cypress.env('user')
CYPRESS_user={"username":"...", "password": "...", "age": number, "valid": boolean}
```

Cypress spec at [cypress/e2e/spec.cy.js](./cypress/e2e/spec.cy.js)

📝 Read the blog post [How To Inject Environment Variables Into Cypress Tests](https://glebbahmutov.com/blog/inject-env/)
📺 Watch the video [Inject Entire Objects Into Cypress Tests Using as-a Utility](https://youtu.be/dxGhIvFNm4I).

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2022

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.
