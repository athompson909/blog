app.directive('dynamic', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});

app.controller('BlogCtrl', [
'$scope',
'factory',
'$sce',
function($scope, factory, $sce) {
    $scope.select ='Mis Viajecitos';

    $scope.id = getParameterByName('id', undefined);
    if($scope.id == undefined) {
      return;//no article exists
    }


    $scope.articles = [
      {
        title: "Jalisco Baby!",
        date: "April 27 - May 8, 2016",
        vids: [
          "https://www.youtube.com/embed/KM0Lfj-232s",
          "https://www.youtube.com/embed/vQcs_EEbDCQ",
          "https://www.youtube.com/embed/3NZUilxDJ4M",
          "https://www.youtube.com/embed/tGXrFq9rZbY",
          "https://www.youtube.com/embed/5MQmzmQbAZk"
        ],
        images: [
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FIMG_0471.JPG?alt=media&token=48f719e9-8fb3-4625-9903-12b11b96ffb0",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FIMG_0476.JPG?alt=media&token=0d6d5cb2-ec94-4108-a37c-7ac9e48f49f3",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FIMG_3100.JPG?alt=media&token=b83d1736-266e-4701-9e4c-4ff4d436e517",
            orientation:"portrait"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FIMG_0504.jpg?alt=media&token=4285b653-10ce-43c8-aae4-c0821c943e6a",
            orientation:"portrait"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FIMG_3120.JPG?alt=media&token=35af3448-7d8a-4387-b3f4-8456051a4689",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FIMG_0535.JPG?alt=media&token=43bad385-4838-41c2-a504-3ae94987929f",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FUNADJUSTEDNONRAW_thumb_229.jpg?alt=media&token=3ac65427-6b98-4c04-83af-6cc15f42e2f0",
            orientation:"portrait"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FIMG_0553.JPG?alt=media&token=50adc0cc-cc8f-41d1-8b21-a293d7f7f278",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2Ffullsizeoutput_9d.jpeg?alt=media&token=44d79576-7229-4838-a530-a01026ca5ef4",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FUNADJUSTEDNONRAW_thumb_24b.jpg?alt=media&token=da29e0bf-c3bb-44aa-b297-65aed915d810",
            orientation:"portrait"
          },
          {
            src:"",
            orientation:"portrait"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/guadalajaratrip%2FUNADJUSTEDNONRAW_thumb_26d.jpg?alt=media&token=0fb180a5-aa4c-41ac-90d8-3b9e24f98665",
            orientation:"portrait"
          }
        ],
        innerHTML: '<div class="col-sm-12">  <h2>{{articles[id].title}}</h2>  <h4>{{articles[id].date}}</h4>  <hr>  <h3>Prologue</h3>  <p>Over the 2015-2016 school year me and my cousin Sydney became really good friends.  We started talking about going to Guadalajara, Mexico to visit her family over the summer; and I love travelling so I was getting way excited about it but then I decided to take a summer job in Portland, Oregon, and that crushed our dreams.</p>  <h3>The Story</h3>  <p>On my first day on the job I ended up making an illegal u-turn which led to a car accident with the company van, I was immediately terminated.  This unfortunate event led to being a blessing in disguise, and made for me having a great summer.  After I learned I was fired I called Sydney and we decided that we’d make the trip to Guadalajara and a day later we had purchased plane tickets!  I got fired on Saturday and that Thursday was the day we were flying to Jalisco, it was too good to be true.</p>  <h3>The Trip</h3>  <p>So it turns out you can fly into Mexico for cheap by flying out of the Tijuana airport, which is right on the Mexico-US border, on Tuesday at 5:00 AM we left Provo and had a wonderful drive/bonding sesh on our way to Southern California, we arrived at Courtney’s house in Rancho Bernardo at about 4:00 in the afternoon and there were zero traffic issues the whole drive down.</p>  <br>  <iframe frameBorder="0" ng-src="{{vidUrls[0]}}"></iframe>  <br>  <p>A friend of the Reed family drove us to the border crossing to the Tijuana airport where we spent $12 to cross directly from the US into Mexico and straight into the airport.  From there it was a 2 hour flight to Guadalajara.  On arrival in Guadalajara we were picked up by Ron and we met up with the family at a mall in Tlajomulco area, near the gated community they lived in.  My first taste of Jalisco was pollo con mole which was delish, unfortunately Sydney chose this peanut chicken dish that just tasted like peanuts... it was yuck!</p>  <div class="{{articles[id].images[0].orientation}}"><img src="{{articles[id].images[0].src}}"></div>  <br>  <p>The next morning we hit the market, which was a taste of Peru all over again, the people were so friendly and let us try some guava.  The rest of the day was spent exploring Tlaquepaque, we had some great food and explored an old Mexican colonial town that had been absorbed by Guadalajara proper.  Tlaquepaque was beautiful!  I had this amazing drink called Cazuela, a mainly citrus fruit drink served in a bowl with a straw.</p>  <div class="{{articles[id].images[1].orientation}}"><img src="{{articles[id].images[1].src}}"></div>  <br>  <div class="{{articles[id].images[2].orientation}}"><img src="{{articles[id].images[2].src}}"></div>  <br>  <div class="{{articles[id].images[3].orientation}}"><img src="{{articles[id].images[3].src}}"></div>  <br>  <p>Sunday was awesome!  We went to church with the Reeds and I was able to proselyte with the elders that night.  Teaching in Spanish took me right back to the mission like you wouldn’t believe!  Elder Starley, the gringo, was from Reno and he now goes to BYU, I see him every now and then in the Smith Fieldhouse, he and his comp were such good guys!</p>  <div class="{{articles[id].images[4].orientation}}"><img src="{{articles[id].images[4].src}}"></div>  <br>  <p>Monday was a spa day for the girls while me and Ron hit Guachimontones, an archeological site that consisted of some stepped pyramids constructed by a society known as the Teuchitlán tradition.  It was a super interesting place and a lot of it remains unexcavated, there was a town nearby called Teuchitlán, it was a beautiful little place and they were having a big festival and there was free beer.  The car battery ran out of charge so that added a little bit of interest to our afternoon, we were able to make the hour drive back to Tlajomulco by turning off everything electrical in the car, making for a windy trip back.</p>  <div class="{{articles[id].images[5].orientation}}"><img src="{{articles[id].images[5].src}}"></div>  <br>  <div class="{{articles[id].images[6].orientation}}"><img src="{{articles[id].images[6].src}}"></div>  <br>  <p>Me and Sydney decided to rough it out on our own for a little bit and I was dying to hit the beach, so we got a good deal at the Westin in Puerto Vallarta and some bus tickets to get out there.  We got up early Tuesday morning to get to the Zapopan terminal to catch our bus and it was a long, but beautiful drive.  The small mexican towns we passed were incredible, with the cathedrals so visible in the center of each one as we passed by.  Probably the highlight of the trip though was the bathroom, I think I walked in on someone and then when Sydney went in she didn’t come out for like 20 minutes, I guess she was having a hard time keeping her balance.</p>  <br>  <iframe frameBorder="0" ng-src="{{vidUrls[1]}}"></iframe>  <br>  <p>Our arrival in Puerto Vallarta was beyond exciting.  We got out of the bus terminal and I talked to this pregnant girl for a little bit who explained the bus system (they call them camiones) so we’d be able to make it to the hotel and then to el centro and el malecón.  It was about noon and we weren’t able to check in until 1:00 so we decided catch a camión heading straight for the boardwalk where we’d have lunch, it was the champions league semifinal that day so we stopped at a restaurant and watched part of the Manchester City vs. Real Madrid game (Real won).  After that we got back in a bus heading to our hotel.  It felt so cool to be on our own in PV, it was a big deal for both of us.  After a 45 minute bus ride and a half an hour walk we finally made it to the Westin, which was awesome.  It was the nicest place but kind of awkward cuz the bathroom wasn’t very private haha.  We spent the rest of daylight in paradise, we spent some time in the ocean on the empty beach and then in the pool, which was so nice with the coconut trees and the breeze.</p>  <br>  <div class="{{articles[id].images[7].orientation}}"><img src="{{articles[id].images[7].src}}"></div>  <br>  <p>That night we set out to go clubbing.  We ate outside at this dope restaurant on the beach, I had this really good ceviche oh man.  Then we walked along the boardwalk and there was tons of random things going on, when we got to where all clubs were we were disappointed to find out that like all the clubs were basically empty (I mean, it was Tuesday night).  At about 11:30 we took a taxi back to the hotel and we were both dead tired.</p>  <div class="{{articles[id].images[8].orientation}}"><img src="{{articles[id].images[8].src}}"></div>  <br>  <div class="{{articles[id].images[9].orientation}}"><img src="{{articles[id].images[9].src}}"></div>  <br>  <p>The next morning we had chilaquiles for breakfast at this little restaurant across the street from the hotel and then tried to maximize our time at the beach before we’d have to check out of the hotel, the morning went by too quickly and I felt like I needed more time at the pool, but we made the most of it, checking out right at the latest time possible.  We then had a few hours in the city before our bus left.  It was a lot of fun to chill in the city, we had some really good fish tacos and we watched the Atletico Madrid beat Bayern Munich.</p>  <p>I felt like the bus ride home was really pleasant, but poor Sydney was getting car sick.  We had some more really good deep conversations and that’s just one of those times that I’ll always remember, we were able make the most of all the hours and hours we spent together in cars/busses/planes, I get nostalgic thinking about all that.</p>  <p>Looking back, it seems amazing to me that we did so much.  I’m not even done.  We were able to go to the temple and help clean up the next day, I had a good heart to heart with one of the workers there who was having a hard time cuz he felt like it wouldn’t work out for him to get married hehe, but honestly that kid was awesome (what was his name?... Franco?...crap).  There was an outlet outside of city limits and Aunty Michelle let me drive out there with Sydney and Baylie, I felt cool.  I found these ray-bans that were only 60 bucks and sometimes I still think about them:p.</p>  <br>  <iframe frameBorder="0" ng-src="{{vidUrls[2]}}"></iframe>  <br>  <p>Our last full day was spent in the Guadalajara city center.  We saw some old buildings and had some birria and this other thing that I forgot what it was called... also this cactus fruit that was way refreshing.</p>  <br>  <iframe frameBorder="0" ng-src="{{vidUrls[3]}}"></iframe>  <br>  <div class="{{articles[id].images[11].orientation}}"><img src="{{articles[id].images[11].src}}"></div>  <br>  <br>  <p>We got up early to get to the airport and the flight home felt long, I always get claustrophobic in planes.  After that we hit VG’s donuts which I loved but it’s kind of weird cuz they only accept cash.  After that we headed up to spend the evening in OC, where we stayed with Sydney’s aunt and uncle, they were so nice to us!  The next day we got up super early, and ended up arriving in Provo around 3:30... so props to us!!</p>  <br>  <iframe frameBorder="0" ng-src="{{vidUrls[4]}}"></iframe>  <br>  </div>'
      },
      {
        title: "An Afternoon in Capitol Reef National Park",
        date: "May 30, 2016",
        vids: [],
        images: [
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/capitolreef%2FUNADJUSTEDNONRAW_thumb_29b.jpg?alt=media&token=b656e177-fed5-4343-9604-54546a574174",
            orientation:"portrait"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/capitolreef%2FUNADJUSTEDNONRAW_thumb_2a0.jpg?alt=media&token=372f661d-4120-4f11-85e2-97c72dae2ed1",
            orientation:"portrait"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/capitolreef%2FUNADJUSTEDNONRAW_thumb_2a6.jpg?alt=media&token=695339ef-25ff-49d7-999f-80648ca37fcd",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/capitolreef%2FIMG_0728.JPG?alt=media&token=19c99e57-96d2-4f9d-bd77-591ea4307f9b",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/capitolreef%2FUNADJUSTEDNONRAW_thumb_2ae.jpg?alt=media&token=1fcb85f3-e3e5-49fc-bad0-701b355a3da8",
            orientation:"landscape"
          }
        ],
        innerHTML: '<div class="col-sm-12">  <h2>{{articles[id].title}}</h2>  <h4>{{articles[id].date}}</h4>  <hr>  <h3>Prologue</h3>  <p>Another spontaneous trip happened because it was a holiday and I didn\'t have work... It\'s so good to have friends who can make room for you at the very very last minute.  I walked down to Michael’s apartment and said, “hey, we should go somewhere today,” and he was like “well I have a million things to do, but ok!”  After looking at some different options online I came to realize that the destination of our dreams was Capitol Reef National Park... like the least-known national park out of Utah’s 5.</p>  <h3>The Trip</h3>  <p>So we left at 1:30 and it was probably one of my favorite drives ever... Michael and I talked about everything (and lots of level 4 conversation if you know what I mean haha...) and it was super meaningful.</p>  <p>We arrived at Capitol Reef at about 4:30 and it kind of reminded me of Moab/Arches area.  There was no entrance where they charged us so we didn’t even need to show them our national parks pass... we just ended up stopping at the visitor’s center for a sec to find out what hike we could do.</p>  <div class="{{articles[id].images[0].orientation}}"><img src="{{articles[id].images[0].src}}"></div>  <p>The hike we decided to do was called _____, it wasn’t super long but it was beautiful, it was basically a wide slot canyon.  At the end we came out to a road and crossed it so we could get in the river on the other side.  After playing in the river we went back through the slot canyon but took a trail that put us at the top of the plateau-like thing so we could see _____ arch.  This ended up being another really meaningful moment in my life... the sun was setting and me and Michael just sat and watched in silence for about a half hour.  One of the nice things about the lesser-known national parks is they aren’t so crowded.  We were able to soak in our surroundings without any form of human interruption.  This experience has helped me be more present when I am someplace beautiful and I later came to find out would become one of my favorite parts of my first solo trip I did in Central America.</p>  <div class="{{articles[id].images[1].orientation}}"><img src="{{articles[id].images[1].src}}"></div>  <div class="{{articles[id].images[2].orientation}}"><img src="{{articles[id].images[2].src}}"></div>  <div class="{{articles[id].images[3].orientation}}"><img src="{{articles[id].images[3].src}}"></div>  <p>After that we hiked down the mountain in the dark.  We got to the car and changed and embarked on the trip back home, Michael drove while he slept (you’re the man Michael!!!!).  We got back at 1:00AM and I slept for a few more hours until I had to be at work at 5:30 the next morning.  What an awesome trip!</p>  <div class="{{articles[id].images[4].orientation}}"><img src="{{articles[id].images[4].src}}"></div>  <br></div>',
      },
      {
        title: "Stepping foot in Central America",
        date: "June 28 - July 7, 2016",
        vids: [
          "https://www.youtube.com/embed/-_JCJJV2qFw",
          "https://www.youtube.com/embed/HvCsUde_09Q"
        ],
        images: [
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/costaricanic%2FIMG_0844.JPG?alt=media&token=678c9045-61b5-43b5-8ff4-95ed89f35994",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/costaricanic%2FUNADJUSTEDNONRAW_thumb_2ec.jpg?alt=media&token=07497811-98c9-4d46-837e-ef625d72b943",
            orientation:"portrait"
          }

        ],
        innerHTML: '<h2>{{articles[id].title}}</h2>  <h4>{{articles[id].date}}</h4>  <hr>  <h3>Prologue</h3>  <p>Ok, so it’s the end of December and I’m about to head down to visit some friends in South America.  I’ve always wanted to travel and this trip I made was a pretty pivotal moment in my life because I came to realize I was capable of much more than what I initially thought.  Solo travel is a tough but amazing experience, it is one of the most empowering things you can do.</p>  <h3>My trip to Central America</h3>  <p>So the day before I had to leave I was getting excited and having a hard time working... it was hard to focus on anything and I kind of forgot about a few important things (aka money) but luckily my debit card had an issue which helped me remember everything I had to do and get things squared away so that my trip could be smooth sailing.  I got to the airport super early and had a good long wait before my flight, that was a good time to make some calls and get caught up with Jake and Vilchez.</p>  <p>After a good long layover in LAX and a 5 hour overnight flight I was landing in San Jose.  It was understandably not one of my best nights but the change in scenery kept me awake for the first few hours I was in Costa Rica.  I got out of the airport after exchanging a few dollars for colones at a horrible rate.  San Jose was a beautiful verdant mountainous city.  I took a bus from the airport into the city which costed a few dollars.  Being in the bus was kind of my first taste of what I would be experiencing for the next two weeks.  It was then that I knew I could no longer speak English and I had no idea that I’d be sure when the bus had arrived in central San Jose, I did some asking and that made feel kind of awkward but that’s the way things go when you’re on your own.  From there I took a taxi to <em>el gran terminal del Caribe</em> which serves for getting to anywhere on the Caribbean side of the country. </p>  <p>At the terminal I bought an extremely expensive bottle of water and was still kind of getting my bearings but somehow managed to buy my ticket and get into my seat.  I had a nice bus ride through the most beautiful mountain/cloud forest/jungle scenery.  I sat by an old lady who was on her way to visit her daughter in Limón, which was our final destination.</p>  <br>  <iframe frameBorder="0" ng-src="{{vidUrls[0]}}"></iframe>  <br>  <p>Arriving in Limón led to a little breakdown for me.  I was tired and hadn’t eaten and was trying to get my bearings and all of the sudden I was in this Caribbean port city and it was crowded and not a tourist area.  I called my mom and she talked me through things and then I went into the bank to exchange currency and that kind of helped me to be able to relax and come back to reality.  After exchanging currency I went over to this pensión (as they would call it in Perú) and I got a plate of beans, rice, chicken and plantain from this nice lady named Mayra.  Mayra was so friendly and we had a good little chat, after I was done eating her (ex) husband Eduardo came in and gave me a little history of the city of Limón.  Me and Eduardo walked down to the plaza which was right by the boardwalk (the boardwalk was consisted of all these earthquake ruins pretty much) and we saw the first Island on mainland America that Columbus saw/landed on supposedly.</p>  <div class="{{articles[id].images[0].orientation}}"><img src="{{articles[id].images[0].src}}"></div>  <br>  <p>After a good chat with Mayra and Eduardo (and kind of following my plans) I decided to head out to a small beach town called Puerto Viejo de Talamanca.  It was a one hour bus ride out to Puerto Viejo and that place might be my favorite place in the world.  It was so tranquil and beautiful and I literally felt like it was forgotten by the rest of the world.  I felt free from all regular cares while I was there.  I had the best hostel, my room a little second story loft with a view of the jungle canopy.  I was dying.  The beach was also the best in the whole world, the sand was black and it was like a mattress and the water just felt good and not so irritating like the beaches on the Pacific.  I felt so good being there.  You could just see the rainforest clad mountains descend into the ocean.</p>  <iframe frameBorder="0" ng-src="{{vidUrls[1]}}"></iframe>  <div class="{{articles[id].images[1].orientation}}"><img src="{{articles[id].images[1].src}}"></div>  <br>  <p></p>  <p></p>',
      },
      {
        title: "Chile... what the?!?... tanto desarrollo?",
        date: "June 28 - July 7, 2016",
        vids: [],
        images: [
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/chile%2Fchile1.jpg?alt=media&token=ac60affd-e549-4256-a150-e4f8f6315223",
            orientation:"portrait"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/chile%2Fchile2.jpg?alt=media&token=40fae264-8c28-4c65-9dd6-7825a2d2a070",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/chile%2Fchile3.jpg?alt=media&token=89a42217-8eb3-47ae-9630-17088216254f",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/chile%2Fchile5.jpg?alt=media&token=91975461-d80c-47a6-8e63-b88b4ae020eb",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/chile%2Fchile8.jpg?alt=media&token=f20764ce-2d09-44b6-9715-ee0a3ad38421",
            orientation:"portrait"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/chile%2Fchile9.jpg?alt=media&token=a9643800-2c54-427c-afdf-ef9d9e71abb7",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/chile%2Fchile10.jpg?alt=media&token=8d21a4fd-4722-48da-bfbc-b26dba4f1c90",
            orientation:"landscape"
          },
          {
            src:"https://firebasestorage.googleapis.com/v0/b/misviajecitos-3d2e6.appspot.com/o/chile%2Fchile11.jpg?alt=media&token=d5066176-2644-44ab-88c9-57bb59061cfa",
            orientation:"landscape"
          }
        ],
        innerHTML: '<div class="col-sm-12">  <h2>{{articles[id].title}}</h2>  <h4>{{articles[id].date}}</h4>  <hr>  <h3>Prologue</h3>  <p>So I arrived in Chile at the Chacalluta (Peru/Chile) border crossing.  I ended up making it a lot early than expected (like way early) and that meant I had most of the day to myself in Arica.  I’d gotten to Tacna from Arequipa in an overnight bus and I slept super well the whole way there, but we arrived at 3:50, which is soooo early.  So pretty much after that I found out there’s an international terminal you go to so I walked over and then got in a colectivo heading to the border.  About 45 minutes later we were at the border, and everything was so slick, we were in and out in about 15 minutes.  From there the taxista took us to Arica (another 20 minutes).</p>  <h3>Arica</h3>  <p>Initially arriving in Arica I was slightly nervous because I wasn’t planning on even going there, so I didn’t really know anything about it haha.  I hurried up and looked up stuff about it and took out some chilean pesos out of an ATM and tried to figure out this whole new country all alone and that was a lot to take in for one small boy at 5 in the morning all by himself.  Luckily, I figured it out.  Arica was beautiful.  It’s a little coastal town in the Atacama desert (the world’s driest desert).  I walked from the bus terminal to the centro, it took about 20 minutes, and it was fun to just take in all the new sights.  I then went around looking for a place to crash for a few hours (in peru they were always called hospedajes but here they’re only called hostales) cuz I wanted a nap and a shower.  So that was the first taste of chilean high prices.   I finally found a place that let me stay from 7-3pm for 15,000 pesos.</p>  <div class="{{articles[id].images[0].orientation}}"><img src="{{articles[id].images[0].src}}"></div>  <p>Haha as I’m writing this I realize I’m keeping in every single detail.  But I don’t think I have time to write about every little thing.  Oh... I got breakfast in this little bakery and I got a chicken empanada and it was alright.</p>  <p>That day I did some napping and then walked around in the centro.  There was this sick highway that kind of went along the coast and the plaza was close by.  There were stores and stuff and I got jugo at this market and was just slipping out pesos left and right.  There was a huge rock hill with a chilean flag on the top on one side.  I found out you could walk to the top of it... so naturally I walked up it.  It was like the shortest walk ever.  Up at the top there were some great views and I had a good chat with this guy that was asking me if I smoked weed (everybody down there does that) and then I went back down, and took a taxi for 10,000 pesos to the airport.</p>  <div class="{{articles[id].images[1].orientation}}"><img src="{{articles[id].images[1].src}}"></div>  <p>From the airport I took a late afternoon flight to Santiago.  I arrived at SCL around 8:00 and thanks to the fact that it was summer in Chile the sun was out.  Renzo’s uncle came and picked us up and the freeway layout of santiago reminded me a ton of Utah.  It was nuts.  That night I met Vilchez’s mom (who’s name I can’t remember at the moment), Jorge (her second husband) and Jair, Renzo’s little brother and I kind of like his name.  They were so nice to let me stay with them in Santiago.</p>  <h3>Santiago time</h3>  <p>I found Santiago very impressive.  It was light years ahead of Lima in all aspects, the streets were organized, the metro was fast, and the landscaping was on point.  Me and Renzo hiked <span>El Cerro San Cristobal</span> all the way up to the top, that gave us a pretty good view of everything in the city.  After that we got some mote con huesillo, this chilean drink that I have mixed feelings about... but it was super chilean.</p>  <div class="{{articles[id].images[2].orientation}}"><img src="{{articles[id].images[2].src}}"></div>  <p>After finding our way down the hill (and almost falling in front of these other Americans and kind of feeling embarrassed about that) we hit the metro and went to see the white house of chile.  Coincidentally there was a Picasso exhibition going on at El Centro Cultural Palacio de la Moneda so I we spent a few hours there.  That was interesting to learn more about Picasso and his life.  Honestly, after the whole thing was over I had mixed feelings about the guy.  The most interesting thing, however, was learning about the making of <span>Guernica</span> (unfortunately that one wasn’t being displayed, nor <span>Les demoiselles d’Avignon</span>).</p>  <p>For lunch we headed over to Renzo’s uncles and got to chill with some real chileans.  (Remember that Renzo and his mom and brother are Peruvian).  They were all having their pisco sour and the mormons had inca kola, (which never gets old btw).  They were so fun to joke around with but you could tell that they weren’t Renzo’s favorite crowd to hang out with.  What I love about Renzo is he appreciates those sublime quiet scenes... it was good to go sightseeing around with the guy, and he really enjoyed it.  During the afternoon we went through the Plaza de Armas and I got some [uglyish] sunglasses and the cathedral there in the Plaza was one of the best I’ve seen in South America.  We did so much this day... uhh... we watched the Sunset from the Costanera, the tallest building in South America.  It was a nice few but I guess I don’t really get that excited about going to the tops of buildings but that’s what we did and it was fun.  We got home late and watched a show about Japan and I had some fideos.</p>  <div class="{{articles[id].images[3].orientation}}"><img src="{{articles[id].images[3].src}}"></div>  <p>Sunday was great.  The sun was out and I really appreciated the heat.  We went to church and that was fun... one of the gringo elders didn’t really like me but the other one was way chill.  Me and Renzo then spent the afternoon in the city, we just laid on the grass on the Avenida Libertador Bernardo O’Higgins.  Renzo was really enjoying this (he doesn’t get out much haha).  After this we walked up the Avenida a little more and had some arepas (which somebody pointed out to me were Colombian and not Venezuelan) and yeah everything was great.  We were going to try to go to a devotional but that ended up not happening.  We also had arroz con pollo with the sauce you put on papas a la huancaina for dinner and I loved that.</p>  <h3>The Coast</h3>  <p>Monday was intense, we were all over the place on that day.  it consisted of visiting 3 different cities: Viña del Mar, Valparaiso, and Reñaca.  </p>  <div class="{{articles[id].images[4].orientation}}"><img src="{{articles[id].images[4].src}}"></div>    <h3>Viña</h3>  <p>We got up around 5:30 so that we could catch our bus heading to Viña del Mar.  It was really overcast when we arrived in Viña and I was worried it’d be a cold day.  Viña was a classy city.  There were a lot of castles along the coast... we saw all the famous places (the clock and the gardens and the amphitheater).  I tried palmeras for the first time and those became one of my fav snacks on that day.</p>  <div class="{{articles[id].images[5].orientation}}"><img src="{{articles[id].images[5].src}}"></div>  <h3>Valparaiso</h3>  <p>After the morning in Viña we hopped on a bus that took us 20 minutes south to Valparaiso.  I would say Valparaiso is one of the most beautiful cities I’ve been to.  Everything was on the hillside that plummeted into the sea.  We took a conveyer belt elevator up to high ground and had some nice views and then headed down and got on a boat and saw tons of sea lions.</p>  <div class="{{articles[id].images[6].orientation}}"><img src="{{articles[id].images[6].src}}"></div>  <h3>Reñaca</h3>  <p>Reñaca was the place that helped me soak in the summer more than anywhere.  By this point of the day the sun had came out and so we headed out to the beach.  Everybody talked about how cold the water was but it honestly wasn’t that bad... the only thing is that they didn’t let me go that far out.  I felt so happy at the beach in Reñaca and was not excited to go back to snowy Utah.</p>  <div class="{{articles[id].images[7].orientation}}"><img src="{{articles[id].images[7].src}}"></div>  <p>Following our Reñaca excursion we faced some complications trying to get back to Santiago but we finally made it back around midnight.  The next day I had a little morning run and then said my goodbyes and that was that.  Getting home ended up being complicated but I don’t really want to remember all that stuff about missing my plane in Lima.</p></div>',
      },
      {
        title: "Peru",
        date: "",
        vids: [],
        images: [],
        innerHTML: '<div class="col-sm-12">  <h2>{{articles[id].title}}</h2>  <h4>{{articles[id].date}}</h4>  <hr>  ',
      },
      {
        title: "Atlanta",
        date: "",
        vids: [],
        images: [],
        innerHTML: '<div class="col-sm-12">  <h2>{{articles[id].title}}</h2>  <h4>{{articles[id].date}}</h4>  <hr>  ',
      }
    ]

    $scope.setArticle = function (index) {
      $scope.currentArticle = $scope.articles[index];
      $scope.vidUrls = [];
      for(var i = 0; i < $scope.currentArticle.vids.length; ++i) {
        $scope.vidUrls.push($sce.trustAsResourceUrl($scope.currentArticle.vids[i]));
      }
      console.log($scope.vidUrls);
    }

    $scope.setArticle($scope.id);
}
]);

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
