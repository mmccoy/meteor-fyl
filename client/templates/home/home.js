Template.home.events({
  'submit form': function(e) {
    event.preventDefault();
    console.log("Form submitted");
    var title = e.target.title.value;
    Posts.insert({
      title: title,
      date: new Date()
    });
  }
});

Template.home.rendered = function() {

};
