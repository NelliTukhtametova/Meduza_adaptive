window.onload = () => {
  var publicationDate = new Date();
  function showTime(publicationDate) {
	   var nowDate = Date.now();       
	   var differencDate = nowDate - publicationDate;	
	   var minutes = Math.round(differencDate / (1000 * 60));
	   var hours = Math.round(differencDate / (1000 * 60 * 60));
	   var day =  Math.round(differencDate /  (24 * 60 * 60 * 1000));
	   var month = Math.round(differencDate / 2.628e+9);
	   var years = Math.round(differencDate / 3.154e+10); 
	
	if(minutes >= 0 && minutes < 60){
    switch(minutes) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
      return minutes + ' минуту назад';
      break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
      return minutes + ' минуты назад';
      break;
      default:
      return minutes + ' минут назад';
    }
  }else if(hours >= 1 && hours <= 24){ 
    switch(hours){
      case 1:
      case 21:
      return hours + ' час назад';
      break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      return hours + ' часа назад';
      break;
      default:
      return hours + ' часов назад';
    }
  }else if(day >= 1 && day < 30){
    switch(day){
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      return day + ' дня назад';
      break;
      case 1:
      case 21:
      return day + ' день назад';
      break;
      default:
      return day + ' дней назад';
    }
  }else if(month >= 1 && month < 12) {
    switch(month){
      case 1:
      return month + ' месяц назад';
      break;
      case 2:
      case 3:
      case 4:
      return month + ' месяца назад';
      break;
      default:
      return month + ' месяцев назад';
    }
  }else if(years >= 1) {
    switch(years){
      case 1:
      return years + " год назад";
      break;
      case 2:
      case 3:
      case 4:
      return years + " годa назад";
      break;
      default:
      return years + " лет назад";
    }
  }
}

var time = document.getElementsByTagName('time');
time[0].innerHTML = showTime(new Date(2021, 2, 3, 23, 2));
time[1].innerHTML = showTime(new Date(2021, 2, 3, 22, 5));
time[2].innerHTML = showTime(new Date(2021, 2, 3, 20, 10));
time[3].innerHTML = showTime(new Date(2021, 2, 3, 13, 18));
time[4].innerHTML = showTime(new Date(2021, 2, 2, 19, 0));
time[5].innerHTML = showTime(new Date(2021, 1, 28, 15, 0));
time[6].innerHTML = showTime(new Date(2021, 1, 21, 13, 0));
time[7].innerHTML = showTime(new Date(2021, 1, 9, 1, 8));
time[8].innerHTML = showTime(new Date(2021, 1, 2, 2, 9));
time[9].innerHTML = showTime(new Date(2020, 12, 4, 17, 9));
time[10].innerHTML = showTime(new Date(2020, 1, 2 , 21, 14));


let dollar = document.querySelector('.dollar');
let euro = document.querySelector('.euro');
let total_ru = document.querySelector('.total_ru');
let total = document.querySelector('.total');

let val = new XMLHttpRequest();
val.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js', false);
val.send();
if(val.status != 200) {
  return null;
}else{ 
    let Valute = JSON.parse(val.responseText);
    dollar.innerHTML = Valute.Valute.USD.Value.toFixed(2).replace(/[\.\/]/g,', ');
    euro.innerHTML = Valute.Valute.EUR.Value.toFixed(2).replace(/[\.\/]/g,', ');
  }

  let cor = new XMLHttpRequest();
  cor.open('GET', 'https://api.covid19api.com/summary', false);
  cor.send();
  if(cor.status != 200) {
    return null;
  }else{ 
    let Corona = JSON.parse(cor.responseText);
    total_ru.innerHTML = Corona.Countries[140].TotalConfirmed.toLocaleString() + '.';
    total.innerHTML = Corona.Global.TotalConfirmed.toLocaleString() + '.  ';
  }


let fa_bars = document.querySelector('.fa-bars');
let header_nav = document.querySelector('.header_nav');
let page = document.querySelector('.page');
let item_none = document.querySelector('.item_none');
let close = document.querySelector('.close');

fa_bars.onclick = function show(){
  header_nav.style.display = "flex";
  header_nav.className  += ' show';
  document.body.style.overflow = 'hidden';
  item_none.style.display = 'inline';
  fa_bars.style.display = 'none';
  close.style.display = 'block';
}
const mediaQuery = window.matchMedia('(min-width: 1024px)')
function handleTabletChange(e) {
  if (e.matches) {
    header_nav.style.display = "flex";
  }else{header_nav.style.display = "none";}
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

close.onclick = () => {
  header_nav.style.display = "none";
  header_nav.classList.remove('show');
  document.body.style.overflow = 'visible';
  item_none.style.display = 'none';
  fa_bars.style.display = 'block';
  close.style.display = 'none';
}
}










