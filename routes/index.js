var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/scoreboard', function(req, res) {
  const id = req.query.id;
  res.send({
    problems : ['A', 'B', 'C', 'D', 'E'],
    search : '',
    headers: [
      {
        text: 'Rank',
        align: 'start',
        value: 'rank'
      },
      {
      text: 'Participants',
      sortable: false,
      value: 'name',
      },
      {
        text: 'Score',
        value: 'score'
      },
      {
        text: 'A',
        value: 'A',
      },
      {
        text: 'B',
        value: 'B'
      },
      {
        text: 'C',
        value: 'C'
      },
      {
        text: 'D',
        value: 'D'
      },
      {
        text: 'E',
        value: 'E'
      }
  ],
  values: [
      {
        name: 'Harry',
        rank: 1,
        score: 3,
        A: 1,
        subA: 101001,
        B: 0,
        subB: 101002,
        C: 0,
        subC: 101003,
        D: 1,
        subD: 101004,
        E: 1,
        subE: 101005
      },
      {
        name: 'Ron',
        rank: 2,
        score: 3,
        A: 0,
        subA: 101011,
        B: 1,
        subB: 101012,
        C: 1,
        subC: 101013,
        D: 1,
        subD: 101014,
        E: 0,
        subE: 101015
      },
      {
        name: 'Hermoine',
        rank: 3,
        score: 3,
        A: 1,
        subA: 101021,
        B: 1,
        subB: 101022,
        C: 0,
        subC: 101023,
        D: 1,
        subD: 101024,
        E: 0,
        subE: 101025
      },
    ]
  });
});


router.get('/submission', function(req, res) {
  const id = req.query.id;
  res.send({
    code: '#include<bits/stdc++.h>\nusing namespace std;\nint main() {\n \treturn 0; \n}',
    testHeaders : [
        {
          text: 'Test case ID',
          value: 'tcid'
        },
        {
          text: 'Status',
          value: 'status'
        },
        {
          text: 'Time',
          value: 'time'
        },
        {
          text: 'Memory',
          value: 'memory'
        }
    ],
    testDetails : [
        {
          tcid: '0',
          status: 'Correct Answer',
          time: '220 ms',
          memory: '7220 KiB'
        },
        {
          tcid: '1',
          status: 'Correct Answer',
          time: '221 ms',
          memory: '7210 KiB'
        },
        {
          tcid: '2',
          status: 'Correct Answer',
          time: '22 ms',
          memory: '720 KiB'
        },
        {
          tcid: '3',
          status: 'Correct Answer',
          time: '228 ms',
          memory: '7227 KiB'
        },
        {
          tcid: '4',
          status: 'Correct Answer',
          time: '227 ms',
          memory: '7229 KiB'
        }
    ],
    subHeaders : [
        {
          text: 'ID',
          align: 'start',
          value: 'id'
        },
        {
          text: 'Submitted On',
          value: 'subOn'
        },
        {
          text: 'Submitted By',
          value: 'subBy'
        },
        {
          text: 'Problem',
          value: 'problem'
        },
        {
          text: 'Language',
          value: 'lang'
        },
        {
          text: 'Status',
          value: 'status'
        },
        {
          text: 'Time',
          value: 'time'
        },
        {
          text: 'Memory',
          value: 'memory'
        }
    ],
    subDetails : [
        {
          id: id,
          subOn: '14/08/2021, 19:59:55',
          subBy: 'Rahul Dugar',
          problem: 'Blizzard Blitz',
          lang: 'C++',
          status: 'Correct Answer',
          time: '220 ms',
          memory: '7552 KiB'
        }
    ]
  });
});
module.exports = router;
