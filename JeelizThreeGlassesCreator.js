var _0x4970=['PMREMGenerator','glft/','material','GLTFLoader','envMap','MeshPhysicalMaterial','Mesh','compileEquirectangularShader','textures/','occluderURL','renderOrder','UnsignedByteType','RGBELoader','BufferGeometryLoader','dispose','traverse','add','royal_esplanade_1k.hdr','create_threejsOccluder','setDataType','setPath','load','Object3D','renderer','geometry','scene','glassesBranchesBent.gltf','MeshBasicMaterial'];(function(_0x1c9e9b,_0x4970ce){var _0x5120b2=function(_0x18d4ad){while(--_0x18d4ad){_0x1c9e9b['push'](_0x1c9e9b['shift']());}};_0x5120b2(++_0x4970ce);}(_0x4970,0xdc));var _0x5120=function(_0x1c9e9b,_0x4970ce){_0x1c9e9b=_0x1c9e9b-0x0;var _0x5120b2=_0x4970[_0x1c9e9b];return _0x5120b2;};'use strict';const JeelizThreeGlassesCreator=function(_0x18d4ad){function _0x3f9f7f(){var _0x55094f=new THREE['PlaneGeometry'](0x5,0x14,0x20);const _0x51d93b=new THREE[(_0x5120('0x3'))]({'wireframe':![],'transparent':![],'opacity':0x1,'colorWrite':![]});var _0x5f3441=new THREE['Mesh'](_0x55094f,_0x51d93b);return _0x5f3441[_0x5120('0xe')]=-0x2,_0x5f3441;}function _0x534f2d(_0x255b40){const _0x1dd03c=new THREE[(_0x5120('0xa'))]();return new THREE[(_0x5120('0x11'))]()[_0x5120('0x19')](_0x255b40,function(_0x13ecd4){const _0x4f4645=new THREE[(_0x5120('0x3'))]({'wireframe':![],'transparent':!![],'opacity':0x0,'colorWrite':![]});_0x1dd03c[_0x5120('0xe')]=-0x2,_0x1dd03c['material']=_0x4f4645,_0x1dd03c[_0x5120('0x0')]=_0x13ecd4;}),_0x1dd03c;}var _0x3d609a=new THREE[(_0x5120('0x4'))](_0x18d4ad[_0x5120('0x1b')]);_0x3d609a[_0x5120('0xb')]();const _0x524ea2=new THREE[(_0x5120('0x1a'))]();new THREE[(_0x5120('0x10'))]()[_0x5120('0x17')](THREE[_0x5120('0xf')])[_0x5120('0x18')](_0x5120('0xc'))[_0x5120('0x19')](_0x5120('0x15'),function(_0x24f469){var _0x530e25=_0x3d609a['fromEquirectangular'](_0x24f469)['texture'];_0x24f469[_0x5120('0x12')](),_0x3d609a[_0x5120('0x12')]();var _0x2e31bd=new THREE['MeshPhysicalMaterial']({'metalness':0x0,'roughness':0x0,'alphaTest':0.5,'envMapIntensity':0.1,'depthWrite':!![],'opacity':0.5,'transparent':!![]}),_0x38f084=new THREE[(_0x5120('0x9'))]({'metalness':0x0,'roughness':0x0,'alphaTest':0x1,'envMapIntensity':0.1,'depthWrite':!![],'opacity':0x1,'transparent':!![]}),_0x142d8f=0x0,_0x4e73a2=new THREE[(_0x5120('0x7'))]()[_0x5120('0x18')](_0x5120('0x5'));_0x4e73a2['load'](_0x5120('0x2'),function(_0x1d170){_0x1d170['scene'][_0x5120('0x13')](function(_0x399578){_0x399578['isMesh']&&(_0x142d8f==0x1?(_0x399578[_0x5120('0x6')]=_0x2e31bd,_0x399578['material'][_0x5120('0x8')]=_0x530e25):(_0x399578[_0x5120('0x6')]=_0x38f084,_0x399578[_0x5120('0x6')]['envMap']=_0x530e25),_0x142d8f++);}),_0x524ea2[_0x5120('0x14')](_0x1d170[_0x5120('0x1')]);});});const _0x22e906=JeelizThreeHelper[_0x5120('0x16')](_0x18d4ad[_0x5120('0xd')]),_0x481d74=_0x3f9f7f();return{'glasses':_0x524ea2,'occluder':_0x22e906,'occluderPlane':_0x481d74};};