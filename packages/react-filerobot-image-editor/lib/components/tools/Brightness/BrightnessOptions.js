import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import React from"react";import Konva from"konva";import{useFinetune}from"../../../hooks";import restrictNumber from"../../../utils/restrictNumber";import Slider from"../../common/Slider";import{StyledSliderContainer,StyledSliderInput,StyledSliderLabel,StyledSliderWrapper}from"../tools.styled";var MIN_VALUE=-1,DEFAULT_VALUE={brightness:0},MAX_VALUE=1,sliderStyle={width:150,padding:0,margin:0},BrightnessOptions=function(a){var b,c,d=a.t,e=useFinetune(Konva.Filters.Brighten,DEFAULT_VALUE),f=_slicedToArray(e,2),g=f[0],h=f[1],i=function(a){h({brightness:restrictNumber(a,MIN_VALUE,MAX_VALUE)})};return React.createElement(StyledSliderContainer,{className:"FIE_brightness-option-wrapper"},React.createElement(StyledSliderLabel,{className:"FIE_brightness-option-label"},d("brightness")),React.createElement(StyledSliderWrapper,null,React.createElement(Slider,{className:"FIE_brightness-option",min:MIN_VALUE,step:.05,max:MAX_VALUE,width:"124px",value:null!==(b=g.brightness)&&void 0!==b?b:DEFAULT_VALUE.brightness,onChange:i,style:sliderStyle}),React.createElement(StyledSliderInput,{value:null!==(c=g.brightness)&&void 0!==c?c:DEFAULT_VALUE.brightness,onChange:function onChange(a){var b=a.target.value;return i(b)}})))};export default BrightnessOptions;