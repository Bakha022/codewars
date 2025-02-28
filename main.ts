// export class Kata {
// 	static disemvowel(str: string) {
// 		return str.replace(/[aeiouAEIOU]/g, '')
// 	}
// }

// console.log(Kata.disemvowel('This website is for losers LOL!'))

// export function countBits(n: number): number {
// 	let sum: number = 0
// 	n.toString(2)
// 		.split('')
// 		.forEach(element => (element == "1" ? (sum += 1) : sum))
// 	return sum
// }
// console.log(countBits(7))

// export class Kata {
// 	static squareDigits(num: number): number {
// 		let number = ''
// 		num
// 			.toString()
// 			.split('')
// 			.forEach(element => (number += +element * (+element)))
// 		return +number
// 	}
// }

// console.log(Kata.squareDigits(9119));

export function isValidWalk(walk: string[]) {
	if (walk.length !== 10) return false
	let north = 0,
		south = 0,
		west = 0,
		east = 0
	walk.forEach(element => {
		if (element == 'n') north++
		else if (element == 's') south++
		else if (element == 'w') west++
		else if (element == 'e') east++
	})

	return north === south && east === west
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) // true
console.log(isValidWalk(['n', 'n', 'n', 's', 's', 's', 'e', 'w', 'e', 'w'])) // false
console.log(isValidWalk(['n', 's']))
