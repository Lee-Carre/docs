---
title: Tiles Directory Format - .metainfo
intro: Specification of OsmAnd's Metainfo Format
versions: '*'
---

The Metainfo format used in OsmAnd to store the tile layers preferences. In OsmAnd we add a number of tables extending the format:

|Field|Spec and Purpose|
|:----|:---------------|
|"[url\_template]"|String. URL template to download tiles with zoom - {0}, x - {1} , y - {2}, server name - {rnd}. Watch the order of x / y, it could be different in url, example - http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}. |
|"[randoms]"|String. The names of the mirrors of server. Comma-separated. One of these values will randomly replace the placeholder {rdn} in "url" field.|
|"[minzoom]"|Integer. Min zoom level. In regular format (OSM, Google maps).|
|"[maxzoom]"|Integer. Max zoom level. In regular format (OSM, Google maps).|
|"[ellipsoid]"|Bool "true" or "false". True for Elliptic Mercator (Yandex tiles). False for regular Spheric Web Mercator (OSM, Google maps)|
|"[inverted\_y]"|Bool "true" or "false". True for inverted Y tile number (Nakarte.me tiles).|
|"[tile\_size]"|Integer 256 or 512. Side size of downloading tile in px.|
|"[img\_density]"|Integer. Tile image density.|
|"[avg\_img\_size]"|Integer.Average tile image size.|
|"[expiration\_time\_minutes]"|Integer. Specifies if tiles shall expire after the given number of minutes. They would still be displayed, but also re-downloaded.|

The class supporting this tile source is at or near [https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java\#L28](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).
