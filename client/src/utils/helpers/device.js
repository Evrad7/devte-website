function isMobile(agent) {
	if(typeof navigator !== "undefined"){
		if ( agent === void 0 ) agent = navigator.userAgent;
		return /Android|iPhone|iPad|iPod/i.test(agent)
	}
}

export {isMobile}