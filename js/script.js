var a = [
  'the',
  'of',
  'and',
  'a',
  'to',
  'in',
  'is',
  'you',
  'that',
  'it',
  'he',
  'was',
  'for',
  'on',
  'are',
  'as',
  'with',
  'his',
  'they',
  'I',
  'at',
  'be',
  'this',
  'have',
  'from',
  'or',
  'one',
  'had',
  'by',
  'word',
  'but',
  'not',
  'what',
  'all',
  'were',
  'we',
  'when',
  'your',
  'can',
  'said',
  'there',
  'use',
  'an',
  'each',
  'which',
  'she',
  'do',
  'how',
  'their',
  'if',
  'will',
  'up',
  'other',
  'about',
  'out',
  'many',
  'then',
  'them',
  'these',
  'so',
  'some',
  'her',
  'would',
  'make',
  'like',
  'him',
  'into',
  'time',
  'has',
  'look',
  'two',
  'more',
  'write',
  'go',
  'see',
  'number',
  'no',
  'way',
  'could',
  'people',
  'my',
  'than',
  'first',
  'water',
  'been',
  'call',
  'who',
  'oil',
  'its',
  'now',
  'find',
  'long',
  'down',
  'day',
  'did',
  'get',
  'come',
  'made',
  'may',
  'part',
];
var b;
document.getElementById('show1').readOnly = true;
var start, end, timetaken;
function showw() {
  start = new Date().getTime();
  b = Math.floor(Math.random() * 100);
  document.getElementById('show1').value = a[b];
  // console.log(a[b]);
}
function enterr() {
  var c = document.getElementById('enter1').value;
  if (c == document.getElementById('show1').value) {
    end = new Date().getTime();
    timetaken = (end - start) / 1000;
    //    alert(`Words Matched in ${timetaken} seconds`);
    document.getElementById('match').innerHTML =
      'You Took ' + timetaken + ' seconds';
    document.getElementById('enter1').value = '';
    showw();
  }
}
showw();
