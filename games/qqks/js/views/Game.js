/*��������Ϸ����̨*/
//��ʼ����ͣ������������ֹͣ����
function Game(){

}
/*��ʼ*/
Game.prototype.start=function(){
    var toucher = new Toucher();
    toucher.eventHandle("add", document, "touchstart", function (e) {
        console.info("touchstart event");
    }, false);
};

/*��ͣ*/
Game.prototype.pause=function(){

};

/*��������*/
Game.prototype.restart=function(){

};

/*ֹͣ*/
Game.prototype.stop=function(){

};