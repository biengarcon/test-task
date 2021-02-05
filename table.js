(function () {
    localStorage.getItem("event", JSON.stringify("event"))
    const events = JSON.parse(localStorage.getItem("event")) || [];
    class Calendar {
      constructor(events, elem) {
        this.events = events;
        this.nodesArray = Array.from(document.querySelectorAll('td'));
        this.item = [];
        this.filteredEvents = [];
        this.elem = elem;
        elem.onclick = this.onClick.bind(this)
        }

        
        filterEvents(members) {
          if(members.value) {
            this.filteredEvents = this.events.filter((p) => p.participants === members.value);
            if (members.value === 'all') {
              return this.showEvents(events);
            }
            return this.showEvents(this.filteredEvents, true);
          }
        }

        deleteEvent(k) {
          if(confirm('You want to delete event?')) {
            const el = k.parentNode.parentNode;
            this.filteredEvents = this.events.filter((item) => item.time !== el.dataset.time && item.day !== el.dataset.indexday);
            el.innerHTML = '';
            localStorage.clear()
            localStorage.setItem('events', JSON.stringify(this.filteredEvents))
          }
        } 

        showEvents(events, filter = null) {
          if (filter || !events.length) {
            const eventsCells = document.querySelectorAll('.eventCell');
            eventsCells.forEach(e => {
              e.parentElement.innerHTML = '';
            });
          }
          if(events.length) {
            events.forEach((el) => {
              this.item = this.nodesArray.filter((ev) => el.time === ev.dataset.time && el.day === ev.dataset.indexday)[0];
              this.item.innerHTML = `
              <div class="eventCell">
                <span class="text">${el.eventName}</span>
                <span class="delete" data-action="deleteEvent">&times</span>
              </div>`
            })
          }
        }       
        onClick(e) {
          let action = e.target.dataset.action;
          if(action) {
            this[action](e.target)
          }
        }
    }
  
    const calendar = new Calendar(events, document);
  
    calendar.showEvents(events);
  
  })();
