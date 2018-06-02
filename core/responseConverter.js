responseConverter = (error, output, outputError) => {
	if (output.includes("\r\n")) {
		output = output.split("\r\n");
	}
	if (output.includes("\n")) {
		output = output.split("\n");
	}
	return {
		"error": error,
		"response": output,
		"outputError": outputError
	};
};
module.exports = responseConverter;