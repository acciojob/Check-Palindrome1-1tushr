// complete the given function

function palindrome(str){
let str1=str;
for(let i=str.length;i>=0;i--)
	{
		if(str1[i]===str[i])
		{
			console.log("true");
		}
		else {
			console.log("false");
		}
	}
	
}
module.exports = palindrome
