document.addEventListener('click', function(){


      let pics = [
            "./img/applesin.jpg",
            "./img/banana.jpg",
            "./img/grapes.jpg",
            "./img/kiwi.jpg",
            "./img/mango.jpg",
            "./img/mixfruit.jpg",
            "./img/peach.jpg"
      ]

      let btn = document.getElementById('btn');
      let img = document.getElementById('img')
      counter = 1;
      btn.addEventListener('click', function(){
            if(counter === 7){
                  counter = 0
            }
            img.src = pics[counter]
            counter = counter + 1
      })
})