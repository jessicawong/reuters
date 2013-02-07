$("/html") {
  $("/body") {
  	attribute("id","mvHome")
  }

  #removing from header
  $("//div[@id='editionsTop']|//div[@id='utilities']") {
  	remove()
  }

  #removing footers
  #group start
	  $$("#footerHead") {
	  	remove()
	  }
	  $$("#footer") {
	  	remove()
	  }
  #group end

  #removing content
  #group start
	  $$(".linebreak") {
	  	remove()
	  }
	  $$("#channelHeadlines") {
	  	remove()
	  }
	  $$("#opinionCarousel") {
	  	remove()
	  }
	  $$("#opinionCarouselCanvas") {
	  	remove()
	  }
	  $$("#trendWatch") {
	  	remove()
	  }
	  $$(".ad") {
	  	remove()
	  }
  #group end
}