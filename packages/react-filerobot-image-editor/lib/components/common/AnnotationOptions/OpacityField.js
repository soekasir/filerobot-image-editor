import React from"react";import restrictNumber from"../../../utils/restrictNumber";import{Label}from"@scaleflex/ui/core";import{StyledSpacedOptionFields,StyledIconLabel,StyledOptionPopupContent}from"./AnnotationOptions.styled";import Slider from"../Slider";var MIN_PERCENTANGE=0,MAX_PERCENTANGE=1,OpacityField=function(a){var b=a.annotation,c=a.updateAnnotation,d=a.t,e=b.opacity,f=Math.round(100*e);return React.createElement(StyledOptionPopupContent,{disablePadding:!0},React.createElement(Label,null,d("transparency")),React.createElement(StyledSpacedOptionFields,null,React.createElement(Slider,{annotation:"%",onChange:function changeOpacity(a){c({opacity:restrictNumber(a/100,MIN_PERCENTANGE,MAX_PERCENTANGE)})},value:f,noMargin:!0}),React.createElement(StyledIconLabel,null,"".concat(f,"%"))))};export default OpacityField;