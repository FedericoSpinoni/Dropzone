var files = [];

var myDropzone = new Dropzone(
    "#my-awesome-dropzone",
    {
        url: "./index.php",
        autoProcessQueue: false,
        uploadMultiple: true,
        maxFiles: 100,
        addRemoveLinks: true,
        parallelUploads: 100,
        previewsContainer: ".dropzone-previews-container",
        init: function () {
            document.getElementById("submit").addEventListener("click", function (e) {
                e.preventDefault();
                myDropzone.processQueue();
            });
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
            this.on("sendingmultiple", function () {
                console.log("Sending multiple");
                // Gets triggered when the form is actually being sent.
                // Hide the success button or the complete form.
            });
            this.on("successmultiple", function (files, response) {
                console.log("Success multiple");
                // Gets triggered when the files have successfully been sent.
                // Redirect user or notify of success.
            });
            this.on("errormultiple", function (files, response) {
                console.log("Error multiple");
                // Gets triggered when there was an error sending the files.
                // Maybe show form again, and notify user of error
            });
        }
    });