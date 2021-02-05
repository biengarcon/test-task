(function() {

  
  const times = [10,11, 12, 13, 14, 15, 16, 17, 18];
  
  
  function createTable() {
    const table = document.querySelector('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
  
    
    for(let key of times) {
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        tr.appendChild(th);
        th.appendChild(text)
        tbody.appendChild(tr);
  
  
        for(let j = 0; j < 5; j++) {
          if(key < 19) {
            createTd(tr, key, j)
          }
        }
      }
    }
    
    createTable()  // call 
    
          // this function 
    
      /**
       * Function createTd - function was created by creating table cells
       * @param {*} row tr element
       * @param {*} key 
       * @param {*} i 
       */

    function createTd(row, key, i) {
      let cell = document.createElement('td')
      let cellText = document.createTextNode('');
      cell.appendChild(cellText);
      row.appendChild(cell);
      cell.dataset.time = key;
      cell.dataset.indexday = i;
    }
    
  })()
