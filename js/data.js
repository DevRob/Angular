var Data = function() {
  this.bio = {
      // Bio with name, role, contacts, picture welcome msg and skills
      "name" : "Robert Molnar",
      "role" : "Software Developer",
      "contacts" : {
      "mobile" : "+ 353 87 925 6846",
      "email" : "mail.robertmolnar@gmail.com",
      "github" : "DevRob",
      "location" : "Limerick, Ireland",
      },
      "picture" : "images/portrait.jpg",
      "skills" : ["Javascript", "HTML / CSS", "knockout.js", ".NET ( C# )", "Python", "MySQL", "Git"]
  }
  this.pages = [
    {
      "title": "welcome",
      "description":  "Welcome to my portfolio site.",
      "contents": [
        {
          "header": "The idea.",
          "article": "Software Developer experienced with object-oriented and functional" +
                          "programming languages. Working with server and client side applications" +
                          "using HTML, CSS, Javascript, .NET, MySQL. Familiar with Responsive Web" +
                          "Design techniques, Google Maps API, JQuery and data-binding with knockout.js." +
                          "Highly value re-usable, maintainable, self-documenting code. Fast learner and" +
                          "open to using new technologies and frameworks.",
          "images": [
            "img/Asteroid2.png",
            "img/Asteroid2.png"
          ]
        }
      ]
    },
    {
      "title": "projects",
      "description": "Few of my projects in not particular order",
      "contents": [
       {
         "header": "CSS 3D Transform",
         "article": "Experimenting with 3D UI design. I did not find the benefit to filling out a swiveling web form," +
                    "but it's fun to experiment with and a good coding challange.",
         "images": [
           "img/3DTransform.png"
         ],
         "live_link": "http://devrob.github.io/3D-transforms/",
         "source_code_link": "https://github.com/DevRob/3D-transforms"
       },
       {
         "header": "Weired but good stuff we like about JavaScript.",
         "article": "Here it the details of the next content.",
         "images": [
           "http://media.gettyimages.com/photos/tell-me-about-the-color-picture-id560053331",
           "http://media.gettyimages.com/photos/burchells-zebra-pair-kruger-national-park-south-africa-picture-id479672979"
         ]
       }
      ]
    },
    {
      "title": "HTML",
      "description": "No idea what to write about HTML so far",
      "contents": [
       {
         "header": "HTML is great and nice to keep it short nd tidy",
         "article": "Here we can discuss the details of the content.",
         "images": [
           "http://media.gettyimages.com/photos/people-crossing-monkey-bars-on-boot-camp-obstacle-course-picture-id554392415",
           "http://media.gettyimages.com/photos/determined-woman-running-with-log-on-boot-camp-obstacle-course-picture-id554392657"
         ]
       },
       {
         "header": "Keep it indented.",
         "article": "Here it the details of the next content.",
         "images": [
           "http://media.gettyimages.com/photos/four-female-rowers-placing-oars-at-lakeshore-picture-id535654959",
           "http://media.gettyimages.com/photos/four-female-rowers-cheering-at-lakeshore-picture-id535654957"
         ]
       }
     ]
    },
    {
      "title": "CSS",
      "description": "It's all about the power of CSS",
      "contents": [
       {
         "header": "Header for something",
         "article": "Here we can discuss the details of the content.",
         "images": [
           "http://media.gettyimages.com/photos/young-woman-going-pushups-on-kettlebells-picture-id596435009",
           "http://media.gettyimages.com/photos/woman-doing-pullups-in-gym-picture-id597069045"
         ]
       },
       {
         "header": "you've better keep it separated!.",
         "article": "Here it the details how to keep it separated.",
         "images": [
           "http://media.gettyimages.com/photos/low-angle-photo-of-mountain-biker-jumping-in-forest-picture-id472560450",
           "http://media.gettyimages.com/photos/mountain-biking-france-picture-id466744207",
           "http://media.gettyimages.com/photos/mountain-biking-the-alps-picture-id463683541"
         ]
       }
     ]
    },
    {
      "title": "AngularJS",
      "description": "This site built with AngularJS. I used directives and functions",
      "contents": [
       {
         "header": "$scope is what matters.",
         "article": "Here we can discuss the details of the content.",
         "images": [
           "http://cache2.asset-cache.net/gc/538250806-local-women-dressed-in-saotome-traditional-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=X7WJLa88Cweo9HktRLaNXoAIbSC%2f94i8E2x1JmfS1ebVpLuUth3q9JL%2bfU0C8xW9"
         ]
       },
       {
         "header": "Dont' get lost in directives.",
         "article": "Here it the details of the next content.",
         "images": [
           "http://media.gettyimages.com/photos/bee-reflected-in-glass-picture-id140281375",
           "http://media.gettyimages.com/photos/bee-and-flower-picture-id157940422",
           "http://media.gettyimages.com/photos/flower-picture-id175343934"
         ]
       }
     ]
    },
    {
      "title": "Bootstrap",
      "description": "I might delete this section completely",
      "contents": [
       {
         "header": "Might use some colums and rows.",
         "article": "Here we can discuss the details of the content.",
         "images": [
           "http://media.gettyimages.com/photos/tibetan-buddhists-visit-a-shrine-with-fake-skulls-at-the-sky-burial-picture-id495461488",
           "http://media.gettyimages.com/photos/tibetan-buddhist-nuns-prepare-butter-lamps-during-the-annual-bliss-picture-id495449272"
         ]
       },
       {
         "header": "Responsive images for the win.",
         "article": "Here it the details of the next content.",
         "images": [
           "http://67.media.tumblr.com/947ec95f957117874a2b05a685541770/tumblr_o6r751JPhc1qzo6t3o2_1280.jpg",
           "http://65.media.tumblr.com/623cb3ba83dc2f7dad7c31933bdfa6cf/tumblr_o6r751JPhc1qzo6t3o3_1280.jpg"
         ]
       }
     ]
    },
    {
      "title": "Python",
      "description": "Good place to mention Algorithmic thinking projects",
      "contents": [
       {
         "header": "The game Asteroid?!",
         "article": "Here we can discuss the details of the content.",
         "images": [
           "http://65.media.tumblr.com/5d568a5a0e5cc8022565ef59d1ed5e7a/tumblr_o6e89gjn8e1qzo6t3o1_1280.jpg",
           "http://66.media.tumblr.com/82e3f84cb11df3302923f00694357b98/tumblr_o6e89gjn8e1qzo6t3o2_1280.jpg"
         ]
       },
       {
         "header": "Probability and combinatorix.",
         "article": "Here it the details of the next content.",
         "images": [
           "http://67.media.tumblr.com/016273835b1b73e44fdcf8aba4de60b2/tumblr_o5zprm0Ev21r40y78o2_1280.jpg"
         ]
       }
     ]
    },
    {
      "title": "GitHub",
      "description": "Push it to the cloud.",
      "contents": [
       {
         "header": "I use it for all my projects.",
         "article": "Here we can discuss the details of the content.",
         "images": [
           "http://66.media.tumblr.com/e5c230f470671473555d661f62bd467e/tumblr_o5zprm0Ev21r40y78o1_1280.jpg"
         ]
       },
       {
         "header": "One content might be enough for this.",
         "article": "Here it the details of the next content.",
         "images": []
       }
     ]
    },
    {
      "title": "JQuery",
      "description": "$('#pageContent').show() or something",
      "contents": [
       {
         "header": "Chain is the power",
         "article": "Here we can discuss the details of the content.",
         "images": []
       },
       {
         "header": "Another header for next content.",
         "article": "Here it the details of the next content.",
         "images": [
           "http://66.media.tumblr.com/cee5770d9f7276ea0ac960d919059ad9/tumblr_o5zprm0Ev21r40y78o3_1280.jpg"
         ]
       }
     ]
    },
    {
      "title": "Google API",
      "description": "The Google API Neighborhood Project for Udacity.",
      "contents": [
       {
         "header": "Places API",
         "article": "Here we can discuss the details of the content.",
         "images": [
           "http://67.media.tumblr.com/4fc33a29b225117396b51df22fcc89b5/tumblr_o6e2zoWqou1qzo6t3o2_1280.jpg",
           "http://67.media.tumblr.com/16dd46ef43f47f5b21250a90ab3545ce/tumblr_o6e2zoWqou1qzo6t3o1_1280.jpg"
         ]
       },
       {
         "header": "Just a simple map embeded into your site.",
         "article": "Here it the details of the next content.",
         "images": [
           "http://66.media.tumblr.com/ec3eb10b420225fe8c9248f44d3a8558/tumblr_o7nn965krP1s4ksu2o1_500.jpg",
           "http://66.media.tumblr.com/68fd8f95052503f810bc4fd3c75dc9d9/tumblr_o8629bNU2D1s4ksu2o1_1280.jpg",
           "http://66.media.tumblr.com/b74eec626c0f2317296f0a7a833008b5/tumblr_nozhimMtMc1qzo6t3o1_1280.jpg"
         ]
       }
     ]
   }
 ]
};
