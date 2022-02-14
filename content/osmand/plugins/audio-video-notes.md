---
title: "{% data variables.android-values.audionotes_plugin_name %}"
intro: "Audio/video notes for future reference in case of need, or just to remember the moment, scene, or interaction, once made, are available from the central storage as well as on the map as an individual layer of user-made stories and thoughts tied to a geolocation.  **For Android only**."
versions: '*'
---
{% data reusables.general.article-not-complete %}

## Overview 

The Audio/video notes plugin extends the functional capabilities of storing the information about a geolocation by giving the user options to create their own representations in different formats, such as: a photo note, a video note, or an audio file, and tie them to a geographical place, or the current position. The recording options are provided with the Audio/video notes widget, and/or the context menu of a POI. The resulted data is automatically saved to the central storage from where it is convenient to manage and share anything needed. 

Simultaneously, all created audio/video notes make up a Recording layer that if configured to show up on the map, provides a different view on the recorded data and means for managing it. Within the Recording layer, the audio/video notes are laid out as POIs across the map, thus creating a user-made map narrative, visible only to the owner of the device.

![Audio video notes intro](/assets/images/plugins/audio-video-notes/audio-video-intro.png)


>**NOTE**: As of March, 2022, the audio/video notes functionality is available for **Android only**. 

&nbsp;&nbsp;&nbsp;&nbsp;


## Setup

The audio/video notes are provided with the Audio/video notes plugin, and require the following setup:

1. Enable the plugin. 

2. If needed, add the widget to the device screen, and/or configure. 

3. If needed, configure the recording settings per profile. 


### Enable plugin

The Audio/video notes plugin is required for working with the audio/video notes: from creating the notes to viewing them in My Places, and showing on the map. All audio/video notes will be hidden from the map and from My Places, if the plugin becomes disabled. 

To enable the plugin, tap the triple dots beside the enabled **{% data variables.android-values.audionotes_plugin_name %}** option in the list of [plugins](/osmand/start-with/first-steps#how-to-configure-plugins) and select **Enable**.  

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group %} → {% data variables.android-values.audionotes_plugin_name %}

![Audio video plugin Android](/assets/images/plugins/audio-video-notes/audio_video_plugin_android.png)


&nbsp;&nbsp;&nbsp;&nbsp;

### Add/Configure widget

The {% data variables.android-values.map_widget_av_notes %} widget makes records (i.e. photo, audio, video) and ties them to the current position of the user. The widget has several options that can be set up as the default action performed by the widget on tap. 

![The widget](/assets/images/plugins/audio-video-notes/audio_video_notes_widget.png)

Adding the widget to the screen is needed when you would rather skip looking for a geolocation on the map and by default link the notes to your current position. To add, and/or configure the widget, do the following:

1. Open {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %}

2. Scroll down the **{% data variables.android-values.map_widget_right %}**.

3. Tap **{% data variables.android-values.map_widget_av_notes %}** and the context menu of the widget opens. 

4. Select an option you prefer to do by default by tapping the widget:

    - **{% data variables.android-values.av_def_action_choose %}** - to open a choice of options;

    - **{% data variables.android-values.av_def_action_audio %}** - to immediately start to record an audio message;

    - **{% data variables.android-values.av_def_action_video %}** - to immediately start to record a video;

    - **{% data variables.android-values.av_def_action_picture %}** - to immediately start taking a photo. 

5. Make certain {% data variables.android-values.shared_string_show %} or {% data variables.android-values.shared_string_collapse%} is selected, so that the widget to be displayed on the device screen. In the latter case, it will be available from an arrow icon opening the dropdown list of widgets in the top right-hand corner of the screen. 


![Widget options](/assets/images/plugins/audio-video-notes/av-widget-configure2.png)


&nbsp;&nbsp;&nbsp;&nbsp;

### Open settings

For every profile, it is possible to configure the recording settings. There are two options of how to open the {% data variables.android-values.audionotes_plugin_name %} settings: 

- from the plugin, so that to configure recording only for the default profile; 

- from the app settings, so that to configure recording for any of the profiles. 

From the [plugin](/osmand/start-with/first-steps#how-to-configure-plugins), the Audio/video recording settings are opened by selecting **Settings** from the triple dots list of the plugin in: 

{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group %} → {% data variables.android-values.audionotes_plugin_name %} → {% data variables.android-values.shared_string_settings %}

![Plugin settings](/assets/images/plugins/audio-video-notes/settings_from_plugin.png)

From the [settings](/osmand/start-with/first-steps#how-to-manage-your-settings) of the entire app, the Audio/video recording settings can be opened as follows:

1. Go to: {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_settings %}.

2. Select a profile.

3. Tap the **{% data variables.android-values.audionotes_plugin_name %}** option. 

![Opening Audio video plugin settings](/assets/images/plugins/audio-video-notes/settings_avplugin_per_profile2.png) 



&nbsp;&nbsp;&nbsp;&nbsp;

### Establish options 

The way the Audio/video recording will work can be determined with the settings described below. Establish the parameters as needed. 

![Audio video plugin settings Photo Android](/assets/images/plugins/audio-video-notes/audio_video_plugin_settings_photo_android.png)  ![Audio video plugin settings Video Android](/assets/images/plugins/audio-video-notes/audio_video_plugin_settings_video_android.png)


| Parameter | Description |
| --- | --- |
| **{% data variables.android-values.multimedia_use_system_camera %}** in {% data variables.android-values.photo_notes %} | If enabled, OsmAnd uses the system application to create photos.|
| **{% data variables.android-values.av_camera_pic_size %}** | This establishes a size for photos to take in. The number of available options is determined with the capabilities of the device camera. If no option is selected, the app uses the size that is established in the system settings for the device camera. |
| **{% data variables.android-values.av_camera_focus %}** | This establishes the method of how focus is set by the camera. The number of available options is determined with the capabilities of the device camera. Basically, there are the following three options: *{% data variables.android-values.av_camera_focus_auto %}*; *{% data variables.android-values.av_camera_focus_continuous %}*; and *{% data variables.android-values.av_camera_focus_infinity %}*, where **autofocus** is the most popular one and establishes the automatic mode for the camera to focus by rotating the lens focus ring; **continuous** one makes the camera detect movements and refocus accordingly; and the **infinity** option makes the lens to focus on a distance and thus keep everything extraordinarily wide in focus no matter how far it is. |
| **{% data variables.android-values.multimedia_photo_play_sound %}** | If enabled, a sound is produced on closing the camera.| 
| **{% data variables.android-values.av_audio_format %}** | This provides a choice of formats for an audio file to be created in. There are two options: either the default format, or the **.aac** format. |
| **{% data variables.android-values.av_audio_bitrate %}** | This provides a choice of bitrate options for an audio file to be created in. The available bitrate options range from 16kbps to 128 kbps, or the Default option. The default option is determined with the default microphone settings of the device. | 
| **{% data variables.android-values.multimedia_use_system_camera %}** in {% data variables.android-values.video_notes %} | If enabled, OsmAnd uses the system application to record video. |
| **{% data variables.android-values.av_video_quality %}** | This provides a choice of options that determine the quality of video to be recorded. |
| **{% data variables.android-values.multimedia_rec_split_title %}** | If enabled, the video recording will be automatically split into two files if the length of the video reaches the established time limit.  |
| **{% data variables.android-values.rec_split_clip_length %}** | This determines the upper time limit for recorded video. There are options with the range from 1 minute to 30 minutes.|
| **{% data variables.android-values.rec_split_storage_size %}** | This establishes the size of the storage intended for recorded video. There are options with the range from 1024 MB to 62 GB. |
| **{% data variables.android-values.notes %}** | This re-directs you directly to the [Audio/video notes in My Places](/osmand/personal/myplaces). This is the central storage of all Audio/video notes ever made in the app. |
| **{% data variables.android-values.reset_plugin_to_default %}** | This establishes the default values for all of the above settings.  |
| **{% data variables.android-values.copy_from_other_profile %}** | This opens a dialog to select a profile to copy the established Audio/video note recording configuration of values from, and further to establish them for the current profile. |







&nbsp;&nbsp;&nbsp;&nbsp;


## Manage notes

You can manage your information, thoughts, ideas, etc. tied to a geographical place, as follows:

- create a note;
- view all notes as a list in [My Places](/osmand/personal/myplaces);
- show all notes [on the map](/osmand/map/configure-map-menu#map-data-layers);
- play the note;
- add to the [GPX file](/osmand/plugins/trip-recording#gpx-file-details);
- export to [JOSM](https://josm.openstreetmap.de/);



### Create a note

You can create a photo, video, and/or audio note in any of the following ways:
- with the [Widget](/osmand/widgets/info-widgets#-audio-video-notes-widget-android) - if the note should be tied to your current geographical position;
- with the [Context menu](/osmand/map/map-context-menu#-record-av-note-android) of a point on the map - if the note should be tied to the selected point on the map.


#### TIE TO YOUR CURRENT POSITION

To create a note tied to your current position, and thus, avoiding any search of a suitable point on the map to tie the note to, the {% data variables.android-values.map_widget_av_notes %} widget is used: tap the widget, and make the note. 

The functions provided by the {% data variables.android-values.map_widget_av_notes %} widget depend on how it is configured in the [Configure screen](/osmand/widgets/info-widgets#-audio-video-notes-widget-android) menu. The widget either immediately opens the camera to make a note, according to the established settings, or asks first what format to create a note in, and then opens the respective recorder dialog.

![Audio video plugin widget Android](/assets/images/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)


#### TIE TO SELECTED GEOLOCATION 

To create a note tied to a selected point on the map, the [Context menu](/osmand/map/map-context-menu#-record-av-note-android) of the point is used, as follows:

1. Long-tap a point on the map. 
2. The [Context menu](/osmand/map/map-context-menu) opens.
3. Tap **Actions**.
4. Select one of the available options from the list: 

    - **{% data variables.android-values.recording_context_menu_arecord %}** - to make an audio note and tie it to the selected point on the map;
    - **{% data variables.android-values.recording_context_menu_vrecord%}** - to make a video note and tie it to the selected point on the map;
    - **{% data variables.android-values.recording_context_menu_precord %}** - to make a photo note and tie it to the selected point on the map.

5. Depending on the selected format of the note, the respective recorder dialog opens. 

![Audio video plugin  Context menu take a note](/assets/images/plugins/audio-video-notes/context-menu-take-note.png)



#### RECORDER DIALOG

For _an audio / video note_, respectively the audio, or video recorder shows up. And you can:

- stop the recording with the Stop icon,
- see the length of the record,
- hide/show the video screen.

> **NOTE**: Also, it is possible to stop the recording with a tap on the {% data variables.android-values.map_widget_av_notes %} widget, regardless of whether the Context menu, or the widget started the recording. 

![Video note recorder](/assets/images/plugins/audio-video-notes/take_a_video_note_widget.png) 

For _a photo note_, the camera functionality shows up, and you can take a photo, view the result, and accept and save it, or take a new photo.

> **NOTE**: Automatically, all photo, audio, and video records are saved to: {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_my_places %} → {% data variables.android-values.notes %} tab. 



&nbsp;&nbsp;&nbsp;&nbsp;

###  View in My Places

[My Places](/osmand/personal/myplaces) is the central storage for all notes. It allows you to view all notes listed as a list; open a specific note; and to manage the entire list of notes. To open My Places, follow the path: 

{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_my_places %} → {% data variables.android-values.notes %}

![Audio video plugin My places menu](/assets/images/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)


#### OPEN A NOTE

To open a note, tap it in the list of notes in My Places. And the map shows up, highlights the linked point of the note, and opens the [Context menu](/osmand/plugins/audio-video-notes#actions-in-map-context-menu) of the point. It is possible to work with the note by selecting the options in the context menu.

![Audio video plugin My places menu Context](/assets/images/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)



#### MANAGE A NOTE

To manage a note in My Places, tap the vertical triple points of the note in the list, and the available options show up, as follows: 

- {% data variables.android-values.watch %} / {% data variables.android-values.recording_context_menu_play %} - to play/show the note,
- {% data variables.android-values.shared_string_share %} - to share the note, 
- {% data variables.android-values.shared_string_show_on_map %} - to show the linked place on the map and the [Context menu](/osmand/plugins/audio-video-notes#actions-in-map-context-menu),
- {% data variables.android-values.shared_string_rename %} - to rename the note,
- {% data variables.android-values.shared_string_delete %} - to delete the note.

![Audio video plugin My places menu actions](/assets/images/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)


&nbsp;&nbsp;&nbsp;&nbsp;

#### MANAGE LIST OF NOTES

The options on the bottom bar can be used to manage the list of notes in My Places, as follows:

- {% data variables.android-values.shared_string_sort %} - opens a choice of how to sort: by type, or date, and on selection an option, sorts the list respectively. 
- {% data variables.android-values.shared_string_share %} - shows a check list of all notes, including those added as waypoints to GPX files. First, required notes are checked, then the Share icon on tap at the right-hand top corner of the screen provides the available sharing options, and finally, the checked notes are shared, according to the selected option. 
- {% data variables.android-values.shared_string_delete %} - shows a check list of audio, photo and video notes only. First, required notes are checked, then the Delete icon at the right-hand top corner of the screen is clicked, and after confirmation, deletes the selected notes. 

![Audio video plugin My places menu Three actions](/assets/images/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)




&nbsp;&nbsp;&nbsp;&nbsp;

### Show on the map 

Notes can tell you a story, once displayed on the map: e.g. where to notice signs, which door to open, how to find a way out, an optimal path to go, etc. Once toggled on in the [Configure map](/osmand/map/configure-map-menu) menu, the [Recording layer](/osmand/map/point-layers-on-map#-audio--video-points-android) shows the notes on the map.

![No notes on the map](/assets/images/plugins/audio-video-notes/no_notes_on_map.png) ![Notes are on the map](/assets/images/plugins/audio-video-notes/notes_on_map.png)

The [Recording layer](/osmand/map/point-layers-on-map#-audio--video-points-android) can be reached out, as follows:

{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map   %} → {% data variables.android-values.layer_recordings %}

![Show notes on the map](/assets/images/plugins/audio-video-notes/recording_layer.png)



&nbsp;&nbsp;&nbsp;&nbsp;

### Play the note   

To play a note, use the respective option in the [Context menu](/osmand/map/map-context-menu#-audiovideo-note-android) opened:

- on the map;
- in My Places. 

Also, [Details](/osmand/map/map-context-menu#-audiovideo-note-android) will help by giving more data, like: the latitude and longitude; the date and time of the record, if any photos.

![Audio video plugin Context menu](/assets/images/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png) ![Audio video plugin My places menu actions](/assets/images/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)



&nbsp;&nbsp;&nbsp;&nbsp;

### Add to GPX file 

You can use this plugin while  [recording the GPX track](/osmand/plugins/trip-recording). This way, all your notes will be added to the track as waypoints automatically.

![Audio video plugin to Track](/assets/images/plugins/audio-video-notes/audio_video_notes_to_track.png)

When [viewing the track](/osmand/map/track-context-menu), you'll see exactly what was recorded where.

![Audio video plugin to Track view](/assets/images/plugins/audio-video-notes/audio_video_notes_to_track_view.png)



&nbsp;&nbsp;&nbsp;&nbsp;

### Export to JOSM 


To view everything later, you can export the track together with all the media and see them in the  [JOSM editor](https://josm.openstreetmap.de/). Please note that you'll need to put the media in the corresponding folder (you'll know which one if you click on a video note and see the message about a missing file. Just put it in the indicated folder).

![Audio video notes in Josm](/assets/images/plugins/audio-video-notes/josm-track-points.png)


So there you have it: your personal notes linked to the map and stored in one place. Document your adventures!



&nbsp;&nbsp;&nbsp;&nbsp;

## File name details

The {% data variables.android-values.audionotes_plugin_name %} plugin generates audio/video/photo files in the following format:

    {SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}

where `SHORTLINK_LOCATION` indicates the latitude and longitude of the location that the file is linked to. The `SHORTLINK_LOCATION` is encoded, according to the specification https://wiki.openstreetmap.org/wiki/Shortlink.
