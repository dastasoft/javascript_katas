# Javascript Katas

A collection of JavaScript challenges solved with testing included.

## Motivation

Doing javascript challenges will sharp my knowledge of the language, algorithmic thinking and let me to implement simple testing and some other cool stuff. Furthermore can be a good way to prepare a tech interview, for that check the [Tech Interview Handbook](https://github.com/yangshun/tech-interview-handbook).

It's also a good change of being better doing english written documentation.

## Goals

- Have a collection of plain javascript challenges resolved.
- Adding tests with Jest.
- Add a CI platform to run automatically the test and send me back the results.
- Adding some performance tool to measure better in some way the answers.
- Adding a way to generate data to check the limits of the answer in terms of performance.
- Adding coding style checker specially for the tests.
- Add Docker to avoid confusion with Node.js versions or any other software, the project must be runnable without touching anything on other system.

## Platforms used

There are many platforms which provides algorithmic challenges, I currently use:

- [Hackerrank](https://www.hackerrank.com/)
- [Codewars](https://www.codewars.com/)

There is also other challenges which I found in books or other resources and maybe will be contributions from other users.

## Project Structure

Each platform has their own folder and inside you will found the challenges with documentation, the solution and the test.

```sh
├── codewars/
│   └── ...
│
├── contributions/
│   └── ...
│
├── hackerrank/
│   └── ...
│
├── others/
│   ├── UniqueElement/
│   │   ├── index.js
│   │   ├── index.test.js
│   │   └── instructions.md
│   └── ...
```

## Contributors

Feel free to open issues or send PRs and submit new katas under the `contributions` folder.

## License

MIT [dastasoft](https://dastasoft.netlify.app/)
