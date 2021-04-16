/*
(?=.{10,}$) #Check there is at least 10 characters in the string.
 (?=.*[a-z]) #Check if there is at least one lowercase in string.
 (?=.*[A-Z]) #Check if there is at least one uppercase in string.
 (?=.*[0-9]) #Check if there is at least one digit in string.
 (?=.*\W) #Check if there is at least one special character in string.
 */
export const passwordRuleRegex = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
