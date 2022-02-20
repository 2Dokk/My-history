let Body = {
    setColor: function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

let Links = {
    setColor: function(color){
        let alist = document.querySelectorAll('a');
        let i = 0
        while (i < alist.length){
            alist[i].style.color = color;
            i += 1;
        }
    }
}

function nightDayhandler(self){
    
    if (self.value === 'night'){
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Links.setColor('powderblue');
        document.querySelector('#WEB').style.color = 'white';
        self.value = 'day';
    
    
    } else if(self.value==='day'){
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Links.setColor('blue');
        document.querySelector('#WEB').style.color = 'black';
        self.value = 'night';
    }
}