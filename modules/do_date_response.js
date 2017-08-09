var moment = require('moment');

module.exports = function do_date_response(date_str){
  var s_natural = null;
  var s_unix = null;
  if(isNaN(date_str)){
    if(moment(date_str).isValid()){
      s_natural = moment(date_str).format("MMMM, D YYYY");
      s_unix = moment(date_str).unix();
    }
  }else if(Number.isInteger(Number(date_str))){
    if(moment.unix(Number(date_str)).isValid()){
      s_natural = moment.unix(date_str).format("MMMM, D YYYY");
      s_unix = Number(date_str);
    }    
  }
  
  var json = {  
    natural: s_natural,  
    unix: s_unix
  };
  
  return JSON.stringify(json, null, '  ');
}