Build Nested Routes
Build API Calls

BELOW please note:
    "${}"'s are placeholders
    'showdate' must be formatted yyyy-mo-day

<!-- *** RETURNS VENUE, CITY, STATE, SETLIST & more **** -->
https://api.phish.net/v3/setlists/get?apikey=${APIKEY}&showdate=${showdate}


<!-- **** RETURNS LASTEST SHOW INFO **** -->
https://api.phish.net/v3/setlists/latest?apikey=${APIKEY}

<!-- **** RETURNS SHOWS FROM A GIVEN YEAR **** -->
https://api.phish.net/v3/shows/query?apikey=${APIKEY}

<!-- **** RETURNS ALL VENUES **** -->
https://api.phish.net/v3/venues/all?apikey=${APIKEY}


YOUTUBE EMBED
<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}” frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

YOUTUBE VIDEO SEARCH
https://www.googleapis.com/youtube/v3/search?part=snippet&q="${search_term}"&key=${APIKEY}

RELISTEN
<!-- ***** RETURNS ALL YEARS -->
https://api.relisten.net/api/v2/artists/phish/years/

<!-- **** RETURNS ALL SHOWS IN A GIVEN YEAR -->
https://api.relisten.net/api/v2/artists/phish/years/${year}
