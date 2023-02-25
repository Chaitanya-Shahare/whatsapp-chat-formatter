import React from "react";

const ChatDisplay = ({messages}) => {

	console.log(messages);
	return(
		<>
			<div className="max-w-sm m-auto">
				{messages.map(message => {

					return(
						<div className="bg-blue-300 m-3 rounded-lg rounded-tl-none p-2 w-fit max-w-xs">
							<small>
								<span>{message.name}</span>
							</small>
							<p>{message.message}</p>
							<small className="flex justify-between">
								<span>{message.date}</span>
								<span>{message.time}</span>
							</small>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default ChatDisplay;
