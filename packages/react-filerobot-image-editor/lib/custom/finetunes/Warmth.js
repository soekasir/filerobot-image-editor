import Konva from"konva";import{Factory as KonvaFactory}from"konva/lib/Factory";import{getNumberValidator as konvaGetNumberValidator}from"konva/lib/Validators";function Warmth(a){for(var b=this.warmth(),c=a.data,d=c.length,e=0;e<d;e+=4)c[e]+=b,c[e+2]-=b}Warmth.finetuneName="Warmth";export default Warmth;KonvaFactory.addGetterSetter(Konva.Image,"warmth",0,konvaGetNumberValidator(),KonvaFactory.afterSetFilter);