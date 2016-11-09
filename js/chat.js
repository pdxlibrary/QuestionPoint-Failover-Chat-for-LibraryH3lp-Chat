
// set chat_status_url, libraryh3lp_queue and questionpoint_instid to the relevant values for your institution
var chat_status_url = "//library.university.edu/chat/chat_status.php";
var libraryh3lp_queue = "library-queue";
var questionpoint_instid = "12345";

function ChatPopup()
{
	// check if chat is online
	$.ajax({
		url: chat_status_url,
		cache: false,
		async: false,
		success: function(status) {
			if(status == "available" || status == "chat")
			{
				// if at least one libraryh3lp librarian is in "available" or "chat" status, display the libraryh3lp chat widget
				var win = window.open("//libraryh3lp.com/chat/"+libraryh3lp_queue+"@chat.libraryh3lp.com?identity=Operator&sounds=true&popout=1&sounds=1", "Chat", "height=480,width=280,toolbar=no,menubar=no,resizable=no,scrollbars=yes");
				if (win) {
					win.focus();
				}
			}
			else
			{
				// if no libraryh3lp librarians are in "available" or "chat" status, display the questionpoint chat widget
				var win = window.open("//www.questionpoint.org/crs/qwidgetV4/patronChatQwidget.jsp?langcode=1&instid="+questionpoint_instid+"&ts=1472089739870&skin=black&size=standard&referer=&window=popout", "Chat", "height=480,width=280,toolbar=no,menubar=no,resizable=no,scrollbars=yes");
				if (win) {
					win.focus();
				}
			}
		}
	});
}