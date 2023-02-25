import React, {useEffect} from "react";
var _ = require('underscore');

const ChatDisplay = ({messages}) => {

	// console.log(messages);


					let names = [];
	return(
		<>
			<div className="max-w-sm m-auto bg-[#0D0D0D] text-[#FFFFFF]">
				{

					messages.map((message) => {
						if (!names.includes(message.name)) {
							names.push(message.name);
						}
					})
				}
				{
					messages.map(message => {

					let left = false;

					if (!(names === undefined))
						if (message.name === names[0])
							left = true

					return(
						<div className={ ` m-3 rounded-xl px-2 py-1 w-fit max-w-xs ${left === false 
							? "mr-3 ml-auto rounded-tr-none bg-[#075E54]": "rounded-tl-none bg-[#273443]"}` }>
							<small className="text-gray-300">
								<span>{message.name}</span>
							</small>
							<p className="my-1">{message.message}</p>
							<small className="flex justify-between  text-gray-300 text-xs">
								<span className="mr-1">{message.date}</span>
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
