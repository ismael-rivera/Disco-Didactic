module.exports = function(grunt) {

  // Project configuration.
  
  var libass = "assets";
  var imglobal = libass + "/img";
  var cssglobal = libass + "/css";
  var jsglobal = libass + "/js";
  var jsglobalibs = libass + "/js/libs"; 
  
  grunt.initConfig({
	  
    pkg: grunt.file.readJSON("package.json"),
      uglify: {
		options: {
			  banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n"
			},
		desktop: {
			files: [{ 
				
				src: [ jsglobalibs + "/jquery-1.10.2.min.js",
					   jsglobalibs + "/jquery-ui-1.10.4.custom.min.js",
					   jsglobalibs + "/jquery.easing.1.3.min.js",
					   jsglobalibs + "/jquery.bxslider.js",
					   //jsglobalibs + "/jquery.flexnav.js",
					   jsglobalibs + "/dasky.eval.js", 
					   jsglobalibs + "/modernizr-latest.js",
					   jsglobalibs + "/waypoints.min.js", 
					   jsglobalibs + "/waypoints-sticky.min.js",
					   jsglobalibs + "/jquery.smooth-scroll.min.js",
					   jsglobalibs + "/jquery.cycle2.js",
					   jsglobalibs + "/jquery.transit.min.js",
					   jsglobalibs + "/jquery.tipsy.js",
					   jsglobalibs + "/bootstrap.js",
					   jsglobalibs + "/jquery.scrollUp.min.js",
					   jsglobalibs + "/jquery.jcarousel.min.js",
					   jsglobalibs + "/jquery.ui.touch-punch.js",
					   jsglobalibs + "/jquery.prettyPhoto.js",
					   jsglobalibs + "/jquery.tipsy.js",
					   //jsglobalibs + "/s.js",
					   jsglobalibs + "/m.js", 
					  ],
				dest: "assets/js/compile/libs.js"
			},
			{   src: [ jsglobal + "/loader_anim.js",
			           jsglobal + "/jcarousel.ajax.js",
					   //jsglobal + "/flexnav.js",
					   jsglobal + "/gmap.js", 
					   jsglobal + "/site.js",
					   //jsglobal + "/livereload.js",
					  ], 
				dest: "assets/js/compile/js.js" 
			}]
	  },//Desktop Task Ends Here
	  mobile: {
			files: [{ 
				
				src: [ jsglobalibs + "/jquery-1.10.2.min.js",
					   jsglobalibs + "/jquery-ui-1.10.4.custom.min.js",
					   jsglobalibs + "/jquery.easing.1.3.min.js",
					   jsglobalibs + "/jquery.bxslider.js",
					   //jsglobalibs + "/jquery.flexnav.js",
					   jsglobalibs + "/dasky.eval.js", 
					   jsglobalibs + "/modernizr-latest.js",
					   jsglobalibs + "/waypoints.min.js", 
					   jsglobalibs + "/waypoints-sticky.min.js",
					   jsglobalibs + "/jquery.smooth-scroll.min.js",
					   jsglobalibs + "/jquery.cycle2.js",
					   jsglobalibs + "/jquery.transit.min.js",
					   jsglobalibs + "/jquery.tipsy.js",
					   jsglobalibs + "/bootstrap.js",
					   jsglobalibs + "/jquery.scrollUp.min.js",
					   jsglobalibs + "/jquery.jcarousel.min.js",
					   jsglobalibs + "/jquery.ui.touch-punch.js",
					   jsglobalibs + "/jquery.prettyPhoto.js",
					   jsglobalibs + "/jquery.tipsy.js",
					   //jsglobalibs + "/s.js",
					   jsglobalibs + "/m.js", 
					  ],
				dest: "assets/js/compile/libs_mobi.js"
			},
			{   src: [ //jsglobal + "/jcarousel.ajax.js",
					   //jsglobal + "/flexnav.js",
					   jsglobal + "/loader_anim.js",
					   jsglobal + "/gmap.js", 
					   jsglobal + "/site.js",
					   jsglobal + "/livereload.js",
					  ], 
				dest: "assets/js/compile/js_mobi.js" 
			}]
	  }//Mobile Task Ends Here
    },//Uglify End
	
	/*CSSmin-----------------------------------------------------------*/
	
	cssmin: {
       combine: {
          files: { "assets/css/compile/global_compile.css": 
				 [ cssglobal + "/reset.css", 
				   cssglobal + "/bootstrap.css",
				   cssglobal + "/jquery.bxslider.css",
				   cssglobal + "/new.css",
				   cssglobal + "/main.css",
				   cssglobal + "/custom.css",
				   cssglobal + "/menu.css",
			       cssglobal + "/sass.css",
				   cssglobal + "/elastislide.css",
				   cssglobal + "/jcarousel.responsive.css",
				   cssglobal + "/images.css",
				   cssglobal + "/tipsy.css",
			       cssglobal + "/prettyphoto.css",
				   cssglobal + "/timeline.css",
				   cssglobal + "/flexnav.css",
				   cssglobal + "/home.css",
				 ]
		   }
       }
    },
	
	/*Spritesmith-----------------------------------------------*/
    sprite: {	
      social: {
        src: [imglobal + "/social/*.{png,jpg,gif}" ],
        destImg: imglobal + "/sprites/social-sprites.png",
        destCSS: cssglobal + "/social-sprites.css",
		algorithm: "binary-tree",
		engine: "phantomjs",
		timeout: 99999
      },
	  /*avatars: {
        src: [imglobal + "/avatar/*.{png,jpg,gif}"],
        destImg: imglobal + "/sprites/spritesheet2.png",
        destCSS: cssglobal + "/sprites2.css",
		algorithm: "binary-tree",
		engine: "phantomjs",
		timeout: 99999
	 },*/
	  circles: {
        src: [imglobal + "/circles/*.{png,jpg,gif}"],
        destImg: imglobal + "/sprites/circles-sprites.png",
        destCSS: cssglobal + "/circles-sprites.css",
		algorithm: "binary-tree",
		engine: "phantomjs",
		timeout: 99999
	  },
	  language: {
        src: [imglobal + "/language/*.{png,jpg,gif}"],
        destImg: imglobal + "/language/language-sprites.png",
        destCSS: cssglobal + "/language-sprites.css",
		algorithm: "binary-tree",
		engine: "phantomjs",
		timeout: 99999
	 },
	  /*sitelogos: {
        src: [imglobal + "/logo/*.{png,jpg,gif}"],
        destImg: imglobal + "/sprites/spritesheet5.png",
        destCSS: cssglobal + "/sprites5.css",
		algorithm: "binary-tree",
		engine: "phantomjs",
		timeout: 99999
	 },
	  all6: {
        src: [imglobal + "/si/16px/*.{png,jpg,gif}"],
        destImg: imglobal + "/sprites/spritesheet6.png",
        destCSS: cssglobal + "/sprites6.css",
		algorithm: "binary-tree",
		engine: "phantomjs",
		timeout: 99999
	 }*/
	 },
	 
	 /*Grunt Watch-----------------------------------------------*/
	 watch: {
		options: {
		  livereload: true,
		},
		html: {
		  files: ["assets/**/*", "template_parts/**/*", "*.php", "*.html"],
		  options: {
                livereload: true
            }
			},
		js: {
		  files: [jsglobalibs + "/*.js", "assets/js/*.js"],
		  tasks: ["uglify"]
		},
		css: {
          files: [cssglobal + "/*.css"],
          tasks: ["cssmin"]
        },
	  },
	 
	 /*ImageMin----------------------------------------------------*/ 
	 imagemin: {                             // Task
	 
	   single: {
		  options: {                       // Target options
			pngquant: true
		  },
		  files: {                         // Last optimized image file
			"assets/img/optimized/rockstar.gif" : imglobal + "/anim/rockstar.gif" // "destination": "source"
		  }
	   },                           
	   directory: {                          // Target
		      options: {                     // Target options
			     pngquant: true
		      },
		      files: [{
			     expand: true,                         // Enable dynamic expansion
			     cwd: imglobal + "/sprites/",            // Src matches are relative to this path
			     src: ["**/*.{png,jpg,gif}"],                  // Actual patterns to match
			     dest: imglobal + "/sprites/optimized-bin/"  // Destination path prefix
              }]
       },
	   language: {
		      options: {                     // Target options
			     pngquant: true
		      },
		      files: [{
				 expand: true,                         // Enable dynamic expansion
			     cwd: imglobal + "/language/",            // Src matches are relative to this path
			     src: ["**/*.{png,jpg,gif}"],                  // Actual patterns to match
			     dest: imglobal + "/language/optimized-bin/"  // Destination path prefix  
			  }]
	   }
  
     },//----------------------------------End imagemin
	 
	 /*JSHINT-------------------------------------------------------*/
	 
	 jshint: {
	   // define the files to lint
	   files: [ jsglobal + "**/*.js"],
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