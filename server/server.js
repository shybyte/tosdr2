var fs = Npm.require('fs');
var path = Npm.require('path');

Meteor.publish('points', function () {
  return Points.find();
});

Meteor.publish('services', function () {
  return Services.find();
});

Meteor.publish('topics', function () {
  return Topics.find();
});


Meteor.methods({
  publishToApi: function () {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    console.log('Started export to file system ...');

    var baseDir = '/tmp/tosdr';

    exportTopicsToFileSystem(baseDir);
    exportServicesToFileSystem(baseDir);
    exportApprovedPointsToFileSystem(baseDir)

    console.log('Finished export to file system.');
  }
});

function exportTopicsToFileSystem(baseDir) {
  console.log('Start to export topics ...');
  var topicsDir = path.join(baseDir, 'topics');
  mkdirp.sync(topicsDir);

  Topics.find().forEach(function (topic) {
    var writeStream = fs.createWriteStream(path.join(topicsDir, topic.id + '.json'), {flags: 'w'});
    writeStream.write(JSON.stringify(topic));
    writeStream.end();
  });
}

function exportServicesToFileSystem(baseDir) {
  console.log('Start to export services ...');
  var servicesDir = path.join(baseDir, 'services');
  mkdirp.sync(servicesDir);

  Services.find().forEach(function (service) {
    var writeStream = fs.createWriteStream(path.join(servicesDir, service.id + '.json'), {flags: 'w'});
    writeStream.write(JSON.stringify(service));
    writeStream.end();
  });
}

function exportApprovedPointsToFileSystem(baseDir) {
  console.log('Start to export approved points ...');
  var pointsDir = path.join(baseDir, 'points');
  mkdirp.sync(pointsDir);

  Points.find({approved: true}).forEach(function (point) {
    var writeStream = fs.createWriteStream(path.join(pointsDir, (point.id || point._id) + '.json'), {flags: 'w'});
    writeStream.write(JSON.stringify(point));
    writeStream.end();
  });
}