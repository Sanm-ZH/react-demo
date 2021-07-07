//获取出生年龄，周岁、月、天、时、分、秒
export const getGrowAge = (birthday, type) => {
  const now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let day = now.getDate()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()

  const myDate = new Date(birthday)
  const myYear = myDate.getFullYear()
  const myMonth = myDate.getMonth() + 1
  const myDay = myDate.getDate()
  const myHour = myDate.getHours()
  const myMinute = myDate.getMinutes()
  const mySecond = myDate.getSeconds()

  let gapSecond = second - mySecond
  if(gapSecond < 0){
    minute -= 1
    gapSecond = 60 - mySecond + second
  }
  //gapSecond = gapSecond<10? ("0"+gapSecond): gapSecond;
  let gapMinute = minute - myMinute
  if(gapMinute < 0){
    hour -= 1
    gapMinute = 60 - myMinute + minute
  }
  //gapMinute = gapMinute<10? ("0"+gapMinute): gapMinute;
  let gapHour = hour - myHour
  if(gapHour < 0){
    day -= 1
    gapHour = 24 - myHour + hour
  }
  //gapHour = gapHour<10? ("0"+gapHour): gapHour;
  let gapDay = day - myDay
  if(gapDay < 0){
    month -= 1
    gapDay = getDaysOfMonth(birthday) - myDay + day
  }
  //gapDay = gapDay<10? ("0"+gapDay): gapDay;
  let gapMonth = month - myMonth
  if(gapMonth < 0){
    year -= 1
    gapMonth = 12 - myMonth + month

  }
  //gapMonth = gapMonth<10? ("0"+gapMonth): gapMonth;
  let gapYear = year - myYear
  if(gapYear < 0){
    gapYear = 0
  }

  const age = gapYear > 0 ? gapYear + '岁 ' : ''
  const age1 = gapYear > 0 ? gapYear + '年 ' : ''
  const ageMonth = gapMonth > 0 ? gapMonth + '月 ' : ''
  const ageDay = gapDay > 0 ? gapDay + '天 ' : ''
  const ageHour = gapHour > 0 ? gapHour + '时 ' : ''
  const ageMinute = gapMinute > 0 ? gapMinute + '分 ' : ''
  const ageSecond = gapSecond > 0 ? gapSecond + '秒 ' : ''

  let result = ''

  switch (type) {
  case 'all':
    result = `${age}${ageMonth}${ageDay}${ageHour}${ageMinute}${ageSecond}`
    break
  case 'all1':
    result = `${age1}${ageMonth}${ageDay}${ageHour}${ageMinute}${ageSecond}`
    break
  case 'month':
    result = `${age}${ageMonth}`
    break
  case 'day':
    result = `${age}${ageMonth}${ageDay}`
    break
  case 'hour':
    result = `${age}${ageMonth}${ageDay}${ageHour}${ageMinute}${ageSecond}`
    break
  case 'minute':
    result = `${age}${ageMonth}${ageDay}${ageHour}${ageMinute}${ageSecond}`
    break
  case 'second':
    result = `${age}${ageMonth}${ageDay}${ageHour}${ageMinute}${ageSecond}`
    break
  default:
    result = `${age}`
    break
  }

  return result
}

//获取当月的天数
const getDaysOfMonth = dateStr => {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const mouth = date.getMonth() + 1
  let day = 0

  if(mouth === 2)  {
    day= isLeapYear(year) ? 29 : 28
  } else if(mouth === 1 || mouth === 3 || mouth === 5 ||
         mouth === 7 || mouth === 8 || mouth === 10 || mouth === 12) {
    day= 31
  } else {
    day= 30
  }
  return day
}

//判断是否为闰年
const isLeapYear = year => {
  return (year % 4 === 0 && year % 100 !== 0)||(year % 400 === 0)
}


export const isPCHandle = () => {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
