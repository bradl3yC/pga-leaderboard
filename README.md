## React Code Challenge
### Dependencies:
- React
- Redux
- Styled Components
- MD5

This app maintains state using Redux.  Application state is not persisted on refresh.
This could be enhanced by storing player data in local storage or a simple API.

MD5 hashing was used with date/time stamp to create unique player IDs as opposed to using indexs.
There was potential for bugs/weirdness to be introduced with deleting records in conjunction with lodash/orderBy.

### Side Notes:

Given the overall style of this, mimicking a PGA scoreboard, I could have sorted the opposite order, but wanted
to stay consistent with the request.

Also, having added a `total` column that tracked over/under par, I could have done some text highlighting for scores over/under par.
