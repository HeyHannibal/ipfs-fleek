!(function (FOLIO, undefined) {
  "use strict";
  console.log("ass");

  /*
            1) How to use:
                 - Uncomment predefined settings  and/or
                 - Enter your own values

            2) Exclude this file from html page if no settings provided.
            3) Annotated settings & options: http://docs.foliodot.com/options
        */

  FOLIO.config = {
    content: {
      //transition : 'scale-up'
      // ui: "icon",
    },

    project: {
      // enumeration: false,
      pagination: false,
      buttonSection: "gallery",
    },

    thumbnails: {
      //transition : 'up'
      //grid : '3x2',
      //fit : 'cover'
    },

    sidebar: {
      align: "top",
      // hidden: false,
    },
    email: {
      text: "MAIL", // Email label
      address: "you@somedomain.com", // Your email address
    },
  };
})((window.FOLIO = window.FOLIO || {}));
