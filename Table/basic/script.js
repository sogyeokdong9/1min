"use strict";

(function() {
  "use strict";
  
  const premierLeague = document.querySelector('#premierLeague tbody');
  const scoreTableFooter = document.querySelector('#premierLeague tfoot');
  const scorers = [
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
  Object.freeze(scorers);
  
  function remove_children() {
    const parent = document.querySelector('#premierLeague tbody');
    while(parent.firstChild)  {
      parent.firstChild.remove()
    }
  }

  goals.addEventListener('input', function(e) {
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
      const newContentIdx = document.createTextNode(index);
      const newContentRank = document.createTextNode(filterdScorers[index].rank);
      const newContentPlayer = document.createTextNode(filterdScorers[index].player);
      const newContentClub = document.createTextNode(filterdScorers[index].club);
      const newContentGoals = document.createTextNode( `${filterdScorers[index].goals} (${filterdScorers[index].pks})` );
      const newContentPKs = document.createTextNode( '(' + filterdScorers[index].pks + ')' );
      const newContentAssists = document.createTextNode(filterdScorers[index].assists);
      const newContentMatches = document.createTextNode(filterdScorers[index].matches);
      const newContentMins = document.createTextNode(filterdScorers[index].mins);
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
      const currentTbody = document.querySelector('#premierLeague tbody');
      premierLeague.appendChild(newTr, currentTbody);
    }

    const getFilterRank = [];
    const getFilterPlayer = [];
    const getFilterClub = [];
    const getFilterGoals = [];
    const getFilterPks = [];
    const getFilterAssists = [];
    const getFilterMatches = [];
    const getFilterMins = [];

    for (const iterator of filterdScorers) {
      getFilterRank.push(iterator.rank);
      getFilterPlayer.push(iterator.player);
      getFilterClub.push(iterator.club);
      getFilterGoals.push(iterator.goals);
      getFilterPks.push(iterator.pks);
      getFilterAssists.push(iterator.assists);
      getFilterMatches.push(iterator.matches);
      getFilterMins.push(iterator.mins);
    }

    const collectedScorers = {}
    collectedScorers.rank = getFilterRank;
    collectedScorers.player = getFilterPlayer;
    collectedScorers.club = getFilterClub;
    collectedScorers.goals = getFilterGoals;
    collectedScorers.pks = getFilterPks;
    collectedScorers.assists = getFilterAssists;
    collectedScorers.matches = getFilterMatches;
    collectedScorers.mins = getFilterMins;

    const getGoals = eValue;
    const getMostGoals = Math.max(...collectedScorers.goals)
    const getLeastGoals = Math.min(...collectedScorers.goals)
    const getMostPks = Math.max(...collectedScorers.pks)
    const getLeastPks = Math.min(...collectedScorers.pks)    
    const getMostAssists = Math.max(...collectedScorers.assists)
    const getLeastAssists = Math.min(...collectedScorers.assists)    
    const getMostMatch = Math.max(...collectedScorers.matches)
    const getLeastMatch = Math.min(...collectedScorers.matches)    
    const getMostMins = Math.max(...collectedScorers.mins)
    const getLeastMins = Math.min(...collectedScorers.mins)    

    console.log('most goals: ', getMostGoals);
    console.log('least goals: ', getLeastGoals);
    console.log('most PKs: ', getMostPks);
    console.log('least PKs: ', getLeastPks);
    console.log('most Assists: ', getMostAssists);
    console.log('least Assists: ', getLeastAssists);
    console.log('most Match: ', getMostMatch);
    console.log('least Match: ', getLeastMatch);
    console.log('most Match: ', getMostMins);
    console.log('least Match: ', getLeastMins);

    function find_player(value) {
      const mostGoalsPlayer = filterdScorers.filter( s => s.goals === getMostGoals );
      const leastGoalsPlayer = filterdScorers.filter( s => s.goals === getLeastGoals );
      const mostPksPlayer = filterdScorers.filter( s => s.pks === getMostPks );
      const leastPksPlayer = filterdScorers.filter( s => s.pks === getLeastPks );
      
      function getPlayer(name) {
        const result = [];
        for (const iterator of name) {
          result.push(iterator.player);
        }
        return result;
      }

      if ( value === getMostGoals ) {
        return getPlayer(mostGoalsPlayer);
      } else if ( value === getLeastGoals ) {
        return getPlayer(leastGoalsPlayer);
      } else if ( value === getMostPks ) {
        return getPlayer(mostPksPlayer);
      } else if ( value === getLeastPks ) {
        return getPlayer(leastPksPlayer);
      }

    }

    function count_duplicate(value, name) {
      const counts = {}
      for (let index = 0; index < value.length; index++) {
        let element = value[index];
        console.log(name, element);
        if( counts[element] ) {
          counts[element] += 1;
        } else {
          counts[element] = 1;
        }
      }
      console.log(name, counts);
      for (const key in counts) {
        if (counts[key] >=  2) {
          console.log( `${name}Duplicated - ${key} counted: ${counts[key]} times.` )
        }
      }
    }
    // count_duplicate(collectedScorers.rank);
    // count_duplicate(collectedScorers.player);
    // count_duplicate(collectedScorers.club);
    // count_duplicate(collectedScorers.goals);
    // count_duplicate(collectedScorers.pks);
    // count_duplicate(collectedScorers.assists);
    // count_duplicate(collectedScorers.matches);
    count_duplicate(collectedScorers.mins, `Mins`);
  
    const totalGoals = [
      `
      <dt>Goals: </dt>
      <dd>There are a total of <strong>${collectedScorers.player.length}(${collectedScorers.player.join(', ')})</strong> players who scored more than <strong>${getGoals}</strong> goal(s).</dd>
      <dd>Among the players who scored more than <strong>${getGoals}</strong> goal(s), <strong>${find_player(getMostGoals).join(', ')}</strong> is the player who scored the most goals.</dd>
      <dd>Among the players who scored more than <strong>${getGoals}</strong> goal(s), <strong>${find_player(getMostPks).join(', ')}</strong> is the player who took the most penalty kicks.</dd>
      <dd>Among the players who scored more than <strong>${getGoals}</strong> goal(s), <strong>${find_player(getLeastPks).join(', ')}</strong> is the player who took the least penalty kicks.</dd>
      `
    ]

    details.innerHTML = totalGoals;

    goals.setAttribute('max', getMostGoals);
    scoreTableFooter.style.visibility = 'visible';
  })
})();
