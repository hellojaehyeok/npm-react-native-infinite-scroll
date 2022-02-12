"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _this=void 0,_jsxFileName="/Users/songjaehyeog/Desktop/github/Opensource/rn_infinite_scroll/npm-react-native-infinite-scroll/src/lib/reverseInfiniteScroll.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var R_InfiniteScroll=function R_InfiniteScroll(_ref){var children=_ref.children,onScrollEnd=_ref.onScrollEnd;var chatScrollRef=(0,_react.useRef)();var chatContentRef=(0,_react.useRef)();var _useState=(0,_react.useState)(0),_useState2=(0,_slicedToArray2["default"])(_useState,2),totalChatHeight=_useState2[0],setTotalChatHeight=_useState2[1];var onScrollChat=function(){var _ref2=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(e){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(e.nativeEvent.contentOffset.y==0){setTotalChatHeight(e.nativeEvent.contentSize.height);onScrollEnd();}case 1:case"end":return _context.stop();}}},_callee);}));return function onScrollChat(_x){return _ref2.apply(this,arguments);};}();var onChangeChatSize=function onChangeChatSize(e){chatContentRef.current.measure(function(x,y,width,height){chatScrollRef.current.scrollTo({x:0,y:height-totalChatHeight,animated:false});});};return _react["default"].createElement(_reactNative.ScrollView,{onScroll:onScrollChat,ref:chatScrollRef,onContentSizeChange:onChangeChatSize,__self:_this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:9}},_react["default"].createElement(_reactNative.View,{ref:chatContentRef,__self:_this,__source:{fileName:_jsxFileName,lineNumber:28,columnNumber:13}},children));};var _default=R_InfiniteScroll;exports["default"]=_default;