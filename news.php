
		<?php
				$url1="http://www.google.com";
				$url='https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=5442ba94308445dab5609ac218fc7cc0';
				$x=file_get_contents($url);
				echo $x;
				?>

