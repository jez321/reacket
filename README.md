# reacket

> React single elimination tournament brackets

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
import React from 'react'
import Reacket from 'reacket'

const Example = (matches) => (
  <Reacket matches={matches} />
)
```

## Example site

```bash
cd example
npm start
```
Access localhost:3000 in your browser.

## License

MIT © [jez321](https://github.com/jez321)
