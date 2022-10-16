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

  // add a new empty array to hold the filtered data.
  const getOriginRank = [];
  const getOriginPlayer = [];
  const getOriginClub = [];
  const getOriginGoals = [];
  const getOriginPKs = [];
  const getOriginAssists = [];
  const getOriginMatches = [];
  const getOriginMins = [];

  // The value corresponding to the key of the object is added as an element of an empty array.
  for (const iterator of scorers) {
    getOriginRank.push(iterator.rank);
    getOriginPlayer.push(iterator.player);
    getOriginClub.push(iterator.club);
    getOriginGoals.push(iterator.goals);
    getOriginPKs.push(iterator.pks);
    getOriginAssists.push(iterator.assists);
    getOriginMatches.push(iterator.matches);
    getOriginMins.push(iterator.mins);
  }

  const distributeScorers = {}
  distributeScorers.rank = getOriginRank;
  distributeScorers.player = getOriginPlayer;
  distributeScorers.club = getOriginClub;
  distributeScorers.goals = getOriginGoals;
  distributeScorers.pks = getOriginPKs;
  distributeScorers.assists = getOriginAssists;
  distributeScorers.matches = getOriginMatches;
  distributeScorers.mins = getOriginMins;

  // filtered item values
  const getRawMostGoals = Math.max(...distributeScorers.goals)
  const getRawLeastGoals = Math.min(...distributeScorers.goals)
  const getRawMostPKs = Math.max(...distributeScorers.pks)
  const getRawLeastPKs = Math.min(...distributeScorers.pks)    
  const getRawMostAssists = Math.max(...distributeScorers.assists)
  const getRawLeastAssists = Math.min(...distributeScorers.assists)    
  const getRawMostMatch = Math.max(...distributeScorers.matches)
  const getRawLeastMatch = Math.min(...distributeScorers.matches)    
  const getRawMostMins = Math.max(...distributeScorers.mins)
  const getRawLeastMins = Math.min(...distributeScorers.mins)    

  console.log('origin', getRawMostGoals);
  console.log('origin', getRawLeastGoals);
  console.log('origin', getRawMostPKs);
  console.log('origin', getRawLeastPKs);
  console.log('origin', getRawMostAssists);
  console.log('origin', getRawLeastAssists);
  console.log('origin', getRawMostMatch);
  console.log('origin', getRawLeastMatch);
  console.log('origin', getRawMostMins);
  console.log('origin', getRawLeastMins);

  goals.setAttribute('max', getRawMostGoals);

  function remove_children() {
    const parent = document.querySelector('#premierLeague tbody');
    while(parent.firstChild)  {
      parent.firstChild.remove()
    }
  }

  // document.addEventListener('touchstart', onTouchStart, {passive: true});

  goals.addEventListener('input', function(e) {
    const eValue = e.target.value;
    console.log(this);
    goals.setAttribute('value', eValue);
    e.target.nextElementSibling.value = eValue;
    remove_children();
    const filterdScorers = scorers.filter( s => s.goals >= eValue );

    for (const index of filterdScorers.keys()) {
      // create a new tr, td element
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

      // add the text node to the newly created td
      newTdIdx.appendChild(newContentIdx);
      newTdRank.appendChild(newContentRank);
      newTdPlayer.appendChild(newContentPlayer);
      newTdClub.appendChild(newContentClub);
      newTdGoals.appendChild(newContentGoals);
      newTdPKs.appendChild(newContentPKs);
      newTdAssists.appendChild(newContentAssists);
      newTdMatches.appendChild(newContentMatches);
      newTdMins.appendChild(newContentMins);

      // add the element(td) node to the newly created tr
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

    // add a new empty array to hold the filtered data.
    const getFilterRank = [];
    const getFilterPlayer = [];
    const getFilterClub = [];
    const getFilterGoals = [];
    const getFilterPKs = [];
    const getFilterAssists = [];
    const getFilterMatches = [];
    const getFilterMins = [];

    // The value corresponding to the key of the object is added as an element of an empty array.
    for (const iterator of filterdScorers) {
      getFilterRank.push(iterator.rank);
      getFilterPlayer.push(iterator.player);
      getFilterClub.push(iterator.club);
      getFilterGoals.push(iterator.goals);
      getFilterPKs.push(iterator.pks);
      getFilterAssists.push(iterator.assists);
      getFilterMatches.push(iterator.matches);
      getFilterMins.push(iterator.mins);
    }

    // Creates an empty object to hold an array with added values.
    // Add properties (key, value) to the created empty object.
    const collectedScorers = {}
    collectedScorers.rank = getFilterRank;
    collectedScorers.player = getFilterPlayer;
    collectedScorers.club = getFilterClub;
    collectedScorers.goals = getFilterGoals;
    collectedScorers.pks = getFilterPKs;
    collectedScorers.assists = getFilterAssists;
    collectedScorers.matches = getFilterMatches;
    collectedScorers.mins = getFilterMins;

    // filtered item values
    const getGoals = eValue;
    const getMostGoals = Math.max(...collectedScorers.goals)
    const getLeastGoals = Math.min(...collectedScorers.goals)
    const getMostPKs = Math.max(...collectedScorers.pks)
    const getLeastPKs = Math.min(...collectedScorers.pks)    
    const getMostAssists = Math.max(...collectedScorers.assists)
    const getLeastAssists = Math.min(...collectedScorers.assists)    
    const getMostMatch = Math.max(...collectedScorers.matches)
    const getLeastMatch = Math.min(...collectedScorers.matches)    
    const getMostMins = Math.max(...collectedScorers.mins)
    const getLeastMins = Math.min(...collectedScorers.mins)    

    // console.log('most goals: ', getMostGoals);
    // console.log('least goals: ', getLeastGoals);
    // console.log('most PKs: ', getMostPKs);
    // console.log('least PKs: ', getLeastPKs);
    // console.log('most Assists: ', getMostAssists);
    // console.log('least Assists: ', getLeastAssists);
    // console.log('most Match: ', getMostMatch);
    // console.log('least Match: ', getLeastMatch);
    // console.log('most Match: ', getMostMins);
    // console.log('least Match: ', getLeastMins);

    function find_player(value) {
      const mostGoalsPlayer = filterdScorers.filter( s => s.goals === getMostGoals );
      const leastGoalsPlayer = filterdScorers.filter( s => s.goals === getLeastGoals );
      const mostPksPlayer = filterdScorers.filter( s => s.pks === getMostPKs );
      const leastPksPlayer = filterdScorers.filter( s => s.pks === getLeastPKs );
      
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
      } else if ( value === getMostPKs ) {
        return getPlayer(mostPksPlayer);
      } else if ( value === getLeastPKs ) {
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
      <dd>Among the players who scored more than <strong>${getGoals}</strong> goal(s), <strong>${find_player(getMostPKs).join(', ')}</strong> is the player who took the most penalty kicks.</dd>
      <dd>Among the players who scored more than <strong>${getGoals}</strong> goal(s), <strong>${find_player(getLeastPKs).join(', ')}</strong> is the player who took the least penalty kicks.</dd>
      `
    ]

    details.innerHTML = totalGoals;

    goals.setAttribute('min', getRawLeastGoals);
    goals.setAttribute('max', getMostGoals);
    scoreTableFooter.style.display = '';
  })

  viewMode.addEventListener('click', (event) => {
    const body = document.body;
    const classes = viewMode.classList;
    const textContent = imageMode.textContent;
    const lastClassName = classes[classes.length - 1];
    const isImageMode = Boolean(imageMode.textContent === "🥅 Image Off");
    console.log(isImageMode);

    if(lastClassName === 'light' && textContent === '🥅 Image Off') {
      changeAll(`dark`, `🌞 Light`, `dark-theme`, `light-theme`);
    }
    if(lastClassName === 'light' && textContent === '🥅 Image On') {
      console.log('A');
    }

    if(lastClassName === 'dark' && textContent === '🥅 Image Off') {
      changeAll(`light`, `🌚 Dark`, `light-theme`, `dark-theme`);
    }
    if(lastClassName === 'dark' && textContent === '🥅 Image On') {
      console.log('B');
    }

    function changeAll(class1, text1, class2, class3) {
      viewMode.classList.add(class1);
      viewMode.classList.remove(lastClassName);
      viewMode.textContent = text1;
      body.classList.add(class2);
      body.classList.remove(class3);
    }
  });

  imageMode.addEventListener('click', (event) => {

    const body = document.body;
    const classes = imageMode.classList;
    const textContent = imageMode.textContent;
    const lastClassName = classes[classes.length - 1];

    // image mode: on & body's className: light-theme
    // image mode: off & body's className: light-theme
    if(lastClassName === 'on' && body.className === "light-theme") {
      console.log("1");
      imageMode.classList.add('off');
      imageMode.classList.remove('on');
      imageMode.textContent = '🥅 Image On';
      body.style.background = '#ffffff';
    } else if(lastClassName === 'off' && body.className === "light-theme") {
      console.log("2");
      imageMode.classList.add('on');
      imageMode.classList.remove('off');
      imageMode.textContent = '🥅 Image Off';
      body.removeAttribute('style');
    }

    // image mode: on & body's className: dark-theme
    // image mode: off & body's className: dark-theme
    if(lastClassName === 'on' && body.className === "dark-theme") {
      console.log("3");
      imageMode.classList.add('off');
      imageMode.classList.remove('on');
      imageMode.textContent = '🥅 Image On';
      body.style.background = '#000000';
    } else if(lastClassName === 'off' && body.className === "dark-theme") {
      console.log("4");
      imageMode.classList.add('on');
      imageMode.classList.remove('off');
      imageMode.textContent = '🥅 Image Off';
      body.removeAttribute('style');
    }
  });


  language.onclick = function(){ alert(`Service is being prepared.`); };
  settings.onclick = function(){ alert(`Service is being prepared.`); };

  console.log(screen.width);
  console.log(screen.height);

})();
