Module.register("islamicdate",{

    // Default module config.
    defaults: {
    masjid: "Al Hidayah Sektor 1.3"
    },

    getScripts:function(){
    return['IC.js']
    },
    start: function() {
       Log.log("Starting module: " + this.name);
       var self = this;
//set waktu refresh setiap 3 jam
       setInterval(function() {
         self.updateDom();
       }, 1800000);
        // Set locale.
    },
    // Override dom generator.

    getDom: function() {
        var namamasjid = this.config.masjid;
        var wrapper = document.createElement("div");
        var Date = IC.getIslamicDate();
        wrapper.className = "thin medlar3 bright";
        wrapper.style.color = "#28cb24";
        wrapper.innerHTML=(namamasjid + " - " + Date);
        return wrapper;
    }
});
