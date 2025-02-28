export class Kata {
	static disemvowel(str: string) {
		return str.replace(/[aeiouAEIOU]/g, '')
	}
}

console.log(Kata.disemvowel('This website is for losers LOL!'))
