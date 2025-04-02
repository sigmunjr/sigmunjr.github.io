// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-selvkjørende-biler-fra-hype-til-virkelighet-snart-i-norge",
        
          title: "Selvkjørende biler – Fra hype til virkelighet, snart i Norge?",
        
        description: "Selvkjørende biler har vært lovet lenge, men selv om mange har gitt opp håpet, blir teknologien forbedret jevnt og trutt.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/selvkj%C3%B8rende_biler/";
          
        },
      },{id: "post-det-blir-ikke-menneskelig-ki-bare-ved-å-gjette-neste-ord",
        
          title: "Det blir ikke menneskelig KI bare ved å gjette neste ord",
        
        description: "CEOene i de amerikanske teknologifirmaene sier vi bare trenger større datahaller for at KI skal kunne klare alt, det er nok neppe riktig, men hva skal egentlig til?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/menneskelig_KI/";
          
        },
      },{id: "post-ockhams-barberkniv-er-en-bærebjelke-for-store-språkmodeller",
        
          title: "Ockhams barberkniv er en bærebjelke for store språkmodeller",
        
        description: "I vitenskapen har det lenge vært en grunnregel at de enkleste forklaringene er de beste, dette er også mekanismen som gjør at transformer modellene vi finner i ChatGPT fungerer.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ockhams_spraakmodeller/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
