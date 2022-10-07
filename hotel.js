const request = require('request');

  try {
    request(
      `https://engine.hotellook.com/api/v2/lookup.json?query=Campeche&lang=es&lookFor=both&limit=1&token=9b14598bf751782fab3730b1a2359f05`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            console.log(res);
            console.log(res.results.hotels);
            console.log(`////////////////////////////////¡Hotel encontrado!////////////////////////////////\n${res.results.hotels[0].label}\nCalificación: ${res.results.hotels[0]._score} \nLocación:${res.results.hotels[0].locationName}`);
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  } catch (e) {
    console.log(e);
  }

