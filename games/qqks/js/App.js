/*����״̬/��Ϊ������*/

//��ʼ����ͣ������������ֹͣ����
function App(){
    var _self = this;
    _self.isPaper=(function(){
        appConfig.canvas=$$(appConfig.container);
        appConfig.canvas.width = window.innerWidth;
        appConfig.canvas.height = window.innerHeight;

        if (!appConfig.canvas.getContext) {
            return false;
        }
        appConfig.context = appConfig.canvas.getContext('2d');
        return true;
    })();
}
//dsdsds
/*��ʼ*/
App.prototype.start=function(){
    var _self = this;
    if(!appConfig.isShowDebugInfo){
        $$("debug-tool").style.display="none";
    }
    if(_self.isPaper){
        _self.game= new game();
        var touche = new touch();
        touche.eventHandle("add", document, "touchstart", function (e) {
            console.info("touchstart event");
        }, false);
        _self.game.start();
    }
};

/*��ͣ*/
App.prototype.pause=function(){

};

/*��������*/
App.prototype.restart=function(){

};

/*ֹͣ*/
App.prototype.stop=function(){

};


var application=(function () {
    var appInstance = new App();
    return appInstance;
})();
application.start();