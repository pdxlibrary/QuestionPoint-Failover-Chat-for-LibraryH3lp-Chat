<?php

// set to your institution's libraryh3lp queue
$libraryh3lp_queue = "library-queue";
header('Access-Control-Allow-Origin: http://library.university.edu');

$status = simplexml_load_file("http://libraryh3lp.com/presence/jid/".$libraryh3lp_queue."/chat.libraryh3lp.com/xml");

if(isset($status->resource))
{
	foreach($status->resource->attributes() as $a => $b) 
	{
		if(!strcmp($a,'show'))
		{
			print($b);
			break;
		}
	}	
}

?>