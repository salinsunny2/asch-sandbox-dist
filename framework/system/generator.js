"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Generator(e,r){library=r,e(null,self=this)}var _stringify=require("babel-runtime/core-js/json/stringify"),_stringify2=_interopRequireDefault(_stringify),private_={},self=null,library=null,modules=null;Generator.prototype.onBind=function(e){(modules=e).api.dapps.getGenesis(function(e,r){if(e)return library.logger("Failed to get genesis block",e);var i=modules.blockchain.accounts.getExecutor();if(!i)return library.logger("Secret is null");r.authorId,i.address;var t={delegate:i.keypair.publicKey,height:1,pointId:r.pointId,pointHeight:r.pointHeight,count:0,transactions:[]},n=modules.logic.block.getBytes(t);t.id=modules.api.crypto.getId(n),t.signature=modules.api.crypto.sign(i.keypair,n),library.logger((0,_stringify2.default)(t,null,2))})},module.exports=Generator;