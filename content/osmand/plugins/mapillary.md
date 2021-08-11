---
title: "Mapillary"
intro: "Mapillary"
versions: '*'
---


{% data reusables.general.article-not-complete %}


[The Mapillary layer](https://www.mapillary.com/) brings street-level views straight into the OsmAnd app. This means you can easily check out the surroundings at any place of interest or along the route you have planned with OsmAnd. Where imagery is missing, you can just add it yourself so that others can make use of it. This feature has emerged from our collaboration with [the Mapillary team](https://www.mapillary.com/about) uniting the benefits of both apps.


## Enable / Disable plugin

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → {% data variables.android-values.mapillary %}

{% data variables.product.ios_button_seq %}  by default

![Mapillary plugin Android](/assets/images/plugins/mapillary/mapillary_plugin_android.png) 


## How to use




### Viewing images

Street-level imagery (Mapillary) are green points on the map. Street-view photos attached to these points. You can create [a filter](/osmand/plugins/mapillary#filtering-the-data) and select what photos you would like to display on the map. In order to open street-view photo you need to press on the green point.

Enable / disable Street-level imagery on the map: 

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.street_level_imagery %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.configure_map %} → {% data variables.ios-values.street_level_imagery %}

![Mapillary plugin points on the map Android](/assets/images/plugins/mapillary/mapillary_plugin_points_android.png) ![Mapillary plugin points on the map iOS](/assets/images/plugins/mapillary/mapillary_plugin_points_ios.png)

Cliking to the green points opens Mapillary screen in OsmAnd, where user can view images from Mapillary service.

![Mapillary plugin images Android](/assets/images/plugins/mapillary/mapillary_plugin_images_android.png) ![Mapillary plugin images iOS](/assets/images/plugins/mapillary/mapillary_plugin_images_ios.png)

Click to &#8285; button (Android) - opens chosen image in Mapillary application.

Clicking to arrows on the images allows to move image by image.

There are info about username and year in bottom corner.


### Filtering the data

The filter images menu:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.street_level_imagery %} → &#8230;

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.configure_map %} → {% data variables.ios-values.street_level_imagery %} → &#8230;


![Mapillary plugin filter Android](/assets/images/plugins/mapillary/mapillary_plugin_filter_android.png) ![Mapillary plugin filter iOS](/assets/images/plugins/mapillary/mapillary_plugin_filter_ios.png)

Actions:
- {% data variables.android-values.shared_string_on %} / {% data variables.android-values.shared_string_off %} - enable or disable mapillary map layer.
- {% data variables.android-values.mapillary_menu_title_tile_cache %} - reload tiles to see up to date data

Filter images by sumbitter, by date or by type. Only active in closeup zoom (17):
- {% data variables.android-values.mapillary_menu_title_username %} - filter images by user. View only images by selected username.
- {% data variables.android-values.mapillary_menu_title_dates %} - filter images by date. Start date to End date.
- {% data variables.android-values.mapillary_menu_title_pano %} - allows to showing only 360 &#176; images.


### Images in Map Context menu

In the [Details](/osmand/map/map-context-menu#details) of selected point on the map of [Map Context menu you can find Mapillary images](/osmand/map/map-context-menu#online-photos) if there are near selected point.


![Mapillary plugin Map Conntext menu Android](/assets/images/plugins/mapillary/mapillary_plugin_context_menu_android.png) ![Mapillary plugin Map Conntext menu iOS](/assets/images/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

Click to the images opens viewing images dialogue.

![Mapillary plugin dialogue Android](/assets/images/plugins/mapillary/mapillary_plugin_dialogue_android.png) ![Mapillary plugin  dialogue  iOS](/assets/images/plugins/mapillary/mapillary_plugin_dialogue_ios.png)


### Adding images

1. By clicking to [Mapillary widget](/osmand/widgets/info-widgets#-mapillary-widget) opens Mapillary application.

2. If there aren't photos near selected point on the map user can see next dialogue on [Online photos of Map Context menu](/osmand/map/map-context-menu#online-photos):  Add photos. By clicking "Add photos" button opens Mapillary application.


