var t="geolibre-wms";function r(e){return e.startsWith("geolibre-wms://")?e:`${t}://tile?url=${encodeURIComponent(e).replaceAll("%7Bbbox-epsg-3857%7D","{bbox-epsg-3857}")}`}export{r as n,t};
