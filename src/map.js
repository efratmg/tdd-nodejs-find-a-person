
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
var post=
    this._posts.filter(
    function( s ) { return s.indexOf(name) !== -1; });
return post;
};