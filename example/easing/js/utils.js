var utils={};
utils.getMax=function(a,b){
    var max=a;
    if(b>max){
        max=b;
    }
    return max;
};

utils.getMin=function(a,b){
    var min= a;
    if(b<min){
        min=b;
    }
    return min;
};

utils.parseColor = function (color, toNumber) {
    if (toNumber === true) {
        if (typeof color === 'number') {
            return (color | 0); //chop off decimal
        }
        if (typeof color === 'string' && color[0] === '#') {
            color = color.slice(1);
        }
        return window.parseInt(color, 16);
    } else {
        if (typeof color === 'number') {
            color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
        }
        return color;
    }
};
//���빫ʽ��������
utils.caculateFormula=function(x,y){
  var formula={
      a:function(){

          return {x:'',y:''};
      }
  };
    return formula[type]();
};