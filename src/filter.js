const persons = [
	{name: 'John', age: 25},
	{name: 'Pete', age: 30},
	{name: 'Mary', age: 16}
]

const adults = persons.filter(person => person.age > 18)

console.log(adults);