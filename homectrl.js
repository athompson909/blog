app.controller('HomeCtrl', [
  '$scope',
  'factory',
  function($scope, factory) {
      $scope.select ='Mis Viajecitos';
      $scope.articles = [
        {
          title: "Chile... what the?!?!",
          date: "January 13-17, 2017",
          titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/chile%2Fchilejumbo3.jpg?alt=media&token=52512ed1-2e9b-4481-b135-5ed3ae34ce26",
          intro: "This was the last leg of my Christmas break South America trip.  I went to meet up with my buddy Renzo in Santiago but ended up doing so much more than just seeing Santiago.",
          url: "#/blog?id=3"
        },
        {
          title: "Revisiting the mission and more",
          date: "December 28th, 2016 - January 13th, 2017",
          titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/peru-ec%2Fpuertojumbo.png?alt=media&token=7cc656bb-ab03-44ae-bcaf-d3953f147573",
          intro: "I had such a fun time back in Peru... It was amazin'.  The highlights included some good time spent in the jungle, Lima, the north, and Quito, Ecuador, and tons of other places.  I'm dying to get back.",
          url: "#/blog?id=4"
        },
        {
          title: "My li'l Atlanta layover",
          date: "December 28th, 2016",
          titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/atl%2FATLJUMBO2.jpg?alt=media&token=2bbc2b68-d387-4b5a-9bd4-9739f2cd5fd3",
          intro: "I'm such a pro at making a 12 hour layover be awesome",
          url: "#/blog?id=5"
        },
        {
          title: "Costa Rica and Nicaragua",
          date: "June 28 - July 7, 2016",
          titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/costaricanic%2Fcostaricanic-title.png?alt=media&token=83a17cc4-df37-4fa8-9f75-83a3e53e846c",
          intro: "This was my official first solo trip, and it was a really good experience.  I spent a few days mostly on the Carribean side of Costa Rica and then headed north for Nicaragua and saw Salazar",
          url: "#/blog?id=2"
        },
        {
          title: "Capitol Reef National Park",
          date: "May 30, 2016",
          titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/capitolreef%2Fcapitolreef-title.png?alt=media&token=fb2bd32e-20c8-4378-8e3c-ec9982fdb39f",
          intro: "Another spontaneous trip happened because it was a holiday and I didn't have work...  It's so good to have friends who can make room for you at the very very last minute",
          url: "#/blog?id=1"
        },
        {
          title: "Guadalajara trip with Sydney",
          date: "April 27 - May 8, 2016",
          titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2Fjailsco-title.png?alt=media&token=eda476d6-9f37-447a-9477-7fe00d885bc8",
          intro: "This was probably one of the most spontaneous things I've ever done, I was planning on working in Portland for the summer but a sudden change of plans led to this awesome trip!",
          url: "#/blog?id=0"
        },
      ]
  }
]);

//
// var articles = [
//   {
//     row: [
//       {
//         title: "Volunteering at El Sauzal in Baja California with Kaiizen",
//         date: "February 17 - 20, 2016",
//         titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/kaiizenbaja%2FScreen%20Shot%202016-12-11%20at%204.37.33%20PM.png?alt=media&token=af9df1a7-9bbd-4987-b2d9-5a2d3d10db43",
//         intro: "Thanks to Sarah's sweet hookups (aka Daniel), we got the chance to drive down to El Sauzal orphanage, which is near Ensenada Mexico, to play with these awesome kids for a few days",
//         url: "#/blog?id=3"
//       },
//       {
//         title: "Guadalajara trip with Sydney",
//         date: "April 27 - May 8, 2016",
//         titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/IMG_0567.JPG?alt=media&token=b2f9abcd-96e6-4844-bb5b-63111ee60ed3",
//         intro: "This was probably one of the most spontaneous things I've ever done, I was planning on working in Portland for the summer but a sudden change of plans led to this awesome trip!",
//         url: "#/blog?id=0"
//       },
//       {
//         title: "Capitol Reef National Park",
//         date: "May 30, 2016",
//         titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/capitolreef%2FIMG_0728.JPG?alt=media&token=19c99e57-96d2-4f9d-bd77-591ea4307f9b",
//         intro: "Another spontaneous trip happened because it was a holiday and I didn't have work...  It's so good to have friends who can make room for you at the very very last minute",
//         url: "#/blog?id=1"
//       }
//     ]
//   },
//   {
//     row: [
//       {
//         title: "Costa Rica and Nicaragua",
//         date: "June 28 - July 7, 2016",
//         titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/costaricanic%2FIMG_0859.JPG?alt=media&token=2fcccf10-305a-4e63-b14c-55bc64a74c3a",
//         intro: "This was my official first solo trip, and it was a really good experience.  I spent a few days mostly on the Carribean side of Costa Rica and then headed north for Nicaragua and saw Salazar",
//         url: "#/blog?id=2"
//       },
//       {
//         title: "Zion National Park and Canyoneering Birch Hollow Slot Canyon",
//         date: "August 11 - 12, 2016",
//         titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/birchhollow%2FScreen%20Shot%202016-12-11%20at%204.33.31%20PM.png?alt=media&token=d9f27379-fb38-4990-9c97-f4a92ffeda39",
//         intro: "This was my first canyoneering experience, Brayden had some passes to do the Submarine slot canyon in Zion but a rock ended up falling and blocking the road so that no one could go, but we had a good backup plan",
//         url: "#/blog?id=4"
//       },
//       {
//         title: "Yankee Doodle Canyon",
//         date: "September 16 - 17, 2016",
//         titleImg: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle1.png?alt=media&token=7ebdc95d-ee6c-494a-be9f-9df871c1c7bc",
//         intro: "So this is from an external site, but it just gives details on a trip me and a few friends took down to Yankee Doodle Canyon, near Leeds, Utah, it was a great time!",
//         url: "#/blog?id=5"
//       }
//     ]
//   },
//   // {
//   //   row: [
//   //     {
//   //       title: "Costa Rica and Nicaragua",
//   //       date: "June 28 - July 7, 2016",
//   //       titleImg: "https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/costaricanic%2FIMG_0859.JPG?alt=media&token=2fcccf10-305a-4e63-b14c-55bc64a74c3a",
//   //       intro: "This was my official first solo trip, and it was a really good experience.  I spent a few days mostly on the Carribean side of Costa Rica and then headed north for Nicaragua and saw Salazar",
//   //       url: "#/blog?id=2"
//   //     }
//   //   ]
//   // }
//   ]
