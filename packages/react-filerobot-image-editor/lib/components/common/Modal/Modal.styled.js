import styled,{css}from"styled-components";import modalTitle from"@scaleflex/ui/core/modal-title";import{Modal,ModalActions}from"@scaleflex/ui/core";import{Color as PC}from"@scaleflex/ui/utils/types/palette";import{FontVariant as FV}from"@scaleflex/ui/utils/types/typography";var StyledModal=styled(Modal).withConfig({componentId:"sc-kpjpf5-0"})(["width:",";max-width:unset;"],function(a){var b=a.width;return b||"300px"}),StyledModalTitle=styled(modalTitle).withConfig({componentId:"sc-kpjpf5-1"})(function(a){var b=a.theme,c=a.isWarning;return css(["padding-bottom:0;.SfxModalTitle-Icon{background-color:",";}.SfxModalTitle-LabelPrimary{margin-bottom:24px;",";}.SfxModalTitle-LabelSecondary{",";text-align:center;}"],c&&b.palette[PC.Orange_0_1_Overlay],b.typography.font[FV.TitleH3],b.typography.font[FV.TextLarge])}),StyledModalActions=styled(ModalActions).withConfig({componentId:"sc-kpjpf5-2"})(["gap:12px;padding:24px;.SfxButton-root{flex:1;margin:0;height:40px;}"]);export{StyledModal,StyledModalTitle,StyledModalActions};