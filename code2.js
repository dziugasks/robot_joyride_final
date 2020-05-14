gdjs.GameOverCode = {};
gdjs.GameOverCode.GDBackgroundObjects1= [];
gdjs.GameOverCode.GDBackgroundObjects2= [];
gdjs.GameOverCode.GDTextBoxObjects1= [];
gdjs.GameOverCode.GDTextBoxObjects2= [];
gdjs.GameOverCode.GDGameNameObjects1= [];
gdjs.GameOverCode.GDGameNameObjects2= [];
gdjs.GameOverCode.GDInstructionsObjects1= [];
gdjs.GameOverCode.GDInstructionsObjects2= [];
gdjs.GameOverCode.GDBeginTextObjects1= [];
gdjs.GameOverCode.GDBeginTextObjects2= [];
gdjs.GameOverCode.GDButtonObjects1= [];
gdjs.GameOverCode.GDButtonObjects2= [];
gdjs.GameOverCode.GDMenuBoxObjects1= [];
gdjs.GameOverCode.GDMenuBoxObjects2= [];
gdjs.GameOverCode.GDHighScoreObjects1= [];
gdjs.GameOverCode.GDHighScoreObjects2= [];
gdjs.GameOverCode.GDScoreTextObjects1= [];
gdjs.GameOverCode.GDScoreTextObjects2= [];
gdjs.GameOverCode.GDHighScoreNumberObjects1= [];
gdjs.GameOverCode.GDHighScoreNumberObjects2= [];
gdjs.GameOverCode.GDScoreNumberObjects1= [];
gdjs.GameOverCode.GDScoreNumberObjects2= [];
gdjs.GameOverCode.GDNewHighScoreObjects1= [];
gdjs.GameOverCode.GDNewHighScoreObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.GameOverCode.GDButtonObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDHighScoreObjects1Objects = Hashtable.newFrom({"HighScore": gdjs.GameOverCode.GDHighScoreObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDHighScoreNumberObjects1Objects = Hashtable.newFrom({"HighScoreNumber": gdjs.GameOverCode.GDHighScoreNumberObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDNewHighScoreObjects1Objects = Hashtable.newFrom({"NewHighScore": gdjs.GameOverCode.GDNewHighScoreObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.GameOverCode.GDButtonObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.GameOverCode.GDButtonObjects1});gdjs.GameOverCode.eventsList0x5b70b8 = function(runtimeScene) {

{

gdjs.GameOverCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


{
gdjs.GameOverCode.GDScoreNumberObjects1.createFrom(runtimeScene.getObjects("ScoreNumber"));
{for(var i = 0, len = gdjs.GameOverCode.GDScoreNumberObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreNumberObjects1[i].setString("\n" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.GameOverCode.GDGameNameObjects1.createFrom(runtimeScene.getObjects("GameName"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDGameNameObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDGameNameObjects1[i].getVariableNumber(gdjs.GameOverCode.GDGameNameObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameOverCode.condition1IsTrue_1.val = true;
        gdjs.GameOverCode.GDGameNameObjects1[k] = gdjs.GameOverCode.GDGameNameObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDGameNameObjects1.length = k;}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDBeginTextObjects1.createFrom(runtimeScene.getObjects("BeginText"));
gdjs.GameOverCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));
/* Reuse gdjs.GameOverCode.GDGameNameObjects1 */
gdjs.GameOverCode.GDHighScoreObjects1.length = 0;

gdjs.GameOverCode.GDHighScoreNumberObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDHighScoreObjects1Objects, 570, 348, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDHighScoreNumberObjects1Objects, 651, 393, "");
}{for(var i = 0, len = gdjs.GameOverCode.GDHighScoreNumberObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHighScoreNumberObjects1[i].setString("\n" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDButtonObjects1[i].setPosition(575,469);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDBeginTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDBeginTextObjects1[i].setPosition(625,481);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDGameNameObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameNameObjects1[i].returnVariable(gdjs.GameOverCode.GDGameNameObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.GameOverCode.GDGameNameObjects1.createFrom(runtimeScene.getObjects("GameName"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDGameNameObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDGameNameObjects1[i].getVariableNumber(gdjs.GameOverCode.GDGameNameObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameOverCode.condition1IsTrue_1.val = true;
        gdjs.GameOverCode.GDGameNameObjects1[k] = gdjs.GameOverCode.GDGameNameObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDGameNameObjects1.length = k;}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDGameNameObjects1 */
gdjs.GameOverCode.GDNewHighScoreObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDNewHighScoreObjects1Objects, 577, 360, "");
}{for(var i = 0, len = gdjs.GameOverCode.GDGameNameObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameNameObjects1[i].returnVariable(gdjs.GameOverCode.GDGameNameObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.GameOverCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDBeginTextObjects1.createFrom(runtimeScene.getObjects("BeginText"));
{for(var i = 0, len = gdjs.GameOverCode.GDBeginTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDBeginTextObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.GameOverCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDBeginTextObjects1.createFrom(runtimeScene.getObjects("BeginText"));
{for(var i = 0, len = gdjs.GameOverCode.GDBeginTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDBeginTextObjects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "161535__robinhood76__03626-monster-swallows-dinosaur.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Life is Strange Short Menu Music II.mp3", true, 100, 1);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "160421__bigkahuna360__electrical-shock-zap.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}}

}


}; //End of gdjs.GameOverCode.eventsList0x5b70b8


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDTextBoxObjects1.length = 0;
gdjs.GameOverCode.GDTextBoxObjects2.length = 0;
gdjs.GameOverCode.GDGameNameObjects1.length = 0;
gdjs.GameOverCode.GDGameNameObjects2.length = 0;
gdjs.GameOverCode.GDInstructionsObjects1.length = 0;
gdjs.GameOverCode.GDInstructionsObjects2.length = 0;
gdjs.GameOverCode.GDBeginTextObjects1.length = 0;
gdjs.GameOverCode.GDBeginTextObjects2.length = 0;
gdjs.GameOverCode.GDButtonObjects1.length = 0;
gdjs.GameOverCode.GDButtonObjects2.length = 0;
gdjs.GameOverCode.GDMenuBoxObjects1.length = 0;
gdjs.GameOverCode.GDMenuBoxObjects2.length = 0;
gdjs.GameOverCode.GDHighScoreObjects1.length = 0;
gdjs.GameOverCode.GDHighScoreObjects2.length = 0;
gdjs.GameOverCode.GDScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDHighScoreNumberObjects1.length = 0;
gdjs.GameOverCode.GDHighScoreNumberObjects2.length = 0;
gdjs.GameOverCode.GDScoreNumberObjects1.length = 0;
gdjs.GameOverCode.GDScoreNumberObjects2.length = 0;
gdjs.GameOverCode.GDNewHighScoreObjects1.length = 0;
gdjs.GameOverCode.GDNewHighScoreObjects2.length = 0;

gdjs.GameOverCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
