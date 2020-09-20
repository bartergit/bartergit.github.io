let foo = (week, group, subject, teacher, type, lecture_hall, other = "") => {
  return { "week": week, group: group, "subject": subject, 
  "teacher": teacher, "type": type, "lecture_hall": lecture_hall, "other": other };
}

json = {
  "Понедельник":
  {
    "14.30–15.50": [
      foo("1н", "", "Чм", "Волков В.М.", "л", 606, [["https://edummf.bsu.by/mod/bigbluebuttonbn/view.php?id=8716", "edu"]]),
      foo("2н", "", "Инженерия и разр ПО", "Перез-Чернов А.Х.", "л", 606)],
    "16.00–17.20": [
      foo("", "а", "Построение и анализ алгоритмов", "Суздаль", "п", 417, [["https://app.gotomeeting.com/?meetingId=127957877", "meet"]]),
      foo("", "б", "ЧМ", "Проконина", "п", "414а")],
    "17.30-18.50": [foo("","", "Построение и анализ алгоритмов", "Суздаль", "л", "609", [["https://app.gotomeeting.com/?meetingId=127957877", "meet"]])],
    "19.00-20.20": [foo("","", "КМиСО", "Ромащенко Г.С.", "л", 609)]
  },
  "Вторник": {
    "14.30–15.50": [foo("", "", "Физическая культура", "", "", "")],
    "16.00–17.20": [
      foo("1н", "", "ДС Авт тестир ПО (Купревича)", "Шульга", "л", ""),
      foo("2н", "б", "ДС Авт тестир ПО (Купревича)", "Шульга", "п", "")],
    "17.30–18.50": [foo("1н", "а", "ДС Авт тестир ПО (Купревича)", "Шульга", "", "")]
  },
  "Среда": {
  	"11.15–12.35": [foo("", "", "Физическая культура", "", "", "")],
  	"13.00–14.20": [foo("", "а", "ФАН", "Чесалин В.И.", "п", 408, [[" https://zoom.us/j/9493937295", "zoom"], "139006"] )], 
  	"14.30–15.50": [
  		foo("1н", "а", "Инженерия и разр ПО", "Перез-Чернов", "п", 404),
  		foo("1н", "б", "Комп сети", "Мухаметов", "п", 409),
  		foo("2н", "а", "Комп сети", "Мухаметов", "п", 409),
  		foo("2н", "б", "Инженерия и разр ПО", "Перез-Чернов", "п", 404),],
    "16.00–17.20": [
		foo("", "а", "ЧМ", "Якименко Т.С.", "п", 322),
		foo("", "б", "Построение и анализ алгоритмов", "Гуревский", "п", 405)],
    "17.30–18.50": [foo("", "", "УМФ", "Ломовцев Ф.Е.", "п", 416, [["https://edummf.bsu.by/course/view.php?id=286", "edu"]])],
    "19.00–20.20": [
    	foo("1н", "", "ДС C# (проектор)", "Кравчук", "л", 419),
    	foo("2н", "а", "ДС C#", "Кравчук", "п", 409),]
  },
  "Пятница": {
  	"13.00–14.20": [foo("", "", "Комп сети", "Мухаметов", "л", 606, 
  		[["https://us02web.zoom.us/j/86481395842?pwd=WUNHZ0dlQnh..", "zoom"], "bsu-ks"])], 
  	"14.30–15.50": [foo("", "", "УМФ", "Ломовцев Ф.Е.", "л", 419)],
    "16.00–17.20": [foo("", "", "ФАН", "Чесалин", "л", 609),],
    "17.30–18.50": [
    	foo("", "а", "КМиСО", "Ромащенко", "п", 404),
    	foo("2н", "б", "ДС C#", "Кравчук", "п", 409)],
    "19.00–20.20": [foo("", "б", "КМиСО", "Гулецкий", "п", 405),]
  },
  "Суббота": {
    "08.15–09.35": [foo("1н", "", "ЭТ", "Самаль", "л", 606)],
    "09.45–11.05": [foo("", "б", "ФАН", "Яблонская", "п", 408),],
    "11.15–12.35": [foo("", "", "ЭТ (с 05.10)", "Чайко", "п", 120)],
    "13.00–14.20": [foo("2н", "", "Социология", "Волнистая М.Г.", "л", 606, [["https://eduffsn.bsu.by/course/view.php?id=580", "edu"]]),
    				foo("1н", "", "Социалогя", "Волнистая М.Г.","п", 606, [["https://eduffsn.bsu.by/course/view.php?id=580", "edu"]])],
  }
}

day_of_week = {"Понедельник": 1, "Вторник": 2, "Среда": 3, "Пятница": 5, "Суббота": 6}

var timetable = new Vue({
  el: '#table',
  data: {
    data: json,
    week: "",
    group: "а",
    search: "",
  },
  created: function () {
    this.week = this.calc_week();
  },
  methods: {
    calc_week: function(){
      let startDate = new Date("31 August 2020, 00:00:00");
      let difference = ((new Date()).getTime() - startDate.getTime());
      let day = Math.floor(difference/(1000 * 60 * 60  * 24)) % 14;
      if (day < 7)
        return "1н";
      else
        return "2н";
    },
    calc: function (objs) {
      let len = objs.length;
      for (let i = 0; i < objs.length; i++) {
        if (objs[i].group == this.oposite(this.group) || objs[i].week == this.oposite(this.week)) {
          len--;
        }
      }
      return len;
    },
    nested_len: function (objs) {
      let len = 0;
      for (let key in objs) {
        len += this.calc(objs[key]);
      }
      return len;
    },
    is_seen: function (obj) {
      return (obj.group == this.group || obj.group == "") && (obj.week == "" || obj.week == this.week);
    },
    is_seen_day: function (objs, obj) {
      for (let key in objs) {
        for (let i = 0; i < objs[key].length; i++) {
          if (this.is_seen(objs[key][i])) {
            return objs[key][i] == obj;
          }
        }
      }
    },
    is_seen_time: function (objs, obj) {
      for (let i = 0; i < objs.length; i++) {
        if (this.is_seen(objs[i])) {
          return objs[i] == obj;
        }
      }
    },
    oposite: function (param) {
      if (param == "")
        return true;
      if (param.includes("1н"))
        return "2н";
      if (param.includes("2н"))
        return "1н";
      if (param.includes("а"))
        return "б";
      if (param.includes("б"))
        return "а";
    },
    is_searched: function(param){
    	console.log(param);
      if (this.search == "") return false;
      return (param.toString().toLowerCase().includes(this.search.toLowerCase()));
    },
    is_current: function(time, day){
      let today = new Date();
      if (day_of_week[day] != today.getDay())
        return false;
      var today_str = today.toLocaleDateString('en-GB', {  
        day : 'numeric',
        month : 'short',
        year : 'numeric'
      })  
      var first_date = new Date(today_str + ", " + time.substring(0,5).replace(".",":")).getTime();
      var sec_date = new Date(today_str + ", " + time.substring(6).replace(".",":")).getTime();
      return today.getTime() >= first_date && today.getTime() <= sec_date;
    },
    is_link: function(item){
    	return item[0].includes("http");
    }
  }
})