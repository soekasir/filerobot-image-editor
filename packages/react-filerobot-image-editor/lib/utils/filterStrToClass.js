import Konva from"konva";import*as CustomFilters from"../custom/filters";var filterStrToClass=function(a){return a?CustomFilters[a]||Konva.Filters[a]:null};export default filterStrToClass;