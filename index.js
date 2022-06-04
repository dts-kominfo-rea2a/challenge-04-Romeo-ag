// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

const sortDate = (inDate)=>{
  buff=[];
  for(i=0; i<inDate.length; i++){
    buff.push(Date.parse(inDate[i])/1000);    
  }
  buff.sort();
  return buff.join("-");

}
// TODO: Buatlah fungsi createDate
const createDate = (inDate,pos)=>{  
  let result = "";
  if (pos == null){

return sortDate(inDate);
  }  else{
result=Date.parse(inDate[pos])/1000;
    return result.toString();
  }
  
  // console.log("argument count " + arguments.length);
  // console.log(arguments);
// console.log(Date.parse(inDate[pos]))
// return result;
};


// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
