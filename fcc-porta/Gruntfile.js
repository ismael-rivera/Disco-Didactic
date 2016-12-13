module.exports = function(grunt) {

  // Project configuration.
  
  grunt.initConfig({
	  
    pkg: grunt.file.readJSON("package.json"),
	
	/*Spritesmith-----------------------------------------------*/
    sprite: {	
      social: {
        src: "/spritemaker/*.{png,jpg,gif}" ],
        destImg: "/tech-sprites.png",
        destCSS: "/tech-sprites.css",
		algorithm: "binary-tree",
		engine: "phantomjs",
		timeout: 99999
      }
	 },
	 
	 /*Grunt Watch-----------------------------------------------*/
	 watch: {
		options: {
		  livereload: true,
		},
		html: {
		  files: ["*.php", "*.html", "*.js", "*.css"],
		  options: {
                livereload: true
            }
		}
	  },
	 
	 /*ImageMin----------------------------------------------------*/ 
	 imagemin: {                             // Task
	                            
	   directory: {                          // Target
		      options: {                     // Target options
			     pngquant: true
		      },
		      files: [{
			     expand: true,                         // Enable dynamic expansion
			     cwd: "/imagemin/",            // Src matches are relative to this path
			     src: ["**/*.{png,jpg,gif}"],                  // Actual patterns to match
			     dest:"/imagemin/optimized-bin/"  // Destination path prefix
              }]
       }
     },//----------------------------------End imagemin
	 
	 /*JSHINT-------------------------------------------------------*/
	 
	 jshint: {
	   // define the files to lint
	   files: ["*.js"],
	   // configure JSHint (documented at http://www.jshint.com/docs/)
	   options: {
		   curly: true,
           eqeqeq: true,
           eqnull: true,
           browser: true,
	   // more options here if you want to override JSHint defaults
		   globals: {
			 jQuery: true,
			 console: true,
			 module: true
			}
	   }
	 }
	 
  	
  });/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  Grunt initconfig end
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
  
  


  // Load the plugins that provides each specified task.
  // and register for each the Default task(s).
  
  //Leave this for the end
  
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-htmlcompressor");
  grunt.loadNpmTasks("grunt-spritesmith");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-uncss");
  grunt.loadNpmTasks("grunt-contrib-imagemin");  
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask("default", ["uglify"]);

};