gdjs.StartMenuCode = {};
gdjs.StartMenuCode.GDBackgroundObjects1= [];
gdjs.StartMenuCode.GDBackgroundObjects2= [];
gdjs.StartMenuCode.GDTextBoxObjects1= [];
gdjs.StartMenuCode.GDTextBoxObjects2= [];
gdjs.StartMenuCode.GDGameNameObjects1= [];
gdjs.StartMenuCode.GDGameNameObjects2= [];
gdjs.StartMenuCode.GDInstructionsObjects1= [];
gdjs.StartMenuCode.GDInstructionsObjects2= [];
gdjs.StartMenuCode.GDBeginTextObjects1= [];
gdjs.StartMenuCode.GDBeginTextObjects2= [];
gdjs.StartMenuCode.GDButtonObjects1= [];
gdjs.StartMenuCode.GDButtonObjects2= [];
gdjs.StartMenuCode.GDMenuBoxObjects1= [];
gdjs.StartMenuCode.GDMenuBoxObjects2= [];

gdjs.StartMenuCode.conditionTrue_0 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_0 = {val:false};
gdjs.StartMenuCode.conditionTrue_1 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_1 = {val:false};


gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.StartMenuCode.GDButtonObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.StartMenuCode.GDButtonObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.StartMenuCode.GDButtonObjects1});gdjs.StartMenuCode.eventsList0x5b70b8 = function(runtimeScene) {

{

gdjs.StartMenuCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition0IsTrue_0;
gdjs.StartMenuCode.condition0IsTrue_1.val = false;
gdjs.StartMenuCode.condition1IsTrue_1.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartMenuCode.condition0IsTrue_1.val ) {
{
gdjs.StartMenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.StartMenuCode.conditionTrue_1.val = true && gdjs.StartMenuCode.condition0IsTrue_1.val && gdjs.StartMenuCode.condition1IsTrue_1.val;
}
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.StartMenuCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
gdjs.StartMenuCode.GDBeginTextObjects1.createFrom(runtimeScene.getObjects("BeginText"));
{for(var i = 0, len = gdjs.StartMenuCode.GDBeginTextObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBeginTextObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.StartMenuCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
gdjs.StartMenuCode.GDBeginTextObjects1.createFrom(runtimeScene.getObjects("BeginText"));
{for(var i = 0, len = gdjs.StartMenuCode.GDBeginTextObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBeginTextObjects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Life is Strange Short Menu Music II.mp3", true, 100, 1);
}}

}


}; //End of gdjs.StartMenuCode.eventsList0x5b70b8


gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenuCode.GDBackgroundObjects1.length = 0;
gdjs.StartMenuCode.GDBackgroundObjects2.length = 0;
gdjs.StartMenuCode.GDTextBoxObjects1.length = 0;
gdjs.StartMenuCode.GDTextBoxObjects2.length = 0;
gdjs.StartMenuCode.GDGameNameObjects1.length = 0;
gdjs.StartMenuCode.GDGameNameObjects2.length = 0;
gdjs.StartMenuCode.GDInstructionsObjects1.length = 0;
gdjs.StartMenuCode.GDInstructionsObjects2.length = 0;
gdjs.StartMenuCode.GDBeginTextObjects1.length = 0;
gdjs.StartMenuCode.GDBeginTextObjects2.length = 0;
gdjs.StartMenuCode.GDButtonObjects1.length = 0;
gdjs.StartMenuCode.GDButtonObjects2.length = 0;
gdjs.StartMenuCode.GDMenuBoxObjects1.length = 0;
gdjs.StartMenuCode.GDMenuBoxObjects2.length = 0;

gdjs.StartMenuCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
