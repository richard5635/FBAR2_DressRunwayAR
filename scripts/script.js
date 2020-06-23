const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures'); 
const Materials = require('Materials'); 
const PatchesModule = require('Patches');

Promise.all([
Textures.findFirst('texture0'),
Textures.findFirst('texture1'),
Textures.findFirst('texture2'),
Textures.findFirst('texture3'),
Textures.findFirst('texture4'),
Textures.findFirst('texture5'),
Materials.findFirst('dress_mat0'),
Materials.findFirst('dress_mat1'),
Materials.findFirst('dress_mat2'),
Materials.findFirst('dress_mat3'),
Materials.findFirst('dress_mat4'),
Materials.findFirst('dress_mat5'),
Scene.root.findFirst('model02_cloth02')

]).then(function(results){
const texture0 = results[0];
const texture1 = results[1];
const texture2 = results[2];
const texture3 = results[3];
const texture4 = results[4];
const texture5 = results[5];
const material0 = results[6];
const material1 = results[7];
const material2 = results[8];
const material3 = results[9];
const material4 = results[10];
const material5 = results[11];
const clothObj = results[12];


const picker = NativeUI.picker; 
const configuration = { 
selectedIndex: 0, 

    items: [ 
        {image_texture: texture0}, 
        {image_texture: texture1}, 
        {image_texture: texture2},
        {image_texture: texture3},
        {image_texture: texture4},
        {image_texture: texture5}
],

    mats: [
        {material: material0},
        {material: material1},
        {material: material2},
        {material: material3},
        {material: material4},
        {material: material5}
    ]

};

picker.configure(configuration);
picker.visible = PatchesModule.getBooleanValue('visibleUI');

picker.selectedIndex.monitor().subscribe(function(index) {
clothObj.material = configuration.mats[index.newValue].material;
});
}); 

