(function() {

    class CreateEvents {
      constructor() {
        this.form = document.querySelector('#form');
        this.events = JSON.parse(localStorage.getItem('event')) || [];
        this.form.onsubmit = this.addActive.bind(this);
      }
  
      addActive(e) {
        if(e) {
          e.preventDefault()
          const elements = e.target.elements;
          let obj = {};
          for(let i = 0; i < elements.length; i++) {
            let item = elements[i];
            if(item.id) {
              obj[item.id] = item.value;
            }
          }
          let event = this.events.find((el) => el.day === obj.day && el.time === obj.time);
          if(event) {
            alert('Сhoose another time of event!')
          } else {
            this.events.push(obj);
            localStorage.setItem('event', JSON.stringify(this.events));
            window.location.href = './table.html';
          }
        }
      }
    }
    new CreateEvents().addActive()
  })()
