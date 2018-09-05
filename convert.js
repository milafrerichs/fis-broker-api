process.env["PATH"] = process.env["PATH"] + ":" + process.env["LAMBDA_TASK_ROOT"]+ "/lib/";

console.log(process.env)

var ogr2ogr = require('ogr2ogr');

const toShapefile = (data) => {
  return new Promise(function(resolve, reject) {
    const responseData = [];
    const shapefile = ogr2ogr(data)
    .format('ESRI Shapefile')
    .skipfailures()
    .exec((er, response) => {
      if (er) reject(er)
      resolve(response);
    });
  });
};

module.exports = {
  toShapefile: toShapefile
};
