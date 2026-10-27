var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Soil_1 = new ol.format.GeoJSON();
var features_Soil_1 = format_Soil_1.readFeatures(json_Soil_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Soil_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Soil_1.addFeatures(features_Soil_1);
var lyr_Soil_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Soil_1, 
                style: style_Soil_1,
                popuplayertitle: 'Soil',
                interactive: false,
    title: 'Soil<br />\
    <img src="styles/legend/Soil_1_0.png" /> Alluvial Soil<br />\
    <img src="styles/legend/Soil_1_1.png" /> Laterite Soil<br />' });
var format_MinorRoads_2 = new ol.format.GeoJSON();
var features_MinorRoads_2 = format_MinorRoads_2.readFeatures(json_MinorRoads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MinorRoads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinorRoads_2.addFeatures(features_MinorRoads_2);
var lyr_MinorRoads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinorRoads_2, 
                style: style_MinorRoads_2,
                popuplayertitle: 'Minor Roads',
                interactive: false,
                title: '<img src="styles/legend/MinorRoads_2.png" /> Minor Roads'
            });
var format_Geology_3 = new ol.format.GeoJSON();
var features_Geology_3 = format_Geology_3.readFeatures(json_Geology_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_3.addFeatures(features_Geology_3);
var lyr_Geology_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_3, 
                style: style_Geology_3,
                popuplayertitle: 'Geology',
                interactive: false,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_3_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/Geology_3_1.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/Geology_3_2.png" /> Migmatite Complex<br />' });
var format_Geomorphology_4 = new ol.format.GeoJSON();
var features_Geomorphology_4 = format_Geomorphology_4.readFeatures(json_Geomorphology_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorphology_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorphology_4.addFeatures(features_Geomorphology_4);
var lyr_Geomorphology_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorphology_4, 
                style: style_Geomorphology_4,
                popuplayertitle: 'Geomorphology',
                interactive: false,
    title: 'Geomorphology<br />\
    <img src="styles/legend/Geomorphology_4_0.png" /> Pediplain<br />\
    <img src="styles/legend/Geomorphology_4_1.png" /> Plateau<br />\
    <img src="styles/legend/Geomorphology_4_2.png" /> Residual Hill<br />\
    <img src="styles/legend/Geomorphology_4_3.png" /> Water Body<br />' });
var format_Schools_5 = new ol.format.GeoJSON();
var features_Schools_5 = format_Schools_5.readFeatures(json_Schools_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_5.addFeatures(features_Schools_5);
var lyr_Schools_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_5, 
                style: style_Schools_5,
                popuplayertitle: 'Schools',
                interactive: false,
                title: '<img src="styles/legend/Schools_5.png" /> Schools'
            });
var format_MajorRoads_6 = new ol.format.GeoJSON();
var features_MajorRoads_6 = format_MajorRoads_6.readFeatures(json_MajorRoads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRoads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoads_6.addFeatures(features_MajorRoads_6);
var lyr_MajorRoads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorRoads_6, 
                style: style_MajorRoads_6,
                popuplayertitle: 'Major Roads',
                interactive: false,
                title: '<img src="styles/legend/MajorRoads_6.png" /> Major Roads'
            });
var format_Drainage_7 = new ol.format.GeoJSON();
var features_Drainage_7 = format_Drainage_7.readFeatures(json_Drainage_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drainage_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drainage_7.addFeatures(features_Drainage_7);
var lyr_Drainage_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drainage_7, 
                style: style_Drainage_7,
                popuplayertitle: 'Drainage',
                interactive: false,
                title: '<img src="styles/legend/Drainage_7.png" /> Drainage'
            });
var format_Vilappil_8 = new ol.format.GeoJSON();
var features_Vilappil_8 = format_Vilappil_8.readFeatures(json_Vilappil_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vilappil_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vilappil_8.addFeatures(features_Vilappil_8);
var lyr_Vilappil_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vilappil_8, 
                style: style_Vilappil_8,
                popuplayertitle: 'Vilappil',
                interactive: false,
    title: 'Vilappil<br />\
    <img src="styles/legend/Vilappil_8_0.png" /> ALAKUNNAM<br />\
    <img src="styles/legend/Vilappil_8_1.png" /> ARUVIPURAM<br />\
    <img src="styles/legend/Vilappil_8_2.png" /> CHERUCODE<br />\
    <img src="styles/legend/Vilappil_8_3.png" /> CHERUTHERI<br />\
    <img src="styles/legend/Vilappil_8_4.png" /> CHOWALLOR<br />\
    <img src="styles/legend/Vilappil_8_5.png" /> HIGH SCHOOL<br />\
    <img src="styles/legend/Vilappil_8_6.png" /> KARODE<br />\
    <img src="styles/legend/Vilappil_8_7.png" /> KARUVILANCHI<br />\
    <img src="styles/legend/Vilappil_8_8.png" /> KAVINPURAM<br />\
    <img src="styles/legend/Vilappil_8_9.png" /> MINNAMCODE<br />\
    <img src="styles/legend/Vilappil_8_10.png" /> MYLADI<br />\
    <img src="styles/legend/Vilappil_8_11.png" /> NOOLIYODE<br />\
    <img src="styles/legend/Vilappil_8_12.png" /> OFFICE<br />\
    <img src="styles/legend/Vilappil_8_13.png" /> PADAVANCODE<br />\
    <img src="styles/legend/Vilappil_8_14.png" /> PEYAD<br />\
    <img src="styles/legend/Vilappil_8_15.png" /> PIRAYIL<br />\
    <img src="styles/legend/Vilappil_8_16.png" /> PULIYARAKONAM<br />\
    <img src="styles/legend/Vilappil_8_17.png" /> PUTTUMELKONAM<br />\
    <img src="styles/legend/Vilappil_8_18.png" /> THURUTHUMOOLA<br />\
    <img src="styles/legend/Vilappil_8_19.png" /> VELLAIKADAVU<br />\
    <img src="styles/legend/Vilappil_8_20.png" /> VILAPPILSALA<br />\
    <img src="styles/legend/Vilappil_8_21.png" /> VITTIYAM<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Soil_1.setVisible(true);lyr_MinorRoads_2.setVisible(true);lyr_Geology_3.setVisible(true);lyr_Geomorphology_4.setVisible(true);lyr_Schools_5.setVisible(true);lyr_MajorRoads_6.setVisible(true);lyr_Drainage_7.setVisible(true);lyr_Vilappil_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Soil_1,lyr_MinorRoads_2,lyr_Geology_3,lyr_Geomorphology_4,lyr_Schools_5,lyr_MajorRoads_6,lyr_Drainage_7,lyr_Vilappil_8];
lyr_Soil_1.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_MinorRoads_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Geology_3.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_Geomorphology_4.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Schools_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_MajorRoads_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_Drainage_7.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_Vilappil_8.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_Soil_1.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_MinorRoads_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Geology_3.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Geomorphology_4.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Schools_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_MajorRoads_6.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Drainage_7.set('fieldImages', {'ORDER1': 'Range', });
lyr_Vilappil_8.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_Soil_1.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'no label', });
lyr_MinorRoads_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Geology_3.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_Geomorphology_4.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Schools_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_MajorRoads_6.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'other_tags': 'no label', });
lyr_Drainage_7.set('fieldLabels', {'ORDER1': 'no label', });
lyr_Vilappil_8.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_Vilappil_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});