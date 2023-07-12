function toObject(str) {
	let obj = {};
	try {
		str = str.trim(); // Extra spaces on ends
		str = str.slice(1, -1).trim(); // Remove Brackets {}
		const pairs = str.split(','); // key-value pair array
		pairs.forEach(pair => {
			const colonIndex = pair.indexOf(':');
			let key = pair.slice(0, colonIndex).trim();
			let value = pair.slice(colonIndex + 1).trim();
			// Handle quotes in key & value
			if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
				value = value.slice(1, -1);
			}
			if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
				key = key.slice(1, -1);
			}
			obj[key] = value;
		});

		return obj;

	} catch (error) {
		console.log("Input String must a valid javascript object");
		console.log("Error : " + error);
	}
	return null;
}

module.exports = (toObject)