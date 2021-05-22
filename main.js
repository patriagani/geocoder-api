const openGeocoder = require('node-open-geocoder');
 
openGeocoder()
  .geocode('sleman, yogyakarta')
  .end((err, res) => {
      if (!err) {
          console.log(res)
      }
      else {
          console.log(err)
      }
  })

openGeocoder()
  .reverse(110.4317, -7.7625 )
  .end((err, res) => {
      if (!err) {
          console.log(res)
      }
      else {
          console.log(err)
      }
  })