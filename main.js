   $(document).ready(function() {  
               $('#technicalarpvideoButton').click(function() {  
               function GetQueryParam(parameter, address){  
               var p = escape(unescape(parameter));  
               var regex = new RegExp("[?&]" + p + "(?:=([^&]*))?","i");  
               var match = regex.exec(address);  
               var value = null;  
               if( match != null ){  
               value = match[1];  
               }  
               return value;  
               }  
               var videoURL = $('#technicalarpvid').val();  
               var theID = GetQueryParam("v", videoURL);  
               $("#thumbnails").empty();  
               if(theID != null) {  
               $('<div></div>')  
               .html(  
               '<h2>I like you :) These are your thumbnails.. ** Click on a below image and Right Click on it at next Tab and Click "Save Image As..." to Download the image</h2><h3>» Default Thumbnail</h3><a href="http://img.youtube.com/vi/' + theID + '/default.jpg" target="_blank"><img src="https://img.youtube.com/vi/' + theID + '/default.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><h3>» 3 Other Small Thumbnails</h3><a href="http://img.youtube.com/vi/' + theID + '/1.jpg" target="_blank"><img src="https://img.youtube.com/vi/' + theID + '/1.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><a href="http://img.youtube.com/vi/' + theID + '/2.jpg" target="_blank"><img src="https://img.youtube.com/vi/' + theID + '/2.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><a href="http://img.youtube.com/vi/' + theID + '/3.jpg" target="_blank"><img src="https://img.youtube.com/vi/' + theID + '/3.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><h3>» Medium Quality Thumbnails</h3><a href="http://img.youtube.com/vi/' + theID + '/mqdefault.jpg" target="_blank"><img src="https://img.youtube.com/vi/' + theID + '/mqdefault.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><br/><a href="http://img.youtube.com/vi/' + theID + '/0.jpg" target="_blank"><img src="https://img.youtube.com/vi/' + theID + '/0.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><h3>» High Quality Thumbnails</h3><a href="http://img.youtube.com/vi/' + theID + '/hqdefault.jpg" target="_blank"><img src="https://img.youtube.com/vi/' + theID + '/hqdefault.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a><h3>» High Definition Thumbnail ( **Only available if, your video is more than 720p )</h3><a href="http://img.youtube.com/vi/' + theID + '/maxresdefault.jpg" target="_blank"><img src="https://img.youtube.com/vi/' + theID + '/maxresdefault.jpg"><figcaption>Download by: Right Click and Save Image as</figcaption></a>').appendTo("#thumbnails");  
               } else {  
               $('<div></div>').html('<div id="sorry">It seems like your "url" has an error</div>').appendTo("#thumbnails");  
               }  
               });  
          });  
               function showHide() {  
               var div = document.getElementById("hidden_div");  
               if (div.style.display == 'none') {  
               div.style.display = '';  
               }  
               else {  
               div.style.display = '';  
               }  
          }