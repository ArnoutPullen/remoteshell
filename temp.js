response = (error, output, stderror) => {
	if (output.includes("\n")) {
		output = output.split("\n");
	}
	return {
		"error": error,
		"response": output,
		"stderror": stderror
	};
};

function response(error, output, stderror) {
	if (output.includes("\n")) {
		output = output.split("\n");
	}
	return {
		"error": error,
		"response": output,
		"stderror": stderror
	};
}

function checkPlatform() {
	// 'aix', 'android', 'darwin'(macos), 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'(windows), 'cygwin'
	$platform = process.platform;
	return $platform;
}