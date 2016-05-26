"use strict";
define(['require', 'scene'],
  function(require, Scene) {

    class TOMReliefandRedRoads extends Scene {
      constructor() {
          console.log("Going to Super Scene TOMReliefandRedRoads");
          var config = {
            "id": "TOMReliefandRedRoads",
            "groupid": "history",
            "languages": ['en-US', 'nl-NL'],
          };
          super(config);
        }
        // You must copy this, else we do not know where we are
      get path() {
        return require.toUrl("./").split('?')[0];
      }
      get legend() {
        var legend = [];
        legend['items'] = [];
        legend['items'].push({
          title: 'home.scenes.TOMArchitecturalStyles.stone_town.title',
          description: 'home.scenes.TOMArchitecturalStyles.stone_town.description',
          css: "background-color: rgb(0.843, 0.098, 0.110);",
          color: "rgb(215,25,28,255)",
          minzoom: 14,
          maxzoom: 22,
        });
        return legend;
      }
    };


    return new TOMReliefandRedRoads();

  });
