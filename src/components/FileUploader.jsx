import React, { useState } from 'react';
import ChatDisplay from './ChatDisplay';

function FileUploader() {
	const [fileContent, setFileContent] = useState(null);

	function handleFileInputChange(event: any) {
		const file = event.target.files[0];

		const reader = new FileReader();
		reader.onload = function(event) {
			setFileContent(event.target.result);
		};
		reader.readAsText(file);
	}


	const regex = /^(\d{2}\/\d{2}\/\d{4}), (\d{2}:\d{2}) - ([^:]+): (.*)$/gm;

	let match;
	const messages = [];
	while ((match = regex.exec(fileContent)) !== null) {
		const date = match[1];
		const time = match[2];
		const name = match[3];
		const message = match[4];
		messages.push({ date, time, name, message });
	}

	// console.log(messages);

	return (
		<div>
			<input type="file" onChange={handleFileInputChange} />
			{fileContent && (
				<div>
					<h3>File Content:</h3>
					{/* <pre>{fileContent}</pre> */}
					<ChatDisplay messages={messages}/>
				</div>
			)}
		</div>
	);
}

export default FileUploader;


