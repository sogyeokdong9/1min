"use strict";

(function() {
  "use strict";
  
  const premierLeague = document.querySelector('#premierLeague tbody');
  let scorers = [
    {
      rank: 1,
      player: 'Erling Haaland',
      club: 'Man City',
      goals: 15,
      pks: 0,
      assists: 3,
      matches: 9,
      mins: 755
    },
    {
      rank: 2,
      player: 'Harry Kane',
      club: 'Tottenham',
      goals: 8,
      pks: 1,
      assists: 1,
      matches: 9,
      mins: 797
    },
    {
      rank: 3,
      player: 'Roberto Firmino',
      club: 'Liverpool',
      goals: 6,
      pks: 0,
      assists: 3,
      matches: 7,
      mins: 468
    },
    {
      rank: 3,
      player: 'Phil Foden',
      club: 'Man City',
      goals: 6,
      pks: 0,
      assists: 3,
      matches: 9,
      mins: 663
    },
    {
      rank: 3,
      player: 'Ivan Toney',
      club: 'Brentford',
      goals: 6,
      pks: 2,
      assists: 2,
      matches: 9,
      mins: 810
    },
    {
      rank: 3,
      player: 'Aleksandar Mitrovic',
      club: 'Fulham',
      goals: 6,
      pks: 1,
      assists: 0,
      matches: 8,
      mins: 665
    },
    {
      rank: 7,
      player: 'Gabriel Jesus',
      club: 'Arsenal',
      goals: 5,
      pks: 0,
      assists: 3,
      matches: 9,
      mins: 783
    },
    {
      rank: 7,
      player: 'James Maddison',
      club: 'Leicester City',
      goals: 5,
      pks: 0,
      assists: 2,
      matches: 8,
      mins: 715
    },
    {
      rank: 7,
      player: 'Leandro Trossard',
      club: 'Brighton',
      goals: 5,
      pks: 0,
      assists: 1,
      matches: 8,
      mins: 674
    },
    {
      rank: 10,
      player: 'Gabriel Martinelli',
      club: 'Arsenal',
      goals: 4,
      pks: 0,
      assists: 2,
      matches: 9,
      mins: 783
    },
    {
      rank: 10,
      player: 'Rodrigo',
      club: 'Leeds',
      goals: 4,
      pks: 0,
      assists: 1,
      matches: 7,
      mins: 518
    },
    {
      rank: 10,
      player: 'Wilfried Zaha',
      club: 'Crystal Palace',
      goals: 4,
      pks: 0,
      assists: 1,
      matches: 7,
      mins: 622
    },
    {
      rank: 10,
      player: 'Alexis Mac Allister',
      club: 'Brighton',
      goals: 4,
      pks: 3,
      assists: 0,
      matches: 8,
      mins: 720
    },
    {
      rank: 10,
      player: 'Miguel Almiron',
      club: 'Newcastle',
      goals: 4,
      pks: 0,
      assists: 0,
      matches: 9,
      mins: 754
    },
    {
      rank: 15,
      player: 'Bukayo Saka',
      club: 'Arsenal',
      goals: 3,
      pks: 1,
      assists: 4,
      matches: 9,
      mins: 798
    },
    {
      rank: 15,
      player: 'Marcus Rashford',
      club: 'Man United',
      goals: 3,
      pks: 0,
      assists: 2,
      matches: 8,
      mins: 672
    },
    {
      rank: 15,
      player: 'Son Heung-min',
      club: 'Tottenham',
      goals: 3,
      pks: 0,
      assists: 2,
      matches: 8,
      mins: 675
    },
    {
      rank: 15,
      player: 'Pascal Gross',
      club: 'Brighton',
      goals: 3,
      pks: 0,
      assists: 2,
      matches: 8,
      mins: 687
    },
    {
      rank: 15,
      player: 'Patson Daka',
      club: 'Leicester City',
      goals: 3,
      pks: 0,
      assists: 1,
      matches: 8,
      mins: 331
    },
    {
      rank: 15,
      player: 'Callum Wilson',
      club: 'Newcastle',
      goals: 3,
      pks: 0,
      assists: 1,
      matches: 5,
      mins: 396
    },
    {
      rank: 15,
      player: 'Raheem Sterling',
      club: 'Chelsea',
      goals: 3,
      pks: 0,
      assists: 1,
      matches: 7,
      mins: 607
    },
    {
      rank: 15,
      player: 'Luis Diaz',
      club: 'Liverpool',
      goals: 3,
      pks: 0,
      assists: 1,
      matches: 8,
      mins: 615
    },
    {
      rank: 15,
      player: 'Martin Odegaard',
      club: 'Arsenal',
      goals: 3,
      pks: 0,
      assists: 1,
      matches: 8,
      mins: 658
    },
    {
      rank: 15,
      player: 'Antony',
      club: 'Man United',
      goals: 3,
      pks: 0,
      assists: 0,
      matches: 3,
      mins: 237
    },
    {
      rank: 15,
      player: 'Philip Billing',
      club: 'Bournemouth',
      goals: 3,
      pks: 0,
      assists: 0,
      matches: 9,
      mins: 649,
    }
  ];
  
  function remove_children() {
    // 부모 노드 선택
    const parent = document.querySelector('#premierLeague tbody');
    // 자식 노드 삭제
    while(parent.firstChild)  {
      parent.firstChild.remove()
    }
  }

  // goals.addEventListener('oninput', filter(this));

  goals.addEventListener('input', function(e) {
    // console.log(e.target.value);
    const eValue = e.target.value;
    console.log(this);
    goals.setAttribute('value', eValue);
    e.target.nextElementSibling.value = eValue;
    remove_children();
    const filterdScorers = scorers.filter( s => s.goals >= eValue );
    for (const index of filterdScorers.keys()) {
      const newTr = document.createElement("tr");
      const newTdIdx = document.createElement("td");
      newTdIdx.className = "none";
      const newTdRank = document.createElement("td");
      const newTdPlayer = document.createElement("td");
      const newTdClub = document.createElement("td");
      const newTdGoals = document.createElement("td");
      newTdGoals.className = "extra";
      const newTdPKs = document.createElement("td");
      newTdPKs.className = "none";
      const newTdAssists = document.createElement("td");
      const newTdMatches = document.createElement("td");
      const newTdMins = document.createElement("td");
      // and give it some content
      const newContentIdx = document.createTextNode(index);
      const newContentRank = document.createTextNode(filterdScorers[index].rank);
      const newContentPlayer = document.createTextNode(filterdScorers[index].player);
      const newContentClub = document.createTextNode(filterdScorers[index].club);
      const newContentGoals = document.createTextNode( `${filterdScorers[index].goals} (${filterdScorers[index].pks})` );
      const newContentPKs = document.createTextNode( '(' + filterdScorers[index].pks + ')' );
      const newContentAssists = document.createTextNode(filterdScorers[index].assists);
      const newContentMatches = document.createTextNode(filterdScorers[index].matches);
      const newContentMins = document.createTextNode(filterdScorers[index].mins);
      // add the text node to the newly created tr
      newTdIdx.appendChild(newContentIdx);
      newTdRank.appendChild(newContentRank);
      newTdPlayer.appendChild(newContentPlayer);
      newTdClub.appendChild(newContentClub);
      newTdGoals.appendChild(newContentGoals);
      newTdPKs.appendChild(newContentPKs);
      newTdAssists.appendChild(newContentAssists);
      newTdMatches.appendChild(newContentMatches);
      newTdMins.appendChild(newContentMins);
      newTr.appendChild(newTdIdx);
      newTr.appendChild(newTdRank);
      newTr.appendChild(newTdPlayer);
      newTr.appendChild(newTdClub);
      newTr.appendChild(newTdGoals);
      newTr.appendChild(newTdPKs);
      newTr.appendChild(newTdAssists);
      newTr.appendChild(newTdMatches);
      newTr.appendChild(newTdMins);
      // add the newly created element and its content into the DOM
      const currentTbody = document.querySelector('#premierLeague tbody');
      premierLeague.appendChild(newTr, currentTbody);
    }
  })


})();
