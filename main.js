
	  //Refererences
	  let browserDetailsRef = document.getElementById("browserDetails");
	  let osDetailsRef = document.getElementById("osDetails");
	  var browserList = [
		{ name: "Firefox", value: "Firefox" },
		{ name: "Opera", value: "OPR" },
		{ name: "Edge", value: "Edg" },
		{ name: "Chrome", value: "Chrome" },
		{ name: "Safari", value: "Safari" },
	  ];
	  var os = [
		{ name: "Android", value: "Android" },
		{ name: "iPhone", value: "iPhone" },
		{ name: "iPad", value: "iPad" },
		{ name: "Macintosh", value: "Mac" },
		{ name: "Linux", value: "Linux" },
		{ name: "Windows", value: "Win" },
	  ];
	  let browserChecker = () => {
		/*
		userAgent contains Browser Details and OS details but we need to seperate them
	*/
		let userDetails = navigator.userAgent;
		for (let i in browserList) {
		  //check if the string contains any value from the array
		  if (userDetails.includes(browserList[i].value)) {
			//extract browser name and version from the string
			browserDetailsRef.innerHTML =
			  browserList[i].name || "Unknown Browser";
			break;
		  }
		}
		for (let i in os) {
		  //check if the string contains any value from the object
		  if (userDetails.includes(os[i].value)) {
			//display name of OS from the object
			osDetailsRef.innerHTML = os[i].name;
			break;
		  }
		}
	  };
	  window.onload = browserChecker();
	
