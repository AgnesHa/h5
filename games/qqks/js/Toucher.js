/**
 * ��Ļ��������󶨴����¼�
 */
function Toucher(){

};
/**
 * �¼�����
 * @param eventType ִ�в���
 * @param element �󶨵�Ԫ��
 * @param eType  �¼�����
 * @param handle �¼�������
 * @param bol �Ƿ�ð���ϸ�
 */
Toucher.prototype.eventHandle=function(eventType,element, eType, handle, bol){
    var eventHandle={
        add:function(element, eType, handle, bol) {
            if(element.addEventListener){
                element.addEventListener(eType, handle, bol);
            }else if(element.attachEvent){
                element.attachEvent("on"+eType, handle);
            }else{
                element["on"+eType] = handle;
            }
        },
        remove:function(element, eType, handle, bol) {
            if(element.addEventListener){
                element.removeEventListener(eType, handle, bol);
            }else if(element.attachEvent){
                element.detachEvent("on"+eType, handle);
            }else{
                element["on"+eType] = null;
            }
        }
    };
    eventHandle[eventType](element, eType, handle, bol);
};
