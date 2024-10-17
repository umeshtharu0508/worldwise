

In this guided(Jonas Schmedtmann) hand’s on practiced “worldwise” React Single page application user can perform the following things:
1.	Using this interesting and useful application user can basically register all the cities that they have ever travelled to. So in the left side cities list is there and the country list also which automatically comes regarding cities.
2.	 They can start tracking by login using their account. For this purpose already one fake login account is injected in this application. They can logout also from their account.
3.	Two basic product and pricing pages are there where they can explore about app.
4.	In the right side one real map is implemented using this we can get our current position by clicking on “get current location” button. 
5.	And simply by clicking on city name marker, we can add that city in our travelled city list. And also we can delete the cities. 
6.	After clicking on one of the cities app will move there and it will show us all the details like city name, the date user went there and user’s notes, even there is a ling of Wikipedia article about that city.
7.	User can easily navigate between current and previous pages.
   
Tools used:
-----------
1.	React + Vite libraries are used to build and practice this project. So basically sidebar, map and user three main functional components it has i.e. heart of this project.
2.	json-server is also implemented for this application for some fake database purpose. so "npm run server" should be executed to run the json-server. 
3.	For routing and navigation purpose React-Router-DOM library is used.
4.	For styling CSS Modules approach is taken.
5.	For implementing map  “leaflet” library is used
6.	For data loading purpose some spinner is implemented(styling is provided already).
7.	For some state management useState() and for data fetching useEffect() hooks are used.
8.	Custom hooks like useGeolocation() is used for getting our current location and useURLPosition() is used for using search parameters.
9.	 Context-API is also used for global state management and also for user authentication i.e. login and logout purposes.

In this project some starter html(boiler-plate) code is already given by instructor and css styling also completely given by instructor but all core React coding and logic part of react components are practiced by me in the guidance of instructor(Jonas Schmedtmann)
