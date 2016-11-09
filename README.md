# QuestionPoint Failover Chat for LibraryH3lp Chat

This code can be used to check the current status of LibraryH3lp Chat and either display the LibraryH3lp Chat if online or the QuestionPoint Chat if not online. If LibraryH3lp is staffed during business hours, then QuestionPoint will only display during after-hours.

## Installation and Configuration

The application consists of 3 parts: a PHP script that checks the real-time status of LibraryHelp, a JS script that calls the PHP using an AJAX request and the HTML page where a link to open the Chat popup exists.

### PHP

The file php/chat_status.php needs to be installed on a web server that can process PHP scripts. The $libraryh3lp_queue variable needs to be set to the name of your libraryh3lp chat queue. If you are calling the chat_status.php from a different domain than the domain where the JS file will reside, then you will need to update the Access-Control-Allow-Origin line to include the alternate domain.

### JS

The js/chat.js file needs to be installed on a web server. The following three settings need to be configured:

```js

var chat_status_url = "//library.university.edu/chat/chat_status.php";
var libraryh3lp_queue = "library-queue";
var questionpoint_instid = "12345";

```

chat_status_url - the location of the PHP script you installed in the previous step
libraryh3lp_queue - the name of your LibraryH3lp queue
questionpoint_instid - the QuestionPoint institution ID for your institution

### HTML

On your website you can add a link to open the chat popup. You can follow the example HTML used in html/index.html. The link href needs to be set to javascript:ChatPopup(); and the chat.js include file needs to be referenced in the location where it was installed in the previous step.


