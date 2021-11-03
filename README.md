# reacket

React single elimination tournament brackets  
Example https://jez321.github.io/reacket/

## Install

```bash
npm install --save reacket
```

## Usage

Prepare an array of matches in the following format:
```
[
  {
    "id": 1,
    "round": 1,
    "match": 1,
    "players": [
      {
        "id": 1,
        "name": "Player 1 name",
        "seed": 1
      },
      {
        "id": 2,
        "name": "Player 2 name",
        "seed": 8
      }
    ],
    "score": [
      0,
      1
    ]
  },
...
]
```
At the moment, brackets should be full i.e. the number of matches in a round = 2^(Total rounds - Current round).  
See data/testData.json for an example.

```jsx
import React from 'react';
import Reacket from 'reacket';

const Example = (matches) => (
  <Reacket matches={matches} />
)
```

## Customizing the theme

Override the appropriate css classes, making sure to import your theme after reacket.

```jsx
import Reacket from 'reacket';
import './reacket.theme.css';
```

Refer to the example project for a sample custom theme implementation.

## Example site

```bash
cd example
npm start
```
Access localhost:3000 in your browser.

Note: If you get a hooks error when accessing the example site follow the steps in this StackOverflow answer. https://stackoverflow.com/a/65259365

## License

MIT © [jez321](https://github.com/jez321)
