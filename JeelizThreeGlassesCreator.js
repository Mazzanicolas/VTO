"use strict";

/*
  Build 3D glasses.
  spec properties: 
     * <string> envMapURL: url of the envMap
     * <string> frameMeshURL: url of the mesh used for the glasses frames
     * <string> lensesMeshURL: url of the mesh of the lenses
     * <string> occluderURL: url of the occluder
*/


	
const JeelizThreeGlassesCreator = function(spec){ 

	function create_occluder_wireframe(occluderURL){
      const occluderMesh = new THREE.Mesh();
	  
      new THREE.BufferGeometryLoader().load(occluderURL, function(occluderGeometry){
        const mat = new THREE.MeshBasicMaterial({
			wireframe: true,
			transparent: true,
			opacity: 0.2
		});
        
        occluderMesh.renderOrder = -1; //render first
        occluderMesh.material = mat;
        occluderMesh.geometry = occluderGeometry;
        
      });
      return occluderMesh;
    }
	
  // glasses lenses:
	var pmremGenerator = new THREE.PMREMGenerator( spec.renderer );
	pmremGenerator.compileEquirectangularShader();
	const threeGlasses = new THREE.Object3D();
	
	new THREE.RGBELoader()
					.setDataType( THREE.UnsignedByteType )
					.setPath( 'textures/' )
					.load( 'royal_esplanade_1k.hdr', function ( texture ) {

						var envMap = pmremGenerator.fromEquirectangular( texture ).texture;

						//scene.background = envMap;
						//scene.environment = envMap;

						texture.dispose();
						pmremGenerator.dispose();
						
	var material = new THREE.MeshPhysicalMaterial( {
					//color: params.color,
					metalness: 0,
					roughness: 0,
					//alphaMap: texture,
					alphaTest: 0.5,
					//envMap: envMap,
					envMapIntensity: 0.1,
					depthWrite: false,
					transmission: 0.5, // use material.transmission for glass materials
					opacity: 0.5,                        // set material.opacity to 1 when material.transmission is non-zero
					transparent: true
				} );
	var material2 = new THREE.MeshPhysicalMaterial( {
		//color: params.color,
		metalness: 0,
		roughness: 0,
		//alphaMap: texture,
		alphaTest: 1,
		//envMap: envMap,
		envMapIntensity: 0.1,
		depthWrite: true,
		transmission: 0.5, // use material.transmission for glass materials
		opacity: 1,                        // set material.opacity to 1 when material.transmission is non-zero
		transparent: false
	} );
	var cnt = 0;						
	var loader = new THREE.GLTFLoader().setPath( 'glft/' );
	loader.load( 'glassesBranchesBent.gltf', function ( gltf ) {	gltf.scene.traverse( function ( child ) {

			if ( child.isMesh ) {

				// TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
				// roughnessMipmapper.generateMipmaps( child.material );
				
				if (cnt == 1)
					child.material = material;
				else 
					child.material = material2;
				child.material.envMap=envMap;
				cnt++;
			}
		
		} );

		//gltf.scene.scale.multiplyScalar(0.006);
		//scene.add( gltf.scene );
		threeGlasses.add(gltf.scene);
		//roughnessMipmapper.dispose();

		//render();

	} );

					});				
  const occluderMesh = create_occluder_wireframe(spec.occluderURL);
  
  return {
    glasses: threeGlasses,
    occluder: occluderMesh
  };
}
