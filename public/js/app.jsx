var App = React.createClass({
  getInitialState: function() {
    // this sets the starting state for the component
    return null;
  },
  componentDidMount: function() {
    // this fires whenever the component mounts to the page
    $('#results').hide();
  },
  handleClick: function(event) {
    // get the input value
    var artist = $('#artist').val();
    // build the url string
    var albums_url = "https://api.spotify.com/v1/search?type=album,artist&q=artist:" + encodeURIComponent(artist);
    // make the api call
    $.ajax(albums_url).done(function(res){
      // build the ui based on the response
      $('#result-album-count').text(res.albums.total);
      // build the artist html from the first result
      var artist = res.artists.items[0];
      var artist_html = "<a href='" + artist.external_urls.spotify + "' target='_blank'>"
        + "<h2>" + artist.name + "</h2></a>"
        + "<img height='300' src='" + artist.images[1].url + "'><br/>"
        + "<strong>Popularity: </strong>" + artist.popularity;
      // iterate over the albums and generate the html
      var albums_html = '';
      res.albums.items.map(function(album) {
        albums_html += "<div>"
            + "<a href='" + album.external_urls.spotify +"' target='_blank'><h3>" + album.name + "</h3></a>"
            + "<img src='" + album.images[2].url + "'>"
            + "</div>";
      });
      // set the DOM element's html
      $('#result-artist').html(artist_html);
      $('#result-albums').html(albums_html);
      // display the results
      $('#results').show();
    });
  },
  render: function() {
    return (
      <div>
        <h1>React Tunes</h1>
        <input type="text" id="artist" placeholder="Who is your favorite artist?"/>
        <button onClick={this.handleClick}>Search</button>
        <br/>
        <div id="results">
          We found <span id="result-album-count"/> albums.
          <div id="result-artist">
          </div>
          <h2>Albums</h2>
          <div id="result-albums">
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App/>,document.body);
