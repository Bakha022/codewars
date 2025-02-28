// export class Kata {
// 	static disemvowel(str: string) {
// 		return str.replace(/[aeiouAEIOU]/g, '')
// 	}
// }

// console.log(Kata.disemvowel('This website is for losers LOL!'))

export function countBits(n: number): number {
	let sum: number = 0
	n.toString(2)
		.split('')
		.forEach(element => (element == "1" ? (sum += 1) : sum)) 
	return sum
}
console.log(countBits(7)) 
