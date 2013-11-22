kylesimukka project
===========
designed and built in Portland, Oregon.

##check it out at http://kylesimukka.com

### built with
* AngularJS
* Bootstrap
* Imgur
* Grunt

### hosted with
* Amazon S3


Hackathons are awesome, you are thrown a bunch of cool ideas, given a set number of hours to design and build, and have to present at the end. 
Even though I've only participated in a select few, the concept behind hackathons has taken a new meaning when I approach many of my side projects now. 

The kylesimukka project is the result of a mini-hackathon I gave myself on November, 21, 2013. 

The primary goal was to build and launch a new website for myself. Easy right? Well if your like me, nothing is good enough to represent my professional career as a hybrid designer and developer. Then to make it worse, it's easy to get stuck in feature heaven and loose sight of any sort of MVP. After a week of this I usually tend to put it on the back burner for a later time. 

So by treating this project like a hackathon, I was setting myself up for some sort of success. 

Not having any back-end server dependency would decrease any risk and complexity, so I decided that it would be a static website hosted in S3. To accomplish this I picked the best tools for the job,  AngularJS, Bootstrap, Grunt, and Yeoman. Theming Bootstrap has never been easier, it allows quick iteration and plenty of flexibility to build the content structure the way I was envisioning. It didn't take long to narrow down the finer design details once I had the structure in place.

Now the more interesting part of this project is how one would modify and update content. This is where a CMS can be overkill and modifying static files becomes a hassle. So I split up the problem into two, A) The copy about me can be static B) The projects need to be dynamic.

Imgur is a great service for hosting images, but one feature they have is albums. Each album can contain any number of images, along with titles and descriptions. Bingo! Through the Imgur APIs, I'm able to get all the albums, the content for each album and images. This gave me the flexibility to dynamically manage my projects.



