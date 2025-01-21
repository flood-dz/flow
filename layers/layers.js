var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_InondationdeGhardaa_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Inondation de Ghardaïa',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/InondationdeGhardaa_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [334930.288756, 3811787.637556, 433155.812934, 3870231.102972]
                            })
                        });
var format_OuedGhardaa_2 = new ol.format.GeoJSON();
var features_OuedGhardaa_2 = format_OuedGhardaa_2.readFeatures(json_OuedGhardaa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OuedGhardaa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OuedGhardaa_2.addFeatures(features_OuedGhardaa_2);
var lyr_OuedGhardaa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OuedGhardaa_2, 
                style: style_OuedGhardaa_2,
                popuplayertitle: 'Oued Ghardaïa',
                interactive: true,
                title: '<img src="styles/legend/OuedGhardaa_2.png" /> Oued Ghardaïa'
            });
var lyr_InondationdAflu_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Inondation d\'Aflu',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/InondationdAflu_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [218007.874228, 4029332.047614, 244406.779260, 4053313.922576]
                            })
                        });
var format_OueddAflu_4 = new ol.format.GeoJSON();
var features_OueddAflu_4 = format_OueddAflu_4.readFeatures(json_OueddAflu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OueddAflu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OueddAflu_4.addFeatures(features_OueddAflu_4);
var lyr_OueddAflu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OueddAflu_4, 
                style: style_OueddAflu_4,
                popuplayertitle: 'Oued d\'Aflu',
                interactive: true,
                title: '<img src="styles/legend/OueddAflu_4.png" /> Oued d\'Aflu'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_InondationdeGhardaa_1.setVisible(true);lyr_OuedGhardaa_2.setVisible(true);lyr_InondationdAflu_3.setVisible(true);lyr_OueddAflu_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_InondationdeGhardaa_1,lyr_OuedGhardaa_2,lyr_InondationdAflu_3,lyr_OueddAflu_4];
lyr_OuedGhardaa_2.set('fieldAliases', {'HYRIV_ID': 'HYRIV_ID', 'NEXT_DOWN': 'NEXT_DOWN', 'MAIN_RIV': 'MAIN_RIV', 'LENGTH_KM': 'LENGTH_KM', 'DIST_DN_KM': 'DIST_DN_KM', 'DIST_UP_KM': 'DIST_UP_KM', 'CATCH_SKM': 'CATCH_SKM', 'UPLAND_SKM': 'UPLAND_SKM', 'ENDORHEIC': 'ENDORHEIC', 'DIS_AV_CMS': 'DIS_AV_CMS', 'ORD_STRA': 'ORD_STRA', 'ORD_CLAS': 'ORD_CLAS', 'ORD_FLOW': 'ORD_FLOW', 'HYBAS_L12': 'HYBAS_L12', });
lyr_OueddAflu_4.set('fieldAliases', {'arcid': 'arcid', 'grid_code': 'grid_code', 'from_node': 'from_node', 'to_node': 'to_node', 'Shape_Leng': 'Shape_Leng', });
lyr_OuedGhardaa_2.set('fieldImages', {'HYRIV_ID': 'TextEdit', 'NEXT_DOWN': 'TextEdit', 'MAIN_RIV': 'TextEdit', 'LENGTH_KM': 'TextEdit', 'DIST_DN_KM': 'TextEdit', 'DIST_UP_KM': 'TextEdit', 'CATCH_SKM': 'TextEdit', 'UPLAND_SKM': 'TextEdit', 'ENDORHEIC': 'TextEdit', 'DIS_AV_CMS': 'TextEdit', 'ORD_STRA': 'TextEdit', 'ORD_CLAS': 'TextEdit', 'ORD_FLOW': 'TextEdit', 'HYBAS_L12': 'TextEdit', });
lyr_OueddAflu_4.set('fieldImages', {'arcid': 'TextEdit', 'grid_code': 'TextEdit', 'from_node': 'TextEdit', 'to_node': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_OuedGhardaa_2.set('fieldLabels', {'HYRIV_ID': 'no label', 'NEXT_DOWN': 'no label', 'MAIN_RIV': 'no label', 'LENGTH_KM': 'no label', 'DIST_DN_KM': 'no label', 'DIST_UP_KM': 'no label', 'CATCH_SKM': 'no label', 'UPLAND_SKM': 'no label', 'ENDORHEIC': 'no label', 'DIS_AV_CMS': 'no label', 'ORD_STRA': 'no label', 'ORD_CLAS': 'no label', 'ORD_FLOW': 'no label', 'HYBAS_L12': 'no label', });
lyr_OueddAflu_4.set('fieldLabels', {'arcid': 'no label', 'grid_code': 'no label', 'from_node': 'no label', 'to_node': 'no label', 'Shape_Leng': 'no label', });
lyr_OueddAflu_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});