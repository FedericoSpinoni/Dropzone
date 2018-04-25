var files = [];

var myDropzone = new Dropzone(
    "#my-awesome-dropzone",
    {
        url: "./index.php",
        autoProcessQueue: false,
        maxFiles: 100,
        addRemoveLinks: true,
        parallelUploads: 100,
        init: function () {
            this.on("addedfile", function (file) {
                files.push(file);
                console.log(files);
            });
            this.on("removedfile", function (file) {
                files.splice(files.indexOf(file), 1);
                console.log(files);
            });
            this.on("queuecomplete", function () {
                console.log("Chunks Uploaded");
                myDropzone.removeAllFiles();
            });
        }
    });

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    myDropzone.processQueue();
});
