var print = console.log

Boolean.prototype.toHtml = function(id) {
  id = id || 'b_1'
  return '<input type="checkbox"'
	+ ' id="' + id + '"' 
	+ ' checked="'
	+ (this.valueOf() ? 'checked' : '') + '">'
}

Number.prototype.toHtml = function(id) {
  id = id || 'n_1'
  return '<input type="numeric"'
	+ ' id="' + id + '"'
	+ ' value="' + this.valueOf() + '">'
}

String.prototype.toHtml = function(id) {
  id = id || 's_1'
  return '<input type="text"'
	+ ' id="' + id + '"'
	+ ' value="' + this.valueOf() + '">'
}

Array.prototype.toHtml = function(id) {
  id = id || 'a_1'
  var html = '<select id="' + id + '">'

  for (var i = 0; i < this.length; i++) {
    var item = this[i]
    var value = item.toString()
    html += '<option'
		+ ' id="' + id + '_' + item + '"'
		+ ' >' + value 		
  }

  html += '</select>'
  return html
}

Object.prototype.toHtml = function(id) {
  id = id || 'o_1'
  var html = '<table id="' + id + '">'
  var object = this.data ? this.data : this

  for (var prop in object) {
    if (!object.hasOwnProperty(prop)) continue;
    var item = object[prop]
    var action = item.toHtml ? 'toHtml' : 'toString'
    var value = item[action](id + '_' + prop)
    html += '<tr><td>' + prop + '</td><td>' + value + '</td></tr>'
  }

  html += '</table>'
  return html
}

var m = {
  choices: ['A', 'B', 'C'],
  choices2: {A: true, B: false, C: true}
}
