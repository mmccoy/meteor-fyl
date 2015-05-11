Posts = new Meteor.Collection("Posts");
Audio = new Meteor.Collection("Audio");


// Stub data

// Factory.define('post', Posts, {}).after(function(post) {
//   // Do something smart
//   // console.log(post);
// });

// Factory.define('audio', Audio, {});


// var audio1 = Factory.create('audio', {
//   postId: Factory.get('post'),
//   blob: '1029840912847124'
// });

// var audio2 = Factory.create('audio', {
//   postId: Factory.get('post'),
//   blob: '1029840912847124'
// });

// var post1 = Factory.create('post', {
//   title: Fake.sentence(),
//   date: new Date(),
//   audioId: Factory.get('audio')
// });

// var post2 = Factory.create('post', {
//   title: Fake.sentence(),
//   date: new Date(),
//   audioId: Factory.get('audio')
// });